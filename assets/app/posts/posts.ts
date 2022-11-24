export class Posts{
    content: string;
    user: string;
    ID?: string;
     likes?: number;

     constructor(content: string, user: string,  likes?: number, ID?: string,){
        this.content = content;
        this.likes = likes;
        this.user = user;   
        this.ID = ID;
     }
}