var REELS;
(function (REELS) {
    REELS[REELS["NO"] = 0] = "NO";
    REELS[REELS["CLICK"] = 1] = "CLICK";
    REELS[REELS["STARTCYCLE"] = 2] = "STARTCYCLE";
    REELS[REELS["LOOP"] = 3] = "LOOP";
    REELS[REELS["STOPCYCLE"] = 4] = "STOPCYCLE";
})(REELS || (REELS = {}));
;
var BTN;
(function (BTN) {
    BTN[BTN["NO"] = 0] = "NO";
    BTN[BTN["NORMAL"] = 1] = "NORMAL";
    BTN[BTN["OVER"] = 2] = "OVER";
    BTN[BTN["DOWN"] = 3] = "DOWN";
    BTN[BTN["CLICK"] = 4] = "CLICK";
})(BTN || (BTN = {}));
;
var MOUSE_EVENT;
(function (MOUSE_EVENT) {
    MOUSE_EVENT[MOUSE_EVENT["NO"] = 0] = "NO";
    MOUSE_EVENT[MOUSE_EVENT["CLICK"] = 1] = "CLICK";
    MOUSE_EVENT[MOUSE_EVENT["MOVE"] = 2] = "MOVE";
    MOUSE_EVENT[MOUSE_EVENT["DOWN"] = 3] = "DOWN";
})(MOUSE_EVENT || (MOUSE_EVENT = {}));
;
var Collection = (function () {
    function Collection() {
        this.xx = 0;
        this.yy = 0;
        this.makeNormal = BTN.NO;
        this.itemsNum = [];
        this.soundToPlay = "";
        this.mouseEvent = MOUSE_EVENT.NO;
        this.sx = 50;
        this.sy = -138 + 10;
        this.ww = 204;
        this.hh = 178;
        this.listOfItems = [];
        this.listOfItems.push("01.png");
        this.listOfItems.push("02.png");
        this.listOfItems.push("03.png");
        this.listOfItems.push("04.png");
        this.listOfItems.push("05.png");
        this.listOfItems.push("06.png");
        this.listOfItems.push("07.png");
        this.listOfItems.push("08.png");
        this.listOfItems.push("09.png");
        this.listOfItems.push("10.png");
        this.listOfItems.push("11.png");
        this.listOfItems.push("12.png");
        this.listOfItems.push("13.png");
        this.reel = REELS.NO;
        this.loadGraph = false;
        this.loadSounds = false;
        //states		
        this.timme = 0;
        this.stopper = 0;
    }
    Object.defineProperty(Collection.prototype, "loadGraph", {
        get: function () {
            return this.lg;
        },
        set: function (res) {
            this.lg = res;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Collection.prototype, "loadSounds", {
        get: function () {
            return this.ls;
        },
        set: function (res) {
            this.ls = res;
        },
        enumerable: true,
        configurable: true
    });
    Collection.getInstance = function () {
        if (this.instance == null) {
            this.instance = new Collection();
        }
        return this.instance;
    };
    return Collection;
}());
Collection.ok2Create = false;
