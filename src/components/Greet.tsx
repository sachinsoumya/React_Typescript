type GreetProps = {
  message: string;
};

const Greet = (props: GreetProps) => {
  return (
    <div>
      <p>Hello , {props.message}</p>
    </div>
  );
};

export default Greet;
