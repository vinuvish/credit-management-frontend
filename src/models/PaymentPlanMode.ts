export class PaymentPlanModel {
    plan: string;
    amortization: string;
    interest: string;
    invoiceFee: string;
    totalPay: string;
    debtBalance: string;
    constructor(x: IPaymentPlanModel) {

        this.plan = x.plan;
        this.amortization = x.amortization;
        this.interest = x.interest;
        this.invoiceFee = x.invoiceFee;
        this.totalPay = x.totalPay;
        this.debtBalance = x.debtBalance;

    }



}

interface IPaymentPlanModel {
    plan: string;
    amortization: string;
    interest: string;
    invoiceFee: string;
    totalPay: string;
    debtBalance: string;



}
