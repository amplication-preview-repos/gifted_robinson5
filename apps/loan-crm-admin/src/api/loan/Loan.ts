import { Application } from "../application/Application";
import { Client } from "../client/Client";
import { Payment } from "../payment/Payment";

export type Loan = {
  amount: number | null;
  application?: Application | null;
  client?: Client | null;
  createdAt: Date;
  endDate: Date | null;
  id: string;
  interestRate: number | null;
  payments?: Array<Payment>;
  startDate: Date | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
