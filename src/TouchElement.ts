import { Emitter } from "@wildebeest/common";

export class TouchElement
{
    protected element: any;
    protected emitter: Emitter;
    protected touch: any = null;

    constructor(element: any, emitter: Emitter)
    {
        this.element = element;
        this.emitter = emitter;
        this.element.addEventListener('touchstart', this.setTouch.bind(this));
        this.element.addEventListener('touchend', () => {
            this.touch = null;
        });
        this.element.addEventListener('touchmove', this.onMove.bind(this));
    }

    public getEmitter(): Emitter
    {
        return this.emitter;
    }

    protected setTouch(event: any): void
    {
        this.touch = {
            position: {
                x: event.changedTouches[0].pageX,
                y: event.changedTouches[0].pageY
            }
        };
    }

    protected onMove(event: any): void
    {
        if (!this.touch) {
            return;
        }

        let prevTouch: any = this.touch;
        this.setTouch(event);
        let diff = {
            horizontal: prevTouch.position.x - this.touch.position.x,
            vertical: prevTouch.position.y - this.touch.position.y,
        }
        this.emitter.emit('touchScroll', diff);
    }
}