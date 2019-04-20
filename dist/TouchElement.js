"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TouchElement = (function () {
    function TouchElement(element, emitter) {
        var _this = this;
        this.touch = null;
        this.element = element;
        this.emitter = emitter;
        this.element.addEventListener('touchstart', this.setTouch.bind(this));
        this.element.addEventListener('touchend', function () {
            _this.touch = null;
        });
        this.element.addEventListener('touchmove', this.onMove.bind(this));
    }
    TouchElement.prototype.getEmitter = function () {
        return this.emitter;
    };
    TouchElement.prototype.setTouch = function (event) {
        this.touch = {
            position: {
                x: event.changedTouches[0].pageX,
                y: event.changedTouches[0].pageY
            }
        };
    };
    TouchElement.prototype.onMove = function (event) {
        if (!this.touch) {
            return;
        }
        var prevTouch = this.touch;
        this.setTouch(event);
        var diff = {
            horizontal: prevTouch.position.x - this.touch.position.x,
            vertical: prevTouch.position.y - this.touch.position.y,
        };
        this.emitter.emit('touchScroll', diff);
    };
    return TouchElement;
}());
exports.TouchElement = TouchElement;
//# sourceMappingURL=TouchElement.js.map