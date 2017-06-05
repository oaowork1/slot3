class StateNo extends BaseState 
{
    constructor()
	{
        super();
    }
    public state(items): String
	{
        if (col.reel == REELS.CLICK) 
		{
            for (var i = 0; i < items.length; i++)
				{
                for (var j = 0; j < items[i].length; j++) 
				{
                    items[i][j].last = items[i][j].ay;
                }
            }
            col.reel = REELS.STARTCYCLE;
            return "StateStartCycle";
        }
        return "";
    }
}