import { Posts } from "./posts";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { PostService } from "./posts.services";
import Swal from "sweetalert2";

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styles: [`
    .author {
        display: inline-block;
        font-style: italic;
        font-size: 15px;
        width: 80%;
    }
    .delete {
        display: inline-block;
        text-align: left;
        font-size: 12px;
        width: 19%;
    }
    .share{
        display: inline-block;
        text-align: center;
        font-size: 12px;
        width: 19%;
    }
    .likes {
        display: inline-block;
        text-align: right;
        font-size: 12px;
        width: 19%;
    }
    
    .likes-display {
        display: inline-block;
        text-align: right;
        font-size: 14px

    }

`]



})
export class InputComponent{

    @Output() editclicked_Post = new EventEmitter<string>();
    
    @Input() postVarClasse: Posts = new Posts("", "",0,'') 

    constructor(private postServiceObj: PostService){};
    
    
    onDelete(){
        var deleteVar: boolean;
        
        Swal.fire({
            title: 'Deletado',
            text: 'Tem certeza que deseja deletar o post?',
            icon: 'warning',
            showDenyButton: true,
            confirmButtonText: 'Deletar',
            denyButtonText: `Não deletar`,
        }
        )
        .then((result) => {
            if (result.isConfirmed) {
                Swal.fire('O post foi deletado!')
                deleteVar = true;
              } else if (result.isDenied) {
                Swal.fire('Mais cuidado da proxima vez!')
                deleteVar = false;
                
            } 
            if(deleteVar == true){
                console.log(deleteVar)
                this.postServiceObj.deletePosts(this.postVarClasse)
               }
                       
        })

    }
    onLike(){
        this.postServiceObj.likeIcrease(this.postVarClasse)
        
    }

    onShare(){
        console.log('http://localhost:3000/posts/'+this.postVarClasse.ID)
        Swal.fire({
            title: 'Compartilhe!',
            text: "O id do seu post é: " + this.postVarClasse.ID,
            icon: 'success'
        }
            )
    
    }

}