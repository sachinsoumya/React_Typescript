type personListProps = {
  personLists: {
    name: string;
    age: number;
    address: string;
  }[];
};

const PersonList = ({ personLists }: personListProps) => {
  return (
    personLists && (
      <div>
        <table>
          <tr>
            <th>name</th>
            <th>age</th>
            <th>address</th>
          </tr>

          {personLists.map((item) => (
            <tr style={ item.age >60 ?{backgroundColor:'red'} : {backgroundColor :'white'}}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.address}</td>
            </tr>
          ))}
        </table>
      </div>
    )
  );
};

export default PersonList;
