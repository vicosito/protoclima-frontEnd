import { Injectable} from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {map } from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable()
export  class DataService {
  public url: string;
  public identity;
  public token;

  constructor(private  _http: Http) {
    this.url = GLOBAL.url;
  }

  getDatas() {
    const headers = new Headers({'Content-Type': 'application/json'});

    return this._http.get(this.url + 'getdata', {headers: headers})
      .pipe(map(res => res.json()));
  }
}
