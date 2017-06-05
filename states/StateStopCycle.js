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
var StateStopCycle = (function (_super) {
    __extends(StateStopCycle, _super);
    function StateStopCycle() {
        return _super.call(this) || this;
    }
    StateStopCycle.prototype.state = function (items) {
        this.oneSpin(items);
        for (var i = 0; i < items.length; i++) {
            if (items[i][0].last > 0) {
                items[i][0].last--;
                continue;
            }
            if (col.itemsNum[i] == 0) {
                col.itemsNum[i] = this.analyzeStop(items[i][0].y);
            }
            if (col.itemsNum[i] == 1) {
                this.itemsMotionDecrease(i, items);
            }
            if (items[i][0].vy < 0.1 && col.itemsNum[i] == 1) {
                if ((i > 0 && col.itemsNum[i - 1] >= 2) || (i == 0)) {
                    col.itemsNum[i] = 2;
                    for (j = 0; j < items[i].length; j++) {
                        items[i][j].vy = -1;
                    }
                }
            }
            if (items[i][0].y == col.sy && col.itemsNum[i] == 2) {
                col.itemsNum[i] = 3;
                for (var j = 0; j < items[i].length; j++) {
                    items[i][j].vy = 0;
                    col.soundToPlay = "soundStopReel";
                }
                col.stopper++;
            }
            if (i == items.length - 1 && col.stopper == items.length) {
                col.reel = REELS.NO;
                col.makeNormal = BTN.NORMAL;
                return "StateNO";
            }
        }
        return "";
    };
    StateStopCycle.prototype.itemsMotionDecrease = function (i, items) {
        for (var j = 0; j < items[i].length; j++) {
            if (items[i][j].vy > 0) {
                items[i][j].vy -= 5;
            }
            if (items[i][j].vy < 0) {
                items[i][j].vy = 0.0000001;
            }
        }
    };
    StateStopCycle.prototype.oneSpin = function (items) {
        for (var i = 0; i < items.length; i++) {
            for (var j = 0; j < items[i].length; j++) {
                this.moving(i, j, items);
                this.relocate(i, j, items);
                this.movingPart(i, j, 2, items);
                this.relocate(i, j, items);
            }
        }
    };
    StateStopCycle.prototype.analyzeStop = function (obj) {
        if ((obj >= (-120 - 15)) && (obj <= (-120 + 15))) {
            return 1;
        }
        return 0;
    };
    return StateStopCycle;
}(BaseState));
