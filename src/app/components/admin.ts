import {Component} from 'angular2/core';

@Component({
    selector: 'admin',
    template: `admin view`
})
export class Admin {
    constructor() {
        console.log('admin constructor');
    }

}
