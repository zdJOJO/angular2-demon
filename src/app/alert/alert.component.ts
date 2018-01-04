import { Component, HostBinding } from '@angular/core';
import { Router }                 from '@angular/router';

import { jojoComponentAnimation } from '../animations';


@Component({
  templateUrl: './alert.component.html',
  styleUrls: ['./style.less'],
  animations: [jojoComponentAnimation]
})

export class Alert { 
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  message: string
  sending: boolean = false;

  constructor(private router: Router) {}

  send() {
    this.sending = true;
    this.message = 'Sending Message...';
 
    setTimeout(() => {
      this.sending = false;
      this.closePopup();
    }, 1000);
  }
 
  cancel() {
    this.closePopup();
  }
 
  closePopup() {
    // Providing a `null` value to the named outlet
    // clears the contents of the named outlet
    this.router.navigate([{ outlets: { popup: null }}]);
  }
}
  