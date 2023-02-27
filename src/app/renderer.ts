import { inject, Injectable, Renderer2, RendererFactory2, RendererStyleFlags2, RendererType2 } from '@angular/core';
import { ɵDomRendererFactory2 as DomRendererFactory2 } from '@angular/platform-browser';

@Injectable()
export class ChauRendererFactory implements RendererFactory2 {
    readonly factory = inject(DomRendererFactory2);

    createRenderer(hostElement: any, type: RendererType2 | null): Renderer2 {
        return new ChauRenderer(this.factory.createRenderer(hostElement, type));
    }
}

export class ChauRenderer implements Renderer2 {
    constructor(readonly delegate: Renderer2) {}

    get data(): { [key: string]: any } {
        return this.delegate.data;
    }
    destroy(): void {
        return this.delegate.destroy();
    }
    createElement(name: string, namespace?: string | null | undefined) {
        return this.delegate.createElement(name, namespace);
    }
    createComment(value: string) {
        return this.delegate.createComment(value);
    }
    createText(value: string) {
        return this.delegate.createText(value);
    }
    destroyNode: ((node: any) => void) | null = this.delegate.destroyNode;
    appendChild(parent: any, newChild: any): void {
        return this.delegate.appendChild(parent, newChild);
    }
    insertBefore(parent: any, newChild: any, refChild: any, isMove?: boolean | undefined): void {
        return this.delegate.insertBefore(parent, newChild, refChild, isMove);
    }
    removeChild(parent: any, oldChild: any, isHostElement?: boolean | undefined): void {
        return this.delegate.removeChild(parent, oldChild, isHostElement);
    }
    selectRootElement(selectorOrNode: any, preserveContent?: boolean | undefined) {
        return this.delegate.selectRootElement(selectorOrNode, preserveContent);
    }
    parentNode(node: any) {
        return this.delegate.parentNode(node);
    }
    nextSibling(node: any) {
        return this.delegate.nextSibling(node);
    }
    setAttribute(el: any, name: string, value: string, namespace?: string | null | undefined): void {
        return this.delegate.setAttribute(el, name, value, namespace);
    }
    removeAttribute(el: any, name: string, namespace?: string | null | undefined): void {
        return this.delegate.removeAttribute(el, name, namespace);
    }
    addClass(el: any, name: string): void {
        return this.delegate.addClass(el, name);
    }
    removeClass(el: any, name: string): void {
        return this.delegate.removeClass(el, name);
    }
    setStyle(el: any, style: string, value: any, flags?: RendererStyleFlags2 | undefined): void {
        return this.delegate.setStyle(el, style, value, flags);
    }
    removeStyle(el: any, style: string, flags?: RendererStyleFlags2 | undefined): void {
        return this.delegate.removeStyle(el, style, flags);
    }
    setProperty(el: any, name: string, value: any): void {
        return this.delegate.setProperty(el, name, value);
    }
    setValue(node: any, value: string): void {
        return this.delegate.setValue(node, value);
    }
    listen(target: any, eventName: string, callback: (event: any) => boolean | void): () => void {
        return this.delegate.listen(target, eventName, callback);
    }
}
