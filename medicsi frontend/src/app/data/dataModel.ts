export interface EmployeeModel {
  id: number;
  genenralInfo: {
    employeeNumber: string;
    type: string;
    cnic: string;
    cnicExpiryDate: Date;
    name: string;
    relation: string;
    relationName: string;
    religion: string;
    gender: string;
    employeeFor: string;
    maritalStatus: string;
    //languages: string[];
    passportNumber: string;
    passportExpiryDate: Date;
    registrationNumber: string;
    validity: Date;
    pmdc: string;
    pmdcExpiryDate: Date;
    pnc: string;
    pncExpiryDate: Date;
    drivingLicence: string;
    drivingLicenceExpiryDate: Date;
    branch: string;
    department: string;
    category: string;
    employmentType: string;
    startDate: Date;
    endDate: Date;
    dob: Date;
    bloodGroup: string;
    email: string;
    landLine: Number;
    mobileNumber: Number;
    fax: Number;
    address: string;
    joiningDate: Date;
    qualifications: { degree: string; instituteName: string; year: number }[];
    experiences: {
      designation: string;
      organizationName: string;
      year: number;
    }[];

    kinName: string;
    kinRelation: string;
    kinPhoneNumber: Number;
    kinMobileNumber: Number;
    kinOccupation: string;
    kinAddress: string;
  };
  salaryModel: {
    leaveCustom: number;
    leaveNotPaid: boolean;
    basicHours: string;
    salary: number;
    overtimeRatePerHour: number;
    conveyanceAmount: number;
    educationAmount: number;
    hostelRent: number;
    oebiDeduction: number;
    loanDeduction: number;
    transportDeduction: number;
    cafeteriaBill: number;
    annualLeave: number;
    sickLeave: number;
    bankName: string;
    modeOfPayment: string;
  };
  jobDescriptionModel: {
    salary: string;
    category: string;
    benefits: string;
  };
}
