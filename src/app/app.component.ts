import { Component } from '@angular/core';
import { Parent } from './parent.component';

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
        <!--The content below is only a placeholder and can be replaced.-->
        <div [id]="title" title="my-title" (click)="onClick()">This is inside the div</div>
        <app-parent />
    `,
    imports: [Parent],
})
export class AppComponent {
    title = 'ng-renderer';

    onClick() {}
}
