import { Routes, RouterModule } from "@angular/router";
import { PostInputComponent } from "./posts/post-input.component";
import { PostListComponent } from "./posts/post-list.component";

export const AUTH_ROUTES : Routes = [
    {path: '', redirectTo: 'post-list', pathMatch: 'full'},
    {path: 'post-list', component: PostListComponent},
    {path: 'post-input', component: PostInputComponent}
];

export const myrouting = RouterModule.forRoot(AUTH_ROUTES);