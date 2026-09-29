import { type PersonProps } from "./Person.types";

type PersonListProps = {
  personLists: PersonProps[];
};

const PersonList = ({ personLists }: PersonListProps) => {
  return (
    personLists && (
      <div>
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>age</th>
              <th>address</th>
            </tr>
          </thead>

          <tbody>
            {personLists.map((item) => (
              <tr
                style={
                  item.age > 60
                    ? { backgroundColor: "red" }
                    : { backgroundColor: "white" }
                }
                key={item._id}
              >
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  );
};

export default PersonList;
