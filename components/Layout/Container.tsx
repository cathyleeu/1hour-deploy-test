interface Props {
  children: React.ReactNode;
}

export default function Container({ children }: Props) {
  return (
    <div className="h-full w-[90%] m-auto py-4">
      {children}
    </div>
  );
}
