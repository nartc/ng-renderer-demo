import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { CanvasComponent } from './canvas.component';
import { Parent } from './parent.component';

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
        <div [id]="title" title="my-title" (click)="onClick()">This is inside the div</div>

        <app-canvas>
            <nga-SpotLight [position]="[5, 5, 5]" />
            <nga-PointLight [position]="[-5, -5, -5]" />

            <nga-Mesh #mesh [position]="[1.5, 0, 0]" (beforeRender)="onBeforeRender($any(mesh))">
                <nga-IcosahedronGeometry />
                <nga-MeshStandardMaterial color="hotpink" />
            </nga-Mesh>

            <nga-Mesh #meshTwo [position]="[-1.5, 0, 0]" (beforeRender)="onBeforeRender($any(meshTwo))">
                <nga-TorusGeometry />
                <nga-MeshPhongMaterial color="orange" />
            </nga-Mesh>
        </app-canvas>
    `,
    imports: [Parent, CanvasComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
    title = 'ng-renderer';

    @ViewChild('mesh', { static: true }) mesh!: ElementRef<THREE.Mesh>;

    ngOnInit() {
        console.log(this.mesh.nativeElement);
    }

    onClick() {}

    onBeforeRender(mesh: THREE.Mesh) {
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.01;
    }
}
