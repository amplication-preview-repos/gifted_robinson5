import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { LoanUpdateManyWithoutApplicationsInput } from "./LoanUpdateManyWithoutApplicationsInput";

export type ApplicationUpdateInput = {
  amountApproved?: number | null;
  amountRequested?: number | null;
  approvalDate?: Date | null;
  client?: ClientWhereUniqueInput | null;
  loans?: LoanUpdateManyWithoutApplicationsInput;
  status?: "Option1" | null;
};
