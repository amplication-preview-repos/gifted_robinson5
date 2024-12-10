import { SortOrder } from "../../util/SortOrder";

export type ApplicationOrderByInput = {
  amountApproved?: SortOrder;
  amountRequested?: SortOrder;
  approvalDate?: SortOrder;
  clientId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
