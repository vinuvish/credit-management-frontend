export class Application implements IApplication {
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  isActive: boolean;
  isAdmin: boolean;
  timestampCreated: Date;
  locationId: [];

  timestampLastLogin: Date;

  constructor(x: IApplication) {
    this.email = x.email;
    this.firstName = x.firstName;
    this.id = x.id;
    this.lastName = x.lastName;
    this.isActive = x.isActive;
    this.isAdmin = x.isAdmin;
    this.locationId = x.locationId
    this.timestampCreated = x.timestampCreated;
    this.timestampLastLogin = x.timestampLastLogin;
  }

  static fromFirestore(doc: firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>): AuthUser | null {
    const data = doc.data();
    if (!data) return null;

    return new AuthUser({
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
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  isActive: boolean;
  isAdmin: boolean;
  locationId: [];

  timestampCreated: Date;
  timestampLastLogin: Date;
}


