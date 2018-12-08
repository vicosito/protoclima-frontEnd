import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { User} from '../models/user';
import { GLOBAL } from '../services/global';
import {UserService} from '../services/user.service';
import {register} from "ts-node";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[UserService]
})
export class RegisterComponent implements OnInit {
  public title: String;
  public  user: User;
  public status: String;

  constructor(
    private  _route: ActivatedRoute,
    private _router: Router,
    private  _userService: UserService

  ) {
    this.title = 'Registro de Usuario';
    this.user = new User('','','','','ROLE_USER');
  }

  ngOnInit() {

  }
onSubmit(registerForm){
   this._userService.register(this.user).subscribe(
     response => {
       if(response.user){
         this.status='success';
         this.user= new User('','','','','ROLE_USER');
         registerForm.reset();

       }else {
         this.status='error';
       }
     },
     error =>{
       console.log(<any>error);
     }
   )
}
}
