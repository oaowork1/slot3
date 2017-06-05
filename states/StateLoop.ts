class StateLoop extends BaseState 
{
    constructor() 
	{
        super();
    }
    public state(items): String 
	{
        this.itemsMotionGrow(items);
        if (col.timme < 300) 
		{
            col.timme++;
        } else 
		{
            for (var i = 0; i < items.length; i++) 
			{
                for (var j = 0; j < items[i].length; j++) 
				{
                    items[i][j].last = items[i][j].ay;
                }
                col.itemsNum[i] = 0;
            }
            col.stopper = 0;
            col.reel = REELS.STOPCYCLE;
            return "StateStopCycle";
        }
        return "";
    }
}