import './style.css';

interface ButtonProps {
  text: string;
  width: string;
  height: string;
}

export const Button = ({ text, width, height }: ButtonProps) => {
  return (
    <button className="btn" style={{ width, height }}>
      {text}
    </button>
  );
};
