import { Client } from "../client/Client";
import { Loan } from "../loan/Loan";

export type Application = {
  amountApproved: number | null;
  amountRequested: number | null;
  approvalDate: Date | null;
  client?: Client | null;
  createdAt: Date;
  id: string;
  loans?: Array<Loan>;
  status?: "Option1" | null;
  updatedAt: Date;
};
