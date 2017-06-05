var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var StateStartCycle = (function (_super) {
    __extends(StateStartCycle, _super);
    function StateStartCycle() {
        return _super.call(this) || this;
    }
    StateStartCycle.prototype.state = function (items) {
        this.itemsMotionGrow(items);
        var d = items[items.length - 1][0].vy;
        if (d >= 20) {
            col.timme = 0;
            col.reel = REELS.LOOP;
            return "StateLoop";
        }
        return "";
    };
    return StateStartCycle;
}(BaseState));
