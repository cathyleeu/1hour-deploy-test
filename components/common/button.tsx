interface Props {
  disable?: boolean;
  className?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ disable, className = '', children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`
        text-base rounded-medium text-white
        ${disable ? 'opacity-30 pointer-events-none' : undefined}
        ${className}
      `}
    >
      {children}
    </button>
  );
};
export default Button;
