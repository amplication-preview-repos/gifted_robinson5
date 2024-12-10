import { ApplicationCreateNestedManyWithoutClientsInput } from "./ApplicationCreateNestedManyWithoutClientsInput";
import { LoanCreateNestedManyWithoutClientsInput } from "./LoanCreateNestedManyWithoutClientsInput";

export type ClientCreateInput = {
  address?: string | null;
  applications?: ApplicationCreateNestedManyWithoutClientsInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  loans?: LoanCreateNestedManyWithoutClientsInput;
  phoneNumber?: string | null;
};
