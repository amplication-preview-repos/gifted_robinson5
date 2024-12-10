import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { PaymentCreateNestedManyWithoutLoansInput } from "./PaymentCreateNestedManyWithoutLoansInput";

export type LoanCreateInput = {
  amount?: number | null;
  application?: ApplicationWhereUniqueInput | null;
  client?: ClientWhereUniqueInput | null;
  endDate?: Date | null;
  interestRate?: number | null;
  payments?: PaymentCreateNestedManyWithoutLoansInput;
  startDate?: Date | null;
  status?: "Option1" | null;
};
