import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { LoanCreateNestedManyWithoutApplicationsInput } from "./LoanCreateNestedManyWithoutApplicationsInput";

export type ApplicationCreateInput = {
  amountApproved?: number | null;
  amountRequested?: number | null;
  approvalDate?: Date | null;
  client?: ClientWhereUniqueInput | null;
  loans?: LoanCreateNestedManyWithoutApplicationsInput;
  status?: "Option1" | null;
};
