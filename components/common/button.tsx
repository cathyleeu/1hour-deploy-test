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
      `} // bg-blue와 className과 색상 충돌이 있어서 수정했습니다.
    >
      {children}
    </button>
  );
};
export default Button;
