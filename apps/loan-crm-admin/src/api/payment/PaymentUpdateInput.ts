import { LoanWhereUniqueInput } from "../loan/LoanWhereUniqueInput";

export type PaymentUpdateInput = {
  amount?: number | null;
  loan?: LoanWhereUniqueInput | null;
  loanBalance?: number | null;
  paymentDate?: Date | null;
  paymentType?: "Option1" | null;
};
