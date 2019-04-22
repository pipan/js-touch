import 'ts-jest';
import { Application } from '@wildebeest/js-modules';
import { TouchModule } from '../src/TouchModule';
import { TouchComponent } from '../src/TouchComponent';
import { DomService, EmitterService } from '@wildebeest/common';

let app: Application = new Application();
app.run([TouchModule]);
let domService: DomService = app.getContainer().get(DomService);
let emitterService: EmitterService = app.getContainer().get(EmitterService);

function touchEventPosition(x: number, y: number): any
{
    return {
        altitudeAngle: 0,
        azimuthAngle: 0,
        force: 1,
        pageX: 0,
        pageY: 0,
        identifier: 0,
        radiusX: 0,
        radiusY: 0,
        rotationAngle: 0,
        screenX: 0,
        screenY: 0,
        target: null,
        touchType: "direct",
        clientX: x,
        clientY: y
    };
}

test("", () => {
    let element: HTMLElement = domService.create('<div></div>');
    domService.insert([element], document.body);
    let touchComponent: TouchComponent = new TouchComponent(element, emitterService.createEmitter());
    let touchEvent: any = null;

    touchComponent.getEmitter().on('wbTouchscroll', (data: any) => {
        touchEvent = data;
    });
    element.dispatchEvent(new TouchEvent('touchstart', {
        changedTouches: [
            touchEventPosition(0, 0)
        ]
    }));
    element.dispatchEvent(new TouchEvent('touchmove', {
        changedTouches: [
            touchEventPosition(22, 13)
        ]
    }));

    expect(touchEvent).toEqual({
        vertical: -13,
        horizontal: -22,
        touchEvent: new TouchEvent('touchmove', {
            changedTouches: [
                touchEventPosition(22, 13)
            ]
        })
    });
});