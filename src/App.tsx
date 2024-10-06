import { useEffect, useState } from "react";
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
  const [resources, setResources] = useState<string[]>([]);

  useEffect(() => {
    const fetchTables = async () => {
      const response = await dataProvider.getList("tables", {
        pagination: { page: 1, perPage: 100 },
        sort: { field: "name", order: "ASC" },
        filter: {},
      });
      const tableNames = response.data.map((table) => table.name);
      setResources(tableNames);
    };

    void fetchTables();
  }, []);

  return (
    <Admin layout={Layout} dataProvider={dataProvider}>
      <Resource
        name="tables"
        list={TableList}
        show={TableShow}
        create={TableCreate}
      />

      {resources.map((tableName) => (
        <Resource
          key={tableName}
          name={`records/${tableName}`}
          list={ListGuesser}
          edit={EditGuesser}
          show={ShowGuesser}
        />
      ))}
    </Admin>
  );
};
