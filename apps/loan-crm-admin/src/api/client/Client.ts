import { Application } from "../application/Application";
import { Loan } from "../loan/Loan";

export type Client = {
  address: string | null;
  applications?: Array<Application>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  loans?: Array<Loan>;
  phoneNumber: string | null;
  updatedAt: Date;
};
