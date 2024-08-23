import React from 'react';


interface TitleProps {
  children: React.ReactNode;
  addClass?: string;
}

const Title: React.FC<TitleProps> = ({ children, addClass }) => {
  return (
    <div className={`${addClass} font-dancing font-bold`}>{children}</div>
  );
}

export default Title;
