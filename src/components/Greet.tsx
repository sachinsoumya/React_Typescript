type GreetProps = {
  message: string,
  messageCount?:number,
  isLoggedIn:boolean
};

const Greet = (props: GreetProps) => {
  const {message , messageCount =0, isLoggedIn} = props
  return (
    <div>
      {isLoggedIn ? <p>Hello , {message} and {messageCount}</p> : <p> User not logged in yet</p> }
    </div>
  );
};

export default Greet;
