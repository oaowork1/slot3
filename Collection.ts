enum REELS 
	{ 
		NO,	CLICK, STARTCYCLE, LOOP, STOPCYCLE
	};
enum BTN 
{ 
	NO, NORMAL,	OVER, DOWN, CLICK
};
enum MOUSE_EVENT
{
	NO, CLICK, MOVE, DOWN
};

class Collection
{
	public sx:number;
	public sy:number;
	public ww:number;
	public hh:number;
	public listOfItems:Array<string>;
	public reel:REELS; 
	public itemsNum:Array<number>;
	public makeNormal:BTN;
	public soundToPlay:String;
	public mouseEvent:MOUSE_EVENT;
	
	//client
	public xx:number;
	public yy:number;

	private lg:boolean;	
	get loadGraph():boolean 
	{
			return this.lg;
	}
	set loadGraph(res:boolean) 
	{
			this.lg = res;
	}
		
	private ls:boolean;
	get loadSounds():boolean 
	{
			return this.ls;
	}
	set loadSounds(res:boolean) 
	{
			this.ls = res;
	}	

	//states	
	timme;
	stopper;
	
	private constructor()
	{
		this.xx=0;
		this.yy=0;
		
		this.makeNormal=BTN.NO;
		this.itemsNum = [];
		this.soundToPlay="";
		this.mouseEvent=MOUSE_EVENT.NO;
		
		this.sx=50;
		this.sy=-138+10;
		this.ww=204;
		this.hh=178;

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

		this.loadGraph=false;
		this.loadSounds=false;

		//states		
		this.timme=0;
		this.stopper=0;
	}
	
	private static instance:Collection;
	private static ok2Create:Boolean=false;
	public static getInstance():Collection
	{
		if(this.instance==null)
        {
            this.instance = new Collection();
        }
        return this.instance;
	}
}