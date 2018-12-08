import { Component, DoCheck, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers:[UserService]
})
export class HeaderComponent implements OnInit {
  public title:string;
  public identity;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService:UserService
  ) {
    this.title='Protoclima';
  }

  ngOnInit() {
    this.identity=this._userService.getIdentity();
  }
  ngDoCheck(){
    this.identity=this._userService.getIdentity();
  }
logout(){
    localStorage.clear();
    this.identity=null;
    this._router.navigate(['/home']);
}
}
