import { useState } from "react";
import Screen from "components/Screen";
import CustomerTable from "components/CustomerTable";

import jsonCustomer from "./data/customer.json";

export default function App() {
  const [customer, setCustomer] = useState(jsonCustomer);

  console.log(customer);

  return (
    <Screen>
      <CustomerTable data={customer} />
    </Screen>
  );
}
