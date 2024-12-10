import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  loanId?: SortOrder;
  loanBalance?: SortOrder;
  paymentDate?: SortOrder;
  paymentType?: SortOrder;
  updatedAt?: SortOrder;
};
