class StateStartCycle extends BaseState 
{
    constructor()
	{
        super();
    }
    public state(items): String
	{
        this.itemsMotionGrow(items);
        var d = items[items.length - 1][0].vy;
        if (d >= 20)
		{
            col.timme = 0;
            col.reel = REELS.LOOP;
            return "StateLoop";
        }
        return "";
    }
}