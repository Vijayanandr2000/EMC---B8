import { formFields } from "./DynamicForm";

const DynamicTable = ({ userData }) => {
  console.log("formFields", formFields);
  let tableHead = formFields
    .sort((a, b) => a.order - b.order)
    .map((field) => {
      return field.id;
    });

  console.log("userData", userData, tableHead);
  return (
    <div>
      <h1>Table</h1>
      <table border={1} style={{ width: "80%" }}>
        <thead>
          {tableHead.map((head) => {
            return <td>{head}</td>;
          })}
        </thead>
        <tbody>
          {userData.map((data) => {
            return (
              <tr>
                {tableHead.map((head) => {
                  return (
                    <td>
                      {head === "color" ? (
                        <input type="color" value={data[head]} disabled />
                      ) : (
                        data[head]
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;
