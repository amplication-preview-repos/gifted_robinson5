import { Loan } from "../loan/Loan";

export type Payment = {
  amount: number | null;
  createdAt: Date;
  id: string;
  loan?: Loan | null;
  loanBalance: number | null;
  paymentDate: Date | null;
  paymentType?: "Option1" | null;
  updatedAt: Date;
};
