import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { LoanTitle } from "../loan/LoanTitle";

export const PaymentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <ReferenceInput source="loan.id" reference="Loan" label="Loan">
          <SelectInput optionText={LoanTitle} />
        </ReferenceInput>
        <NumberInput label="loanBalance" source="loanBalance" />
        <DateTimeInput label="paymentDate" source="paymentDate" />
        <SelectInput
          source="paymentType"
          label="PaymentType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
