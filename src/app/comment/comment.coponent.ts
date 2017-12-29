import { Component, HostBinding } from '@angular/core';

import { jojoComponentAnimation } from '../animations';

@Component({
  selector: "comments",
  animations: [ jojoComponentAnimation ],
  template: `
  <div>
    <h3>这里是一些评论:</h3>
    <ul>
      <li>1111111111</li>
      <li>222222222</li>
      <li>3333333333</li>
    </ul>
  </div>
  `
})

export class Comment {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
}