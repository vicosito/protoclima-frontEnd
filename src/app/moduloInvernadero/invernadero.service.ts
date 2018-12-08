import { Injectable} from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {map } from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import { GLOBAL } from '../services/global';

@Injectable()
export  class InvernaderoService{
  public  url:string;

  constructor(private  _http: Http){
    this.url= GLOBAL.url;
  }

  SaveInvernadero(inv_registrar){
    const params = JSON.stringify(inv_registrar);
    const headers = new Headers({'Content-Type':'application/json'});

    return this._http.post(this.url + 'invernadero',params,{headers: headers})
      .pipe(map(res => res.json()));
  }
  addInvernadero(token,invernadero){
    let params=JSON.stringify(invernadero);
    let headers= new Headers({
      'Content-Type':'application/json',
      'Authorization':token
    });
    return this._http.put(this.url+'invernadero', params, {headers:headers})
      .pipe(map(res => res.json()));

  }

  getInvernaderos(){
    const headers = new Headers({'Content-Type':'application/json'});

    return this._http.get(this.url+'invernadero',{headers:headers})
      .pipe(map(res => res.json()));
  }
  getInvernadero(id){
    console.log(id);
    const headers = new Headers({'Content-Type':'application/json'});

    return this._http.get(this.url + 'invernadero/'+id ,{headers:headers})
      .pipe(map(res => res.json()));
  }
  //editInvenadero(token,id, invernadero){
    editInvernadero(id, inver){
    let params = JSON.stringify(inver);
    let headers= new Headers({
      'Content-Type':'application/json',
    //  'Authorization':token
    });
    return this._http.put(this.url+'invernadero/'+id, params,{headers:headers})
      .pipe(map(res => res.json()));

  }
  //deleteMicrocontrolador(token, id, micro){
  deleteInvernadero(id){
    const headers = new Headers({
      'Content-Type':'application/json',
      //'Authorization':token
    });
    return this._http.delete(this.url + 'invernadero/'+id ,{headers:headers})
      .pipe(map(res => res.json()));
  }
}
