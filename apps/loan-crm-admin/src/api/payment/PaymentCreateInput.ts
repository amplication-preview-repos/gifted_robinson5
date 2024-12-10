import { LoanWhereUniqueInput } from "../loan/LoanWhereUniqueInput";

export type PaymentCreateInput = {
  amount?: number | null;
  loan?: LoanWhereUniqueInput | null;
  loanBalance?: number | null;
  paymentDate?: Date | null;
  paymentType?: "Option1" | null;
};
