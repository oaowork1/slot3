var UI = (function () {
    function UI() {
        this.col = Collection.getInstance();
        this.graph = Graph.getInstance();
    }
    UI.prototype.go = function () {
        if (this.col.mouseEvent != MOUSE_EVENT.NO) {
            switch (this.col.mouseEvent) {
                case MOUSE_EVENT.CLICK:
                    this.fClick();
                    break;
                case MOUSE_EVENT.OVER:
                    this.fOver();
                    break;
                case MOUSE_EVENT.DOWN:
                    this.fDown();
                    break;
                default:
            }
            this.col.mouseEvent = MOUSE_EVENT.NO;
        }
    };
    UI.prototype.fClick = function () {
        if (col.reel == REELS.NO) {
            if (this.graph.collisionCircle(col.xx, col.yy, btn)) {
                col.reel = REELS.CLICK;
                btn = new this.graph.changeUiItem(22, btn, "btn_spin_disable.png");
                btn.pic = 0;
                txtBtn = new this.graph.changeTextItem(txtBtn, 23, "SPIN", "42px sans-serif", "#220000");
                col.soundToPlay = "soundReel";
            }
        }
    };
    UI.prototype.fOver = function () {
        if (col.reel != REELS.NO) {
            return;
        }
        if (this.graph.collisionCircle(col.xx, col.yy, btn)) {
            if (btn.pic == 0) {
                btn = new this.graph.changeUiItem(22, btn, "btn_spin_hover.png");
                btn.pic = 1;
                txtBtn = new this.graph.changeTextItem(txtBtn, 23, "SPIN!", "42px sans-serif", "#662200");
            }
        }
        else {
            if (btn.pic == 1) {
                btn = new this.graph.changeUiItem(22, btn, "btn_spin_normal.png");
                btn.pic = 0;
                txtBtn = new this.graph.changeTextItem(txtBtn, 23, "SPIN!", "42px sans-serif", "#442200");
            }
        }
    };
    UI.prototype.fDown = function () {
        if (col.reel != REELS.NO) {
            return;
        }
        if (this.graph.collisionCircle(col.xx, col.yy, btn)) {
            var pic = btn.pic;
            btn = new this.graph.changeUiItem(22, btn, "btn_spin_pressed.png");
            btn.pic = pic;
        }
    };
    return UI;
}());
