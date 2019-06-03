import { Component } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
@Component ({
   selector: 'my-app',
   encapsulation: ViewEncapsulation.None,
   templateUrl: '/login.component.html',
   styleUrls: ['/login.component.css']
})
export class LoginComponent  {
    constructor(
        private router: Router,
    ) {
    }

    login() {
        this.router.navigateByUrl('dashboard/home');
    }
}