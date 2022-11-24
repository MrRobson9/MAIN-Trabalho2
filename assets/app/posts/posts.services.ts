import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import {Posts} from "./posts";
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { Mongoose } from "mongoose";

@Injectable()
export class PostService {
    private  PostService: Posts[] = [];

    constructor(private http: Http) {}

    addPosts(post : Posts){
        this.PostService.push(post);
        console.log(this.PostService);

        const bodyReq = JSON.stringify(post);
        const myHeaders = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/posts', bodyReq, {headers: myHeaders})
            .map((responseRecebida: Response) => responseRecebida.json())
            .catch((errorRecebido: Response) => Observable.throw(errorRecebido.json()));

    }

    getPosts(){
        return this.http.get('http://localhost:3000/posts')
        .map((responseRecebida: Response) => {
            const responseEmJSON = responseRecebida.json();
            const postsResponseRecebida = responseEmJSON.objSPostsRecuperadoS;            
            let transfomedCastPostModelFrontend: Posts[] = [];
                for(let post of postsResponseRecebida){
                    transfomedCastPostModelFrontend.push(
                        new Posts(post.content, post.user , post.likes, post._id,));
               }
                 
                    this.PostService = transfomedCastPostModelFrontend;
                 return transfomedCastPostModelFrontend;

                
                })
                

                .catch((errorRecebido: Response) => Observable.throw(errorRecebido.json()));
        }

        deletePosts(post: Posts) {
            console.log(post.ID)
            this.PostService.splice(this.PostService.indexOf(post), 1);
            return this.http.delete(`http://localhost:3000/posts/${post.ID}`)
                .subscribe(() => console.log('Sucessfully Deleted'));
        }
        
        likeIcrease(post: Posts){
            post.likes ++;            
            return this.http.patch(`http://localhost:3000/posts/${post.ID}`, post.likes )
                .subscribe(
                    res => { 
                        console.log(post)
                        console.log('received ok response from patch request');
                        console.log(res)
                      },
                      error => {
                        console.error('There was an error during the request');
                        console.log(error);
                      });
        }
    }

