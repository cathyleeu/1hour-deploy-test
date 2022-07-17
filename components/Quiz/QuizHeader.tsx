import React from 'react';

interface Props {
  children: React.ReactNode | React.ReactNode[];
}
function Content({children}:Props) {
  return null
}

function Side({children}:Props) {
  return null
}

export default class QuizHeader extends React.Component<Props> {
  static Content = Content;
  static Side = Side;

  render() {
    const {children} = this.props
    
    const content = React.Children.toArray(children).find((child:any) => child.type === Content) as React.ReactElement;
    const side = React.Children.toArray(children).find((child:any) => child.type === Side) as React.ReactElement

    return (
      <section className='flex flex-col md:flex-row justify-between items-center mb-4 md:mb-10'>
        <p className='text-xl md:text-2xl font-bold self-start md:self-auto'>
          {content ? content.props.children : null}
        </p>
        
        <div className='self-end md:self-center my-4'>
          {side ? side.props.children : null}
        </div>
      </section>   
    )
  }
}
