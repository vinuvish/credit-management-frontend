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
      email: data['email'] ?? '',
      firstName: data['firstName'] ?? '',
      id: doc.id,
      lastName: data['lastName'] ?? '',
      isActive: data['isActive'] ?? true,
      isAdmin: data['isAdmin'] ?? false,
      locationId: data['locationId'] ?? [],
      timestampCreated: data['timestampCreated']?.toDate() ?? new Date(),
      timestampLastLogin: data['timestampLastLogin']?.toDate() ?? new Date()
    });
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
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


