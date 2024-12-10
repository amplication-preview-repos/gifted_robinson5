import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { LOAN_TITLE_FIELD } from "../loan/LoanTitle";

export const PaymentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Payments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="amount" source="amount" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Loan" source="loan.id" reference="Loan">
          <TextField source={LOAN_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="loanBalance" source="loanBalance" />
        <TextField label="paymentDate" source="paymentDate" />
        <TextField label="PaymentType" source="paymentType" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
