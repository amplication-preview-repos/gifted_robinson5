import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { PaymentUpdateManyWithoutLoansInput } from "./PaymentUpdateManyWithoutLoansInput";

export type LoanUpdateInput = {
  amount?: number | null;
  application?: ApplicationWhereUniqueInput | null;
  client?: ClientWhereUniqueInput | null;
  endDate?: Date | null;
  interestRate?: number | null;
  payments?: PaymentUpdateManyWithoutLoansInput;
  startDate?: Date | null;
  status?: "Option1" | null;
};
