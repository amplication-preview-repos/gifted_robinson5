import { ApplicationUpdateManyWithoutClientsInput } from "./ApplicationUpdateManyWithoutClientsInput";
import { LoanUpdateManyWithoutClientsInput } from "./LoanUpdateManyWithoutClientsInput";

export type ClientUpdateInput = {
  address?: string | null;
  applications?: ApplicationUpdateManyWithoutClientsInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  loans?: LoanUpdateManyWithoutClientsInput;
  phoneNumber?: string | null;
};
