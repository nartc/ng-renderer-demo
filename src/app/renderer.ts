import {
  inject,
  Injectable,
  Renderer2,
  RendererFactory2,
  RendererStyleFlags2,
  RendererType2,
} from "@angular/core";
import { ɵDomRendererFactory2 as DomRendererFactory2 } from "@angular/platform-browser";

@Injectable()
export class ChauRendererFactory implements RendererFactory2 {
  readonly factory = inject(DomRendererFactory2);

  createRenderer(hostElement: any, type: RendererType2 | null): Renderer2 {
    console.log("creating renderer -->", hostElement, type);
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
    console.log("createElement -->", { name });
    return this.delegate.createElement(name, namespace);
  }
  createComment(value: string) {
    console.log("createComment -->", { value });
    return this.delegate.createComment(value);
  }
  createText(value: string) {
    console.log("createText -->", { value });
    return this.delegate.createText(value);
  }
  destroyNode: ((node: any) => void) | null = this.delegate.destroyNode;
  appendChild(parent: any, newChild: any): void {
    console.log("appendChild -->", { parent, newChild });
    return this.delegate.appendChild(parent, newChild);
  }
  insertBefore(
    parent: any,
    newChild: any,
    refChild: any,
    isMove?: boolean | undefined
  ): void {
    console.log("insertBefore -->", { parent, newChild, refChild });
    return this.delegate.insertBefore(parent, newChild, refChild, isMove);
  }
  removeChild(
    parent: any,
    oldChild: any,
    isHostElement?: boolean | undefined
  ): void {
    console.log("removeChild -->", { parent, oldChild });
    return this.delegate.removeChild(parent, oldChild, isHostElement);
  }
  selectRootElement(
    selectorOrNode: any,
    preserveContent?: boolean | undefined
  ) {
    console.log("selectRootElement -->", { selectorOrNode });
    return this.delegate.selectRootElement(selectorOrNode, preserveContent);
  }
  parentNode(node: any) {
    console.log("parentNode -->", { node });
    return this.delegate.parentNode(node);
  }
  nextSibling(node: any) {
    console.log("nextSibling -->", { node });
    return this.delegate.nextSibling(node);
  }
  setAttribute(
    el: any,
    name: string,
    value: string,
    namespace?: string | null | undefined
  ): void {
    console.log("setAttribute -->", { el, name, value });
    return this.delegate.setAttribute(el, name, value, namespace);
  }
  removeAttribute(
    el: any,
    name: string,
    namespace?: string | null | undefined
  ): void {
    console.log("removeAttribute -->", { el, name });
    return this.delegate.removeAttribute(el, name, namespace);
  }
  addClass(el: any, name: string): void {
    console.log("addClass -->", { el, name });
    return this.delegate.addClass(el, name);
  }
  removeClass(el: any, name: string): void {
    console.log("removeClass -->", { el, name });
    return this.delegate.removeClass(el, name);
  }
  setStyle(
    el: any,
    style: string,
    value: any,
    flags?: RendererStyleFlags2 | undefined
  ): void {
    console.log("setStyle -->", { el, style, value });
    return this.delegate.setStyle(el, style, value, flags);
  }
  removeStyle(
    el: any,
    style: string,
    flags?: RendererStyleFlags2 | undefined
  ): void {
    console.log("removeStyle -->", { el, style });
    return this.delegate.removeStyle(el, style, flags);
  }
  setProperty(el: any, name: string, value: any): void {
    console.log("setProperty -->", { el, name });
    return this.delegate.setProperty(el, name, value);
  }
  setValue(node: any, value: string): void {
    console.log("setValue -->", { node, value });
    return this.delegate.setValue(node, value);
  }
  listen(
    target: any,
    eventName: string,
    callback: (event: any) => boolean | void
  ): () => void {
    console.log("listen -->", { target, eventName });
    return this.delegate.listen(target, eventName, callback);
  }
}
