interface Props {
  className?: string;
  children: React.ReactNode;
  tag?: keyof JSX.IntrinsicElements;
}

export default function Container({ children, className, tag: Wrapper = 'div' }: Props) {
  return (
    <Wrapper className={`h-full w-full px-8 max-w-[1024px] m-auto ${className} `}>
      {children}
    </Wrapper>
  );
}
