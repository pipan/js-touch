# Drag Module

Add drag event to DOM elements. Drag event is triggered when user moves the mouse, while holding down left mouse button.

## Installation

```sh
npm install --save @wildebeest/touch
```

## Requirements

It's usefull to know these libraries:

* inversify
* @wildebeest/js-modules

## Bind Element To Touch Component

Making element to emit `wbTouchscroll`, requires creating new instance of class `TouchComponent`.

```ts
foo(emitterService: EmitterService): void
{
    let element: any = document.querySelector('.touch-scroll');
    let component: TouchComponent = new TouchComponent(element, emitterService.createEmitter());
}
```

In our example we used `.touch-scroll` selector to select DOM element and then create `TouchComponent`, that will listen to specific changes on this element. If it finds touch, it will emit touch event.

## Listen To Touchscroll Event

Touch event is called `wbTouchscroll` and the event contains three values `horizontal` and `vertical` finger position difference after last touch. `touchEvent`, which is the original `TouchEvent`.

```ts
foo(emitterService: EmitterService): void
{
    let element: any = document.querySelector('.touch-scroll');
    let component: TouchComponent = new TouchComponent(element, emitterService.createEmitter());

    dragable.getEmitter().on('wbTouchscroll' (data: any) => {
        let verticalMovement: number = data.vertical;
        let horizontalMovement: number = data.horizontal;
        let originalEvent: TouchEvent = data.touchEvent;
    });
}
```