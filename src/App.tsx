import {
  Admin,
  Resource,
  EditGuesser,
  ShowGuesser,
  ListGuesser,
} from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import { TableList } from "./tables/TableList.tsx";
import { TableShow } from "./tables/TableShow.tsx";
import { TableCreate } from "./tables/TableCreate.tsx";


export const App = () => {
  return (
    <Admin layout={Layout} dataProvider={dataProvider}>

      <Resource
        name="tables"
        list={TableList}
        edit={EditGuesser}
        show={TableShow}
        create={TableCreate}
      />
      <Resource
        name="records/Users"
        list={ListGuesser}
        edit={EditGuesser}
        show={ShowGuesser}
      />
      <Resource
        name="records/Users2"
        list={ListGuesser}
        edit={EditGuesser}
        show={ShowGuesser}
      />
    </Admin>
  );
};
