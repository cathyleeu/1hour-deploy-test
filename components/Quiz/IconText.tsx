interface Props {
  icon: string;
  children: React.ReactNode;
  className?: string;
}
const IconText = ({icon, children, className}:Props) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className={`bg-${icon} w-4 h-4 bg-contain mr-2`}></div>
      {children}
    </div>
  )
}

export default IconText;