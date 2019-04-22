import { Emitter } from "@wildebeest/common";
import { Component } from "@wildebeest/component";
export declare class TouchComponent implements Component {
    protected element: HTMLElement;
    protected emitter: Emitter;
    protected touch: TouchEvent;
    constructor(element: HTMLElement, emitter: Emitter);
    getEmitter(): Emitter;
    getElement(): HTMLElement;
    protected getFingerPosition(event: TouchEvent): any;
    protected onMove(event: TouchEvent): void;
}
