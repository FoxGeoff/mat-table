import { Supervisor } from "./interfaces/supervisor";

export class SupervisorData {

  private supervisors: Supervisor[] = [
    { id: 1, companyId: 1, firstName: 'Joanna', lastName: 'Fox', email: 'joe@gmail.com', phone: '858-666-321', isActive: true },
    { id: 2, companyId: 1, firstName: 'Geoff', lastName: 'Fox', email: 'geoff@gmail.com', phone: '858-676-321', isActive: true },
  ];

  getAllSupervisors(): Supervisor[] {
    return this.supervisors.slice();
  }

}
