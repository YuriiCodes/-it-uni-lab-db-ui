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
          setTimeout(() => {
            redirect("list", "tables");
          }, 4000);
        },
      }}
    >
      <SimpleForm>
        {/* must start with string - no number:*/}
        <TextInput
          source="tableName"
          label="Table Name"
          validate={[
            required(),
            (value) =>
              value && !/^[a-zA-Z]/.test(value)
                ? "Table name must start with a letter"
                : undefined,
          ]}
        />

        {/* Columns Array */}
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
