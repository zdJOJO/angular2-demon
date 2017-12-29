import 'rxjs/add/operator/switchMap';
import { Observable }            from 'rxjs/Observable';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, HostBinding, OnInit } from '@angular/core';

import { MyComment } from './comment';
import {CommentService} from './comment.server';

import { jojoComponentAnimation } from '../animations';

@Component({
  animations: [ jojoComponentAnimation ],
  styleUrls: ["./comment.less"],
  template: `
  <div>
    <ul>
      <li class="item-comment" *ngFor="let comment of comments$ | async">
        <a [routerLink]="[comment.id]">
          <span class="badge">{{ comment.id }}</span>{{ comment.content }}
        </a>
      </li>
    </ul>
    <router-outlet></router-outlet>
  </div>
  `
})

export class CommentList implements OnInit{
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  comments$: Observable<MyComment []>;

  constructor(
    private service: CommentService,
    private route: ActivatedRoute
  ){}

  ngOnInit() {
    this.comments$ = this.route.paramMap.switchMap(
      (param: ParamMap) => this.service.getComments()
    )
  }

}