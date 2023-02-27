import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-parent',
    standalone: true,
    template: `
        <h1>parent</h1>
    `,
})
export class Parent {
    @Input() title = '';
}
