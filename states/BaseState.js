var BaseState = (function () {
    function BaseState() {
        col = Collection.getInstance();
        this.graph = Graph.getInstance();
    }
    BaseState.prototype.state = function (items) {
        return "";
    };
    BaseState.prototype.moving = function (i, j, items) {
        items[i][j].y += Math.floor(items[i][j].vy);
    };
    BaseState.prototype.movingPart = function (i, j, n, items) {
        items[i][j].y += Math.floor(items[i][j].vy / n);
    };
    BaseState.prototype.relocate = function (i, j, items) {
        if (items[i][j].y >= col.sy + 4 * col.hh) {
            items[i][j].y = (items[i][j].y - (col.sy + 4 * col.hh)) + col.sy;
            var t = Math.round(Math.random() * col.listOfItems.length) - 1;
            if (t < 0) {
                t = Math.round(0);
            }
            if (t >= col.listOfItems.length) {
                t = Math.round(col.listOfItems.length - 1);
            }
            items[i][j] = new this.graph.changeItem(items[i][j], col.listOfItems[t]);
        }
        if (items[i][j].y < col.sy) {
            items[i][j].y = col.sy + 4 * col.hh - 1;
        }
    };
    BaseState.prototype.itemsMotionGrow = function (items) {
        for (var i = 0; i < items.length; i++) {
            for (var j = 0; j < items[i].length; j++) {
                if (items[i][j].last == 0) {
                    if (items[i][j].vy < 20) {
                        items[i][j].vy += 5;
                    }
                    this.moving(i, j, items);
                    this.relocate(i, j, items);
                    this.movingPart(i, j, 2, items);
                    this.relocate(i, j, items);
                }
                else {
                    items[i][j].last--;
                }
            }
        }
    };
    return BaseState;
}());
