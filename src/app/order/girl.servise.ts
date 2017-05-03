/**
 * Created by mykola on 5/3/17.
 */
import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
@Injectable()

export class GirlService {
  constructor(private http: Http) { }

  getGirls() {
    return this.http.get('./assets/girls.json')
      .map((response: Response) => response.json());
  }
}
