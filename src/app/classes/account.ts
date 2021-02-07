export class Account {
    accNo!:number;
	accountStatus:string = "Inprogress"
	address!:string
	adminRemark :string = "Under Review"
	annualIncome!:number
	balance:number = 0
	city!:string
	dob!:Date
	email!:string
	father!:string
	firstname!:string
	landmark!:string
	lastname!:string
	middlename:string = ''
    occupation!:string
	phone!:string
    pincode!:number
    proofId!:string
	proofType!:string
    state!:string

}

export class AccountNumberDTO{
	accNo!:number
}