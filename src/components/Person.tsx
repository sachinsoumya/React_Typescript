type detailsType = {
  details: {
    name: string;
    age: number;
    address: string;
    skills: string[];
  };
};

const Person = (props: detailsType) => {
    const {name , age , address , skills}=props.details;
   
  return <div>The name of person is {name} , age {age}, address : {address}  and has skills like {skills.join()}</div>;
};

export default Person;
