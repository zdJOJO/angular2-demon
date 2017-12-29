
import 'rxjs/add/operator/switchMap';
import { Observable }            from 'rxjs/Observable';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, HostBinding, OnInit } from '@angular/core';

import { jojoComponentAnimation } from '../animations';
import { CommentService } from './comment.server';
import { MyComment } from './comment';

@Component({
  animations: [ jojoComponentAnimation ],
  template: `
  <div class="commeneDetail" *ngIf="comment$ | async as comment">
    <p>评论详情:</p>
    {{comment | json}}
  </div>
  `
})

export class CommentDetail implements OnInit{

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  comment$ : Observable<MyComment>;

  constructor(
    private route: ActivatedRoute,
    private service: CommentService
  ){}


  ngOnInit(){
    this.comment$ = this.route.paramMap.switchMap(
      (params: ParamMap) => this.service.getComment(params.get("id"))
    )
  }

}