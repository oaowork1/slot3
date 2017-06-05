var States = (function () {
    function States() {
        this.col = Collection.getInstance();
        this.state = new StateNo();
    }
    States.prototype.go = function (items) {
        var str = this.state.state(items);
        this.analyze(str);
    };
    States.prototype.analyze = function (str) {
        if (str != "") {
            switch (str) {
                case 'StateStartCycle':
                    this.state = new StateStartCycle();
                    break;
                case 'StateLoop':
                    this.state = new StateLoop();
                    break;
                case 'StateStopCycle':
                    this.state = new StateStopCycle();
                    break;
                case 'StateNO':
                    this.state = new StateNo();
                    break;
                default:
            }
        }
    };
    return States;
}());
