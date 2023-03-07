import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { CanvasService } from './canvas.service';

@Component({
    standalone: true,
    selector: 'app-canvas',
    template: `
        <canvas #glCanvas>
            <ng-content />
        </canvas>
    `,
})
export class CanvasComponent {
    @ViewChild('glCanvas', { static: true }) glCanvas!: ElementRef<HTMLCanvasElement>;

    readonly canvasService = inject(CanvasService);

    ngOnInit() {
        this.canvasService.init(this.glCanvas.nativeElement);
    }
}
