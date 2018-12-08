import { Injectable} from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {map } from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import { GLOBAL } from './global';


@Injectable()
export  class SensorService {
  public url: string;
  public identity;
  public token;

  constructor(private _http: Http) {
    this.url = GLOBAL.url;
  }


  SaveSensor(registrar_sensor) {
    const params = JSON.stringify(registrar_sensor);
    const headers = new Headers({'Content-Type': 'application/json'});

    return this._http.post(this.url + 'sensores', params, {headers: headers})
      .pipe(map(res => res.json()));
  }
  getSensores(){
    const headers = new Headers({'Content-Type':'application/json'});

    return this._http.get(this.url+'sensores',{headers:headers})
      .pipe(map(res => res.json()));
  }
  getSensor(id){
    const headers = new Headers({'Content-Type':'application/json'});

    return this._http.get(this.url + 'sensores/'+id ,{headers:headers})
      .pipe(map(res => res.json()));
  }
}
