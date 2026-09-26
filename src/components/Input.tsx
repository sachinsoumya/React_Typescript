type inputProps = {
  value: string;

  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputElement = ({ handleChange, value }: inputProps) => {
  const handleInputChange = (eventValue: string) => {
    console.log(eventValue);
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => handleInputChange(e.target.value)}
        value={value}
      ></input>
    </div>
  );
};
