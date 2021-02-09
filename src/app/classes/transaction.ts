export class Transaction {
    transactionId?:number
	beneficiaryAcctNo?: number
	beneficiaryName ?: string
	dbOrCr ?: string
	transactionAmount ?: number
    transactionDate ?: Date
	transactionType ?: string
	accNo ?: number
}

export class MakeTransaction {
	transactionType!:string
	beneficiaryId!: number
	amount!:number
}