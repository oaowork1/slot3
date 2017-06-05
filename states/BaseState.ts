class BaseState 
{
	protected graph:Graph;
	protected col: Collection;
	
    constructor()
	{		
		col = Collection.getInstance();
		this.graph=Graph.getInstance();
    }
    public state(items): String 
	{
        return "";
    }

    protected moving(i, j, items): void 
	{
        items[i][j].y += Math.floor(items[i][j].vy);
    }
    protected movingPart(i, j, n, items): void
	{
        items[i][j].y += Math.floor(items[i][j].vy / n);
    }
    protected relocate(i, j, items): void
	{
        if (items[i][j].y >= col.sy + 4 * col.hh)
		{
            items[i][j].y = (items[i][j].y - (col.sy + 4 * col.hh)) + col.sy;

            var t = Math.round(Math.random() * col.listOfItems.length) - 1;
            if (t < 0) 
			{
                t = Math.round(0);
            }
            if (t >= col.listOfItems.length) 
			{
                t = Math.round(col.listOfItems.length - 1);
            }
            items[i][j] = new this.graph.changeItem(items[i][j], col.listOfItems[t]);
        }
        if (items[i][j].y < col.sy)
		{
            items[i][j].y = col.sy + 4 * col.hh - 1;
        }
    }

    protected itemsMotionGrow(items): void 
	{
        for (var i = 0; i < items.length; i++) 
		{
            for (var j = 0; j < items[i].length; j++)
			{
                if (items[i][j].last == 0) 
				{
                    if (items[i][j].vy < 20)
					{
						items[i][j].vy += 5;
                    }
                    this.moving(i, j, items);
                    this.relocate(i, j, items);
                    this.movingPart(i, j, 2, items);
                    this.relocate(i, j, items);
                } else 
				{
                    items[i][j].last--;
                }
            }
        }
    }
}