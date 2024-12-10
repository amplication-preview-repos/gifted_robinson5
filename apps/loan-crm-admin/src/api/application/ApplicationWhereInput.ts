import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { LoanListRelationFilter } from "../loan/LoanListRelationFilter";

export type ApplicationWhereInput = {
  amountApproved?: FloatNullableFilter;
  amountRequested?: FloatNullableFilter;
  approvalDate?: DateTimeNullableFilter;
  client?: ClientWhereUniqueInput;
  id?: StringFilter;
  loans?: LoanListRelationFilter;
  status?: "Option1";
};
