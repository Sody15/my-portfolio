import { FC } from 'react';

interface ButtonProps
  extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    React.AriaAttributes {
  title: string;
}

const Button: FC<ButtonProps> = (props) => {
  return (
    <button
      className='bg-yellow-300 uppercase px-10 py-4 rounded-md tracking-wider font-semibold text-lg hover:scale-105 transition-transform shadow-md'
      {...props}
    >
      {props.title}
    </button>
  );
};

export default Button;
