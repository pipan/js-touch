import { Emitter } from "@wildebeest/common";
export declare class TouchElement {
    protected element: any;
    protected emitter: Emitter;
    protected touch: any;
    constructor(element: any, emitter: Emitter);
    getEmitter(): Emitter;
    protected setTouch(event: any): void;
    protected onMove(event: any): void;
}
