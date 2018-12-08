import { Injectable} from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {map } from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import { GLOBAL } from './global';

@Injectable()
export  class PcontrolService {
  public url: string;
  public identity;
  public token;

  constructor(private  _http: Http) {
    this.url = GLOBAL.url;
  }


  SavePcontrol(inspcontrol){
    const params = JSON.stringify(inspcontrol);
    const headers = new Headers({'Content-Type':'application/json'});

    return this._http.post(this.url + 'pcontrol',params,{headers: headers})
      .pipe(map(res => res.json()));
  }
  getPcontrols(){
    const headers = new Headers({'Content-Type':'application/json'});

    return this._http.get(this.url+'pcontrols',{headers:headers})
      .pipe(map(res => res.json()));
  }

  getPcontrol(id){
    const headers = new Headers({'Content-Type':'application/json'});

    return this._http.get(this.url + 'pcontrol/'+id ,{headers:headers})
      .pipe(map(res => res.json()));
  }
  //editPcontrol(token, id, micro){
  editPcontrol(id, micro){
    let params=JSON.stringify(micro);
    const headers = new Headers({
      'Content-Type':'application/json',
      //'Authorization':token
    });

    return this._http.put(this.url + 'pcontrol/'+id ,params,{headers:headers})
      .pipe(map(res => res.json()));
  }
  //deleteMicrocontrolador(token, id, micro){
  deletePcontrol(id){
    const headers = new Headers({
      'Content-Type':'application/json',
      //'Authorization':token
    });

    return this._http.delete(this.url + 'pcontrol/'+id ,{headers:headers})
      .pipe(map(res => res.json()));
  }
}
