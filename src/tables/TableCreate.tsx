import {
  Create,
  SimpleForm,
  TextInput,
  required,
  ArrayInput,
  SimpleFormIterator,
  SelectInput,
  useRedirect,
} from "react-admin";

import { toast } from "react-toastify";

const columnTypes = [
  { id: "Int", name: "Int" },
  { id: "Float", name: "Float" },
  { id: "String", name: "String" },
  { id: "DateTime", name: "DateTime " },
  { id: "DateTime @default(now())", name: "DateTime with default now()" },
];

export const TableCreate = () => {
  const redirect = useRedirect();
  return (
    <Create
      mutationOptions={{
        onSuccess: () => {
          const redirectPromise = new Promise<void>((resolve) => {
            setTimeout(() => {
              redirect("list", "tables");
              resolve();
            }, 4000);
          });

          void toast.promise(redirectPromise, {
            pending: "Creating table...",
            success: "Table created!",
            error: "Error: Table not created",
          });
        },
      }}
    >
      <SimpleForm>
        <TextInput
          source="tableName"
          label="Table Name"
          validate={[
            required(),
            (value) =>
              value && value.includes(" ")
                ? "Table name cannot contain spaces"
                : undefined,
            (value) =>
              value && !/^[a-zA-Z]/.test(value)
                ? "Table name must start with a letter"
                : undefined,
          ]}
        />
        <ArrayInput source="columns" label="Columns">
          <SimpleFormIterator>
            <TextInput
              source="name"
              label="Column Name"
              validate={[required()]}
            />
            <SelectInput
              source="type"
              label="Column Type"
              choices={columnTypes}
              validate={[required()]}
            />
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Create>
  );
};
