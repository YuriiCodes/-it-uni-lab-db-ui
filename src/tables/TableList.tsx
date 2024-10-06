import {
  ArrayField,
  Datagrid,
  List,
  TextField,
} from "react-admin";

export const TableList = () => (
  <List>
    <Datagrid>
      <TextField source="name" />
      <TextField source="id" />
      <ArrayField source="columns">
        <Datagrid
        bulkActionButtons={false}
        >
          <TextField source="cid" />
          <TextField source="name" />
          <TextField source="type" />
          <TextField source="notnull" />
          <TextField source="dflt_value" />
          <TextField source="pk" />
        </Datagrid>
      </ArrayField>
    </Datagrid>
  </List>
);
