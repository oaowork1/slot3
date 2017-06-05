class States 
{
    private state: BaseState;
    private col: Collection;

    constructor() 
	{
        this.col = Collection.getInstance();
        this.state = new StateNo();
    }

    public go(items):void
	{
        var str = this.state.state(items);
        this.analyze(str);
    }

    private analyze(str): void 
	{
        if (str != "") 
		{
            switch (str) 
			{
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
    }
}