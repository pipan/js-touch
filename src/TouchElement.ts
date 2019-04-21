import { Emitter } from "@wildebeest/common";

export class TouchElement
{
    protected element: any;
    protected emitter: Emitter;
    protected touch: TouchEvent;

    constructor(element: any, emitter: Emitter)
    {
        this.element = element;
        this.emitter = emitter;
        this.element.addEventListener('touchstart', (event: TouchEvent) => {
            this.touch = event;
        });
        this.element.addEventListener('touchend', () => {
            this.touch = null;
        });
        this.element.addEventListener('touchmove', this.onMove.bind(this));
    }

    public getEmitter(): Emitter
    {
        return this.emitter;
    }

    protected getFingerPosition(event: TouchEvent): any
    {
        return {
            x: event.changedTouches[0].clientX,
            y: event.changedTouches[0].clientY
        };
    }

    protected onMove(event: TouchEvent): void
    {
        if (!this.touch) {
            return;
        }

        let lastPosition: any = this.getFingerPosition(this.touch);
        let currentPosition: any = this.getFingerPosition(event);
        let diff = {
            horizontal: lastPosition.x - currentPosition.x,
            vertical: lastPosition.y - currentPosition.y,
        }
        this.touch = event;
        this.emitter.emit('wbTouchscroll', diff);
    }
}