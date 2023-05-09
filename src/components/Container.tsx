import React from "react";

type ContainerProps = {
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className=" mx-auto w-full px-5 md:w-6/12 lg:px-0">{children}</div>
  );
};

export default Container;
