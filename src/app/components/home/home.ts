import {Component} from 'angular2/core';
import {Logged} from "../logged";
import {Admin} from "../admin";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";

@Component({
    selector: 'home',
    directives: [ROUTER_DIRECTIVES],
    pipes: [],
    styles: [require('./home.scss')],
    template: `
        <div>
            <h3>Home view</h3>
            <div>
                <a [routerLink]="['Logged']">Logged</a> / <a [routerLink]="['Admin']">Admin</a>
            </div>

            <router-outlet></router-outlet>
        </div>
    `
})
@RouteConfig([
    {path: '/', component: Logged, name: 'Logged', useAsDefault: true},
    {path: '/admin', component: Admin, name: 'Admin'}
])
export class Home {
    constructor() {
        console.log('Home constructor');
    }

}
