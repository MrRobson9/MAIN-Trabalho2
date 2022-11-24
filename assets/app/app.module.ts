import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from "./app.component";
import { PostInputComponent } from './posts/post-input.component';
import { PostService } from './posts/posts.services';
import { PostListComponent } from './posts/post-list.component';
import { InputComponent } from './posts/post.component';
import { myrouting } from './auth.routes';
import { HearderComponent } from './header,component';
import { AuthenticationComponent } from './authentication.component';


@NgModule({
    declarations: [
        AppComponent,
        PostInputComponent,
        PostListComponent,
        InputComponent,
        HearderComponent,
        AuthenticationComponent
    ],
    imports: [BrowserModule, HttpModule,  FormsModule, ReactiveFormsModule, myrouting], 
    bootstrap: [AppComponent],
    providers: [
        PostInputComponent, 
        PostService,
        
    ]
})
export class AppModule {

}