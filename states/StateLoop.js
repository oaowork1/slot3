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
var StateLoop = (function (_super) {
    __extends(StateLoop, _super);
    function StateLoop() {
        return _super.call(this) || this;
    }
    StateLoop.prototype.state = function (items) {
        this.itemsMotionGrow(items);
        if (col.timme < 300) {
            col.timme++;
        }
        else {
            for (var i = 0; i < items.length; i++) {
                for (var j = 0; j < items[i].length; j++) {
                    items[i][j].last = items[i][j].ay;
                }
                col.itemsNum[i] = 0;
            }
            col.stopper = 0;
            col.reel = REELS.STOPCYCLE;
            return "StateStopCycle";
        }
        return "";
    };
    return StateLoop;
}(BaseState));
