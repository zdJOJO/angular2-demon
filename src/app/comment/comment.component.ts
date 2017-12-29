import { Component, HostBinding } from '@angular/core';

import { jojoComponentAnimation } from '../animations';

@Component({
  animations: [ jojoComponentAnimation ],
  template: `
  <div>
    <h3>这里是一些评论:</h3>
    <router-outlet></router-outlet>
  </div>
  `
})

export class Comment {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
}