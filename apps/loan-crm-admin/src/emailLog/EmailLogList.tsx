import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const EmailLogList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"EmailLogs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="body" source="body" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="sentDate" source="sentDate" />
        <TextField label="status" source="status" />
        <TextField label="subject" source="subject" />
        <TextField label="to" source="to" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
