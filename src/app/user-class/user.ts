import { NumberSymbol } from "@angular/common";

export class User {
    constructor(
        public avatar_url:string,
        public name:string,
        public bio:string,
        public login:string,
        public users:number,
        public following:number,
        public followers:number, 
        public html_url:string,
        public public_repos:string,
        
           ){}

}
