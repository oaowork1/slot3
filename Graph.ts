class Graph
{	
	public col:Collection;

	//stage & engine parts
	public Container;
	public autoDetectRenderer;
	public loader;
	public resources;
	public TextureCache;
	public Texture;
	public Sprite;
	public Text;
	public Graphics;

	public stage:PIXI.Container;
	
	//stage elements
	public id; //for atlas
	public bg; 
	public slotOverlay;
	public items;
	public btn;
	public txtBtn;

	public thing; //mask
	
	private static instance:Graph;
	private static ok2Create:Boolean=false;
	public static getInstance():Graph
	{
		if(this.instance==null)
        {
            this.instance = new Graph();
        }
        return this.instance;
	}
	
	private constructor()
	{
		this.col=Collection.getInstance();
		
		Container = PIXI.Container;
		autoDetectRenderer = PIXI.autoDetectRenderer;
		loader = PIXI.loader;
		resources = PIXI.loader.resources;
		TextureCache = PIXI.utils.TextureCache;
		Texture = PIXI.Texture;
		Sprite = PIXI.Sprite;
		Text = PIXI.Text;
		Graphics = PIXI.Graphics;

		stage = new Container(); //new PIXI.Stage(0xFFFFFFFF);//new Container();
		stage.interactive = true;
		stage.buttonMode = true;
		stage.on("click", this.mouseEventClick);
		stage.on("mousemove", this.mouseEventMove);
		stage.on("mousedown", this.mouseEventDown);
		renderer = autoDetectRenderer(1140, 768);

		renderer.backgroundColor = 0xFFFFFF;
		document.body.appendChild(renderer.view);

		loader
		  .add("assets/slotParams.json")
		  .load(this.setup);
		  
		thing = new Graphics();		
	}
	
	public rendAll():void //make render
	{
		renderer.render(stage);
	}
	
	private mouseEventClick = function(e)
	{
		col.mouseEvent=MOUSE_EVENT.CLICK;
		col.xx=event.clientX;
		col.yy=event.clientY;
	}
	private mouseEventMove = function(e)
	{
		col.mouseEvent=MOUSE_EVENT.OVER;
		col.xx=event.clientX;
		col.yy=event.clientY;
	}
	private mouseEventDown = function(e)
	{
		col.mouseEvent=MOUSE_EVENT.DOWN;
		col.xx=event.clientX;
		col.yy=event.clientY;
	}
	
	private setup():void //make slot elements
	{
		gameScene = new Container();
		stage.addChildAt(gameScene, 0);    
		id = resources["assets/slotParams.json"].textures;

		//bg
		bg = new Sprite(id["winningFrameBackground.png"]);
		bg.width=1060;
		bg.height=570;
		bg.position.set(28, 34);
		gameScene.addChildAt(bg, 0);

		items = [];
		itemsNum = [];
		itemsParam=386;
		  
		//Make positions
		for (var i = 0; i < 5; i++) 
		{
			col.itemsNum.push(0);
			var row = [];
			for (var j = 0; j < 4; j++)
			{
				var t=Math.round(Math.random()*col.listOfItems.length)-1;
				if (t<0)
				{
					t=Math.round(0);
				}
				if (t>=col.listOfItems.length)
				{
					t=Math.round(col.listOfItems.length-1);
				}
				row.push(new Sprite(id[col.listOfItems[t]]));
				row[row.length-1].x=col.sx+i*col.ww;
				row[row.length-1].y=col.sy+j*col.hh;
				row[row.length-1].vy=0;
				row[row.length-1].ay=15*i;				 
			} 
			items.push(row);
			for (var j = 0; j < 4; j++)
			{
				 gameScene.addChildAt(items[items.length-1][j],1);
			}		
		}
		   
		//slotOverlay
		slotOverlay = new Sprite(id["slotOverlay.png"]); 
		slotOverlay.position.set(2, 2);  
		gameScene.addChildAt(slotOverlay,21);
		  
		//btn
		btn = new Sprite(id["btn_spin_normal.png"]);
		gameScene.addChildAt(btn,22);
		btn.x=900;
		btn.y=610;
		btn.width=150;
		btn.height=150;
		btn.pic=0;
		  
		txtBtn = new PIXI.Text(
			  "SPIN!", 
			  {font: "42px sans-serif", fill: "#442200"}
		);

		txtBtn.x = 922;
		txtBtn.y = 660;
		gameScene.addChildAt(txtBtn, 23);
		   
		thing.beginFill(0x66CCFF);
		thing.drawRect(32, 34, 1050, 568);
		thing.endFill();
		thing.x = 0;
		thing.y = 0;
		stage.addChild(thing);
		for (i=0; i<items.length; i++)
		{
			for (j=0; j<items[i].length; j++)
			{
				items[i][j].mask = thing;
			}
		}
			
		col.loadGraph=true;
	}

	public go():void
	{
		if (col.makeNormal==BTN.NORMAL)
		{
			col.makeNormal=BTN.NO;		
			btn = new this.changeUiItem(22, btn, "btn_spin_normal.png");
			txtBtn = new this.changeTextItem(txtBtn, 23, "SPIN!", "42px sans-serif", "#442200");
			btn.pic=0;
		}
	}
	
	public collisionCircle(xx, yy, obj):boolean
	{
		var dist = Math.sqrt( (xx-(obj.x+obj.width/2))*(xx-(obj.x+obj.width/2)) + (yy-(obj.y+obj.height/2))*(yy-(obj.y+obj.height/2)) );
		if (dist<=obj.width/2)
		{
			return true;
		} else
		{
			return false;
		}
	}
	
	public changeItem(obj, str):PIXI.Sprite
	{
		var x=obj.x;
		var y=obj.y;
		var vy=obj.vy;
		var ay=obj.ay;
		var last=obj.last;
		gameScene.removeChild(obj);
		obj = new Sprite(id[str]);
		obj.x=x;
		obj.y=y;
		obj.vy=vy;
		obj.ay=ay;
		obj.last=last;
		gameScene.addChildAt(obj,1);
		obj.mask = thing;
		return obj;
	}
	
	public changeTextItem(obj, num, txt, fontIt, colourIt):PIXI.Text
	{	
		var x=obj.x;
		var y=obj.y;
		gameScene.removeChild(obj);
		obj = new PIXI.Text(
				  txt, 
				  {font: fontIt, fill: colourIt}
				);
		obj.x=x;
		obj.y=y;
		gameScene.addChildAt(obj, num);
		
		return obj;
	}
	
	public changeUiItem(num, obj, str):PIXI.Sprite
	{	
		var x=obj.x;
		var y=obj.y;
		var w=obj.width;
		var h=obj.height;
		gameScene.removeChild(obj);
		obj = new Sprite(id[str]);
		obj.x=x;
		obj.y=y;
		obj.width=w;
		obj.height=h;
		gameScene.addChildAt(obj,num);
		return obj;
	}	
}