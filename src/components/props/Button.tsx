const Button = (props: { text: string }) => {
  return (
    <>
      <div>
        <h1>Welcome to {props.text}</h1>
      </div>
    </>
  );
};

export default Button;
