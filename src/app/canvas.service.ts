import { inject, Injectable, NgZone } from '@angular/core';
import * as THREE from 'three';

@Injectable({ providedIn: 'root' })
export class CanvasService {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    private readonly ngZone = inject(NgZone);

    readonly animations = new Map<string, () => void>();

    init(canvasElement: HTMLCanvasElement) {
        const renderer = new THREE.WebGLRenderer({ canvas: canvasElement });
        renderer.setSize(window.innerWidth, window.innerHeight);

        // const geometry = new THREE.BoxGeometry(1, 1, 1);
        // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        // const cube = new THREE.Mesh(geometry, material);
        // this.scene.add(cube);

        this.camera.position.z = 5;

        this.ngZone.runOutsideAngular(() => {
            const animate = () => {
                requestAnimationFrame(animate);

                this.animations.forEach((animation) => animation());

                renderer.render(this.scene, this.camera);
            };

            animate();
        });
    }
}
