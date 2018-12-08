import { Injectable} from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {map } from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable()
export  class MicrocontrollerService {
  public url: string;
  public identity;
  public token;

  constructor(private  _http: Http) {
    this.url = GLOBAL.url;
  }


SaveMicrocontrolador(registrar_micro){
  const params = JSON.stringify(registrar_micro);
  const headers = new Headers({'Content-Type':'application/json'});

  return this._http.post(this.url + 'micros',params,{headers: headers})
    .pipe(map(res => res.json()));
}
  getMicrocontroladores(){
    const headers = new Headers({'Content-Type':'application/json'});

    return this._http.get(this.url+'micros',{headers:headers})
      .pipe(map(res => res.json()));
  }

  getMicrocontrolador(id){
    const headers = new Headers({'Content-Type':'application/json'});

    return this._http.get(this.url + 'micro/'+id ,{headers:headers})
      .pipe(map(res => res.json()));
  }
  //editMicrocontrolador(token, id, micro){
  editMicrocontrolador(id, micro){
    let params=JSON.stringify(micro);
    const headers = new Headers({
      'Content-Type':'application/json',
      //'Authorization':token
    });

    return this._http.put(this.url + 'micro/'+id ,params,{headers:headers})
      .pipe(map(res => res.json()));
  }
  //deleteMicrocontrolador(token, id, micro){
  deleteMicrocontrolador(id){
    const headers = new Headers({
      'Content-Type':'application/json',
      //'Authorization':token
    });

    return this._http.delete(this.url + 'micro/'+id ,{headers:headers})
      .pipe(map(res => res.json()));
  }
}
