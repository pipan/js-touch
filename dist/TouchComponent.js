"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TouchComponent = (function () {
    function TouchComponent(element, emitter) {
        var _this = this;
        this.element = element;
        this.emitter = emitter;
        this.element.addEventListener('touchstart', function (event) {
            _this.touch = event;
        });
        this.element.addEventListener('touchend', function () {
            _this.touch = null;
        });
        this.element.addEventListener('touchmove', this.onMove.bind(this));
    }
    TouchComponent.prototype.getEmitter = function () {
        return this.emitter;
    };
    TouchComponent.prototype.getElement = function () {
        return this.element;
    };
    TouchComponent.prototype.getFingerPosition = function (event) {
        return {
            x: event.changedTouches[0].clientX,
            y: event.changedTouches[0].clientY
        };
    };
    TouchComponent.prototype.onMove = function (event) {
        if (!this.touch) {
            return;
        }
        var lastPosition = this.getFingerPosition(this.touch);
        var currentPosition = this.getFingerPosition(event);
        var diff = {
            horizontal: lastPosition.x - currentPosition.x,
            vertical: lastPosition.y - currentPosition.y,
        };
        this.touch = event;
        this.emitter.emit('wbTouchscroll', diff);
    };
    return TouchComponent;
}());
exports.TouchComponent = TouchComponent;
//# sourceMappingURL=TouchComponent.js.map