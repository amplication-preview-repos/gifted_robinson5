import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { ApplicationList } from "./application/ApplicationList";
import { ApplicationCreate } from "./application/ApplicationCreate";
import { ApplicationEdit } from "./application/ApplicationEdit";
import { ApplicationShow } from "./application/ApplicationShow";
import { ClientList } from "./client/ClientList";
import { ClientCreate } from "./client/ClientCreate";
import { ClientEdit } from "./client/ClientEdit";
import { ClientShow } from "./client/ClientShow";
import { EmailLogList } from "./emailLog/EmailLogList";
import { EmailLogCreate } from "./emailLog/EmailLogCreate";
import { EmailLogEdit } from "./emailLog/EmailLogEdit";
import { EmailLogShow } from "./emailLog/EmailLogShow";
import { SmsLogList } from "./smsLog/SmsLogList";
import { SmsLogCreate } from "./smsLog/SmsLogCreate";
import { SmsLogEdit } from "./smsLog/SmsLogEdit";
import { SmsLogShow } from "./smsLog/SmsLogShow";
import { LoanList } from "./loan/LoanList";
import { LoanCreate } from "./loan/LoanCreate";
import { LoanEdit } from "./loan/LoanEdit";
import { LoanShow } from "./loan/LoanShow";
import { PaymentList } from "./payment/PaymentList";
import { PaymentCreate } from "./payment/PaymentCreate";
import { PaymentEdit } from "./payment/PaymentEdit";
import { PaymentShow } from "./payment/PaymentShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"Loan CRM"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Application"
          list={ApplicationList}
          edit={ApplicationEdit}
          create={ApplicationCreate}
          show={ApplicationShow}
        />
        <Resource
          name="Client"
          list={ClientList}
          edit={ClientEdit}
          create={ClientCreate}
          show={ClientShow}
        />
        <Resource
          name="EmailLog"
          list={EmailLogList}
          edit={EmailLogEdit}
          create={EmailLogCreate}
          show={EmailLogShow}
        />
        <Resource
          name="SmsLog"
          list={SmsLogList}
          edit={SmsLogEdit}
          create={SmsLogCreate}
          show={SmsLogShow}
        />
        <Resource
          name="Loan"
          list={LoanList}
          edit={LoanEdit}
          create={LoanCreate}
          show={LoanShow}
        />
        <Resource
          name="Payment"
          list={PaymentList}
          edit={PaymentEdit}
          create={PaymentCreate}
          show={PaymentShow}
        />
      </Admin>
    </div>
  );
};

export default App;
