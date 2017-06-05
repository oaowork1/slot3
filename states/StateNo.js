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
var StateNo = (function (_super) {
    __extends(StateNo, _super);
    function StateNo() {
        return _super.call(this) || this;
    }
    StateNo.prototype.state = function (items) {
        if (col.reel == REELS.CLICK) {
            for (var i = 0; i < items.length; i++) {
                for (var j = 0; j < items[i].length; j++) {
                    items[i][j].last = items[i][j].ay;
                }
            }
            col.reel = REELS.STARTCYCLE;
            return "StateStartCycle";
        }
        return "";
    };
    return StateNo;
}(BaseState));
