import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { COMMENTS } from '../../fake-data/data';

@Injectable()

export class CommentService {
  
  getComments = () => Observable.of(COMMENTS)

  getComment = (id: number | string) => {
    return this.getComments().map( comments => comments.find( comment => comment.id === +id) ) 
  }
}