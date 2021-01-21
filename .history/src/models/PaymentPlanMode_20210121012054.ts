export class PaymentPlan {
    plan: string;
    amortization: string;
    interest: string;
    invoiceFee: string;
    totalPay: string;
    debtBalance: string;
    constructor(x: IPaymentPlan) {

        this.plan = x.plan;
        this.amortization = x.amortization;
        this.interest = x.interest;
        this.invoiceFee = x.invoiceFee;
        this.totalPay = x.totalPay;
        this.debtBalance = x.debtBalance;

    }



}

interface IPaymentPlan {
    plan: string;
    amortization: string;
    interest: string;
    invoiceFee: string;
    totalPay: string;
    debtBalance: string;



}
