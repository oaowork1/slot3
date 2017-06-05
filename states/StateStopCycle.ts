class StateStopCycle extends BaseState 
{
    constructor() 
	{
        super();
    }
    public state(items): String 
	{
        this.oneSpin(items);

        for (var i = 0; i < items.length; i++)
		{
            if (items[i][0].last > 0)
			{
                items[i][0].last--;
                continue;
            }
            if (col.itemsNum[i] == 0) //ищем, в нужных ли координатах текущий барабан
            {
                col.itemsNum[i] = this.analyzeStop(items[i][0].y);
            }
            if (col.itemsNum[i] == 1) 
			{
                this.itemsMotionDecrease(i, items);
            }
            if (items[i][0].vy < 0.1 && col.itemsNum[i] == 1) //запускается откат барабана
            {
                if ((i > 0 && col.itemsNum[i - 1] >= 2) || (i == 0)) 
				{
                    col.itemsNum[i] = 2;
                    for (j = 0; j < items[i].length; j++)
					{
                        items[i][j].vy = -1;
                    }
                }
            }
            if (items[i][0].y == col.sy && col.itemsNum[i] == 2)  //барабан возвращён на позицию
			{
                col.itemsNum[i] = 3;
                for (var j = 0; j < items[i].length; j++) 
				{
                    items[i][j].vy = 0;
					col.soundToPlay="soundStopReel";
                }
                col.stopper++;
            }

            if (i == items.length - 1 && col.stopper == items.length) //завершение всего цикла
			{
                col.reel = REELS.NO;
                col.makeNormal = BTN.NORMAL;
                return "StateNO";
            }
        }
        return "";
    }
	
	private itemsMotionDecrease(i, items): void 
	{
        for (var j = 0; j < items[i].length; j++) 
		{
            if (items[i][j].vy > 0)
			{
                items[i][j].vy -= 5;
            }
            if (items[i][j].vy < 0) 
			{
                items[i][j].vy = 0.0000001;
            }
        }
    }
	
	private oneSpin(items): void
	{
        for (var i = 0; i < items.length; i++) 
		{
            for (var j = 0; j < items[i].length; j++) 
			{
                this.moving(i, j, items);
                this.relocate(i, j, items);
                this.movingPart(i, j, 2, items);
                this.relocate(i, j, items);
            }
        }
    }	

    private analyzeStop(obj): Number 
	{
        if ((obj >= (-120 - 15)) && (obj <= (-120 + 15))) 
		{
            return 1;
        }
        return 0;
    }
}