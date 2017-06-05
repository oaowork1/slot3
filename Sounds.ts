class Sounds
{
    audioPath;
    col: Collection;

    constructor()
    {
        this.col = Collection.getInstance();
        this.audioPath = "assets/";
        createjs.Sound.alternateExtensions = ["mp3"];
        createjs.Sound.on("fileload", this.handleLoadCompleteSound);
        createjs.Sound.registerSound({ src: "Landing_1.mp3", id: "soundStopReel" }, this.audioPath);
        createjs.Sound.registerSound({ src: "Reel_Spin.mp3", id: "soundReel" }, this.audioPath);
    }

    handleLoadCompleteSound(event)
    {
        col.loadSounds = true;
    }    

    toPlay():void
    {
        if (this.col.soundToPlay != "")
        {
            createjs.Sound.play(this.col.soundToPlay);
            this.col.soundToPlay = "";
        }
    }
}

