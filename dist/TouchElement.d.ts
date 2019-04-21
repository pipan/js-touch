import { Emitter } from "@wildebeest/common";
export declare class TouchElement {
    protected element: any;
    protected emitter: Emitter;
    protected touch: TouchEvent;
    constructor(element: any, emitter: Emitter);
    getEmitter(): Emitter;
    protected getFingerPosition(event: TouchEvent): any;
    protected onMove(event: TouchEvent): void;
}
