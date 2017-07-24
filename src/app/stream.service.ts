import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class StreamService {

  apiUrl: string = 'http://localhost:3000/api/stream';

  constructor(public http: AuthHttp) { }

  getActiveStreams() {
    return this.http.get(this.apiUrl + '/')
      .map(res => res.json());
  }

  createStream(title: string) {
    return this.http.post(this.apiUrl + '/', {
      title: title
    }).map(res => res.json());
  }

}
