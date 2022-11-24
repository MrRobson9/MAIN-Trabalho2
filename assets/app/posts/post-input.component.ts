import { Component, OnInit } from "@angular/core";
import { PostService } from "./posts.services";
import { Posts } from "./posts";
import { NgForm } from "@angular/forms";
import { text } from "@angular/core/src/render3/instructions";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import Swal from 'sweetalert2'


@Component({
    selector: 'app-post-input',
    templateUrl: './post-input.html',

})

export class PostInputComponent implements OnInit{
    myForm:  FormGroup;


    constructor (private postservice : PostService){}


    onEnviarPost(){
        Swal.fire({
            title: 'Post enviado com Sucesso!',
            text: 'O post foi recebido pelo BD e já está sendo processado.',
            icon: 'success'
        })
    }

    onSubmit(){
        const likes = 0;
        const postaux = new Posts(
            this.myForm.controls.content.value,
            this.myForm.controls.user.value,
            likes
             );
           
             this.postservice.addPosts(postaux)
        
        .subscribe(
            dadosSucesso => console.log(dadosSucesso),
            dadosErro => console.log(dadosErro)
        );
        this.myForm.reset();

    }

    // onSave(textoConsole: string, usuario: string){
    //     const postaux = new Posts(textoConsole, usuario, 0);
    //     console.log(textoConsole);
    // }

    ngOnInit(){
        this.myForm = new FormGroup({
            content: new FormControl(null, Validators.required),
            user: new FormControl(null, Validators.required),
        })
    
    
    
    
    }

    

}
