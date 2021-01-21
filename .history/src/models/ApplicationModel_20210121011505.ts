export class Application implements IApplication {
  id: string;
  firstName: string;
  lastName: string;
  ssn: string;
  phone: string;
  email: string;
  loanType: string;
  approvedAmount: string;
  paybackPeriod: string;
  interestRate: string;
  invoiceFee: string;
  status: string;
  created_at: string;
  updated_at: string;
  paymentPlans: [];

  constructor(x: IApplication) {
    this.id = x.id,
      this.firstName = x.firstName,
      this.lastName = x.lastName,
      this.ssn = x.ssn,
      this.phone = x.phone,
      this.email = x.email,
      this.loanType = x.loanType,
      this.approvedAmount = x.approvedAmount,
      this.paybackPeriod = x.paybackPeriod,
      this.interestRate = x.interestRate,
      this.invoiceFee = x.invoiceFee,
      this.status = x.status,
      this.created_at = x.created_at,
      this.updated_at = x.updated_at,
      this.paymentPlans = x.paymentPlans,

  }

  static fromFirestore(doc: firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>): AuthUser | null {
    const data = doc.data();
    if (!data) return null;

    return new Application({
      id: data['id'] ?? '',
      firstName: data['firstName'] ?? '',
      lastName: data['lastName'] ?? '',
      ssn: data['ssn'] ?? '',
      loanType: data['loanType'] ?? '',
      approvedAmount: data['approvedAmount'] ?? '',
      paybackPeriod: data['paybackPeriod'] ?? '',
      interestRate: data['interestRate'] ?? '',
      invoiceFee: data['invoiceFee'] ?? '',
      status: data['status'] ?? '',
      created_at: data['created_at'] ?? '',
      updated_at: data['updated_at'] ?? '',
      paymentPlans: data['paymentPlans'] ?? '',
    });
  }


}

interface IApplication {
  id: string;
  firstName: string;
  lastName: string;
  ssn: string;
  phone: string;
  email: string;
  loanType: string;
  approvedAmount: string;
  paybackPeriod: string;
  interestRate: string;
  invoiceFee: string;
  status: string;
  created_at: string;
  updated_at: string;
  paymentPlans: [];


}


