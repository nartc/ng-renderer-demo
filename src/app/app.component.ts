import { Component } from '@angular/core';
import { Parent } from './parent.component';

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
        <!--The content below is only a placeholder and can be replaced.-->
        <div>
            <app-parent />
        </div>
    `,
    imports: [Parent],
    styles: [],
})
export class AppComponent {
    title = 'ng-renderer';
}
