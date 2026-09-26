type statusProps = {
    status: "loading" | "success" | "failure";
 
};

export const Status = ({ status }: statusProps) => {
  let message;
  message =
    status === "loading"
      ? "status is in loading "
      : status === "success"
        ? "status is 200 ok"
        : status === "failure"
          ? "failure status"
          : "error in getting status";

  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
};
