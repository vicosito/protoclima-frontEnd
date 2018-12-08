import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from "@angular/router";
import  { UserService} from "../services/user.service";
import { User} from "../models/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UserService]
})
export class LoginComponent implements OnInit {
  private title: String;
  public user: User;
  public identity;
  public token;
  public status : String;


  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ) {
    this.title='Identificate';
    this.user = new User('','','','','ROLE_USER');
  }

  ngOnInit() {
console.log(this._userService.getIdentity());
console.log(this._userService.getToken());
  }
  onSubmit(){

    // loguear al usuario y conseguir el objeto
    this._userService.signup(this.user).subscribe(
      response => {
        this.identity = response.user;

        if ( !this.identity || !this.identity._id){
          alert('El usuario no se ha logeado correctamente');
        } else {
          localStorage.setItem('identity',JSON.stringify(this.identity));
          // Conseguir el token
         this._userService.signup(this.user, 'true').subscribe(
            response1 => {
              this.token = response1.token;
              if (this.token.length <= 0) {
                alert('El token no se ha generado');
              } else {
                  localStorage.setItem('token',this.token);
                  this.status='success';
                  this._router.navigate(['/home']);
              }
            },
            error => {
              console.log(<any>error);
            }
          );

        }

      },
      error =>{
        var errorMensaje =<any>error;
        if(errorMensaje !=null) {
          var body = JSON.parse(error._body);
          this.status = 'error';
        }
      }
    );
  }

}
