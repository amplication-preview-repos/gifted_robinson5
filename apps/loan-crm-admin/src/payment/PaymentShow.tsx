import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { LOAN_TITLE_FIELD } from "../loan/LoanTitle";

export const PaymentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="amount" source="amount" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Loan" source="loan.id" reference="Loan">
          <TextField source={LOAN_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="loanBalance" source="loanBalance" />
        <TextField label="paymentDate" source="paymentDate" />
        <TextField label="PaymentType" source="paymentType" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
