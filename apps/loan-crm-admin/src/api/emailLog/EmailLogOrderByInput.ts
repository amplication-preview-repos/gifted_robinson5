import { SortOrder } from "../../util/SortOrder";

export type EmailLogOrderByInput = {
  body?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  sentDate?: SortOrder;
  status?: SortOrder;
  subject?: SortOrder;
  to?: SortOrder;
  updatedAt?: SortOrder;
};
