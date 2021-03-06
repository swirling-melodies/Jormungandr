

export class WebAddress {
    address: string = 'http://localhost:8080'
    // address: string = 'http://192.168.2.213:8080'

    public getBillsYearAllData = this.address + '/v1/Bill/GetBillsYearAllData'

    public getBillsDataByMonth = this.address + '/v1/Bill/GetBillsDataByMonth'

    public getBillsTable = this.address + '/v1/Bill/GetBillsTable'

    public getBillsTableOption = this.address + '/v1/Bill/GetBillsOption'

    public getBillsDiagram = this.address + '/v1/Bill/GetBillsDiagram'

    public getBillsDataByPage = this.address + '/v1/Bill/GetBillsDataByPage'



    public getInvestments = this.address + '/v1/Investment/GetInvestments'

    public getInvestmentsTable = this.address + '/v1/Investment/GetInvestmentsTable'

    public addInvestmentsTable = this.address + '/v1/Investment/AddInvestmentsTable'

    public updateInvestmentsTable = this.address + '/v1/Investment/UpdateInvestmentsTable'

    public getInvestmentDiagram = this.address + '/v1/Investment/GetInvestmentDiagram'

    public getInvestmentOption = this.address + '/v1/Investment/GetInvestmentOption'

    public getInvestmentServiceCharge = this.address + '/v1/Investment/GetInvestmentServiceCharge'



    public getTarget = this.address + '/v1/Target/GetTarget'

    

    public setBillNameWork = this.address + '/v1/Work/BillNameSetWork'

    public getBillNameList = this.address + '/v1/Work/GetBillNameList'
    
    public updateBillName = this.address + '/v1/Work/UpdateBillName'

    public setUserWork = this.address + '/v1/Work/UserSetWork'

    public setInvestmentItemWork = this.address + '/v1/Work/InvestmentItemSetWork'

    public setInvestmentTypeWork = this.address + '/v1/Work/InvestmentTypeSetWork'

    public setInvestmentServiceChargeWork = this.address + '/v1/Work/InvestmentServiceChargeSetWork'


    public login = this.address + '/v1/User/Login'
    
    public validateToken = this.address + '/v1/User/ValidateToken'
}

const api = new WebAddress();
export default api