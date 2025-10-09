// const Button = (props: { text: string }) => {
//* descruturing
const Button = ({ text, variant }: { text: string; variant: string }) => {
  return (
    <>
      <div>
        <h1>
          Welcome to {text} {variant}
        </h1>
      </div>
    </>
  );
};

export default Button;
