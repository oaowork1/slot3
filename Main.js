var Main = (function () {
    function Main() {
        this.col = Collection.getInstance();
        this.graph = Graph.getInstance();
        this.snd = new Sounds();
        this.state = new States();
        this.ui = new UI();
    }
    Main.prototype.gameLoop = function () {
        requestAnimationFrame(this.gameLoop.bind(this));
        if (col.loadGraph && col.loadSounds) {
            this.state.go(items);
            this.graph.go();
            this.ui.go();
            this.snd.toPlay();
        }
        this.graph.rendAll();
    };
    return Main;
}());
