import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";

export type LoanWhereInput = {
  amount?: FloatNullableFilter;
  application?: ApplicationWhereUniqueInput;
  client?: ClientWhereUniqueInput;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  interestRate?: FloatNullableFilter;
  payments?: PaymentListRelationFilter;
  startDate?: DateTimeNullableFilter;
  status?: "Option1";
};
