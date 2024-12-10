import { SortOrder } from "../../util/SortOrder";

export type LoanOrderByInput = {
  amount?: SortOrder;
  applicationId?: SortOrder;
  clientId?: SortOrder;
  createdAt?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  interestRate?: SortOrder;
  startDate?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
