import 'ts-jest';
import { Application } from '@wildebeest/js-modules';
import { TouchModule } from '../src/TouchModule';
import { TouchElement } from '../src/TouchElement';
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
    let touchElement: TouchElement = new TouchElement(element, emitterService.createEmitter());
    let value: any = {
        vertical: 0,
        horizontal: 0
    };

    touchElement.getEmitter().on('wbTouchscroll', (data: any) => {
        value.vertical += data.vertical;
        value.horizontal += data.horizontal;
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

    expect(value).toEqual({
        vertical: -13,
        horizontal: -22
    });
});