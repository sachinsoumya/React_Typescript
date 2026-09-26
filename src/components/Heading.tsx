type childrenProps = {
  children: string;
};

export const Heading = (props: childrenProps) => {
  console.log(props);

  return (
    <div>
      <h1>This is {props.children}</h1>
    </div>
  );
};
