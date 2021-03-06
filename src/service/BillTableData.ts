import moment from "moment"

export default class BillTableData{
    public ID: number = 0;
	public BillNumber: number = 0;
	public Type:       string = '';
	public BillName:   string = '';
	public Account:    number = 0;
	public Date:       any = 0;
	public Remarks:    string = '';

    constructor(c: any){
        this.ID = Number(c.ID);
        this.BillNumber = Number(c.BillNumber);
        this.Type = c.Type;
        this.BillName = c.BillName;
        this.Account = Number(c.Account);
        this.Date = moment((c.Date as Date)).format("yyyy-MM-DD HH:mm");
        this.Remarks = c.Remarks;
    }
}

export class BillTimeLine{
    public ID: number = 0;
	public BillNumber: number = 0;
	public Type:       string = '';
	public BillName:   string = '';
    public Color:      string = '';
    public Icon:       string = '';
	public Account:    number = 0;
	public Date:       any = 0;
	public Remarks:    string = '';

    constructor(c: any){
        this.ID = Number(c.ID);
        this.BillNumber = Number(c.BillNumber);
        this.Type = c.Type;
        this.BillName = c.BillName;
        this.Color = c.Color;
        this.Icon = c.Icon;
        this.Account = Number(c.Account);
        this.Date = moment((c.Date as Date)).format("yyyy-MM-DD HH:mm");
        this.Remarks = c.Remarks;
    }
}

export class BillNameConfig{
    public ID: number = 0;
	public BillName:   string = '';
    public Color:      string = '';
    public Icon:       string = '';

    add(c: any){
        this.ID = Number(c.ID);
        this.BillName = c.BillName;
        this.Color = c.Color;
        this.Icon = c.Icon;
    }
}