import { Posts } from "./posts";
import { Component, EventEmitter, Input, Output, OnInit } from "@angular/core";
import { PostService } from "./posts.services";

@Component({
    selector: 'app-post-list',      
    template: `
    <div class='cold-md-8 col-md-offset-2'>
        <app-post [postVarClasse]="pst"
        (editclicked_Post)="pst.content = $event"
        *ngFor="let pst of Posts">
        </app-post>
    </div>
    `
})
export class PostListComponent implements OnInit{

    Posts: Posts[] = [];

    constructor (private postService: PostService){}
    


    ngOnInit(): void {
        this.postService.getPosts()
        .subscribe(
            (dadosSucesso: Posts[]) => {
                this.Posts = dadosSucesso;
                console.log(dadosSucesso)
            },
            dadosErro => console.log(dadosErro)
        );
    }
}