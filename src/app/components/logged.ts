import {Component} from 'angular2/core';

@Component({
    selector: 'logged',
    template: `logged view`
})
export class Logged {
    constructor() {
        console.log('logged constructor');
    }

}
