import { SortOrder } from "../../util/SortOrder";

export type SmsLogOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  sentDate?: SortOrder;
  status?: SortOrder;
  to?: SortOrder;
  updatedAt?: SortOrder;
};
