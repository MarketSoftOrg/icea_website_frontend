import React from 'react';

interface MainPageContentContainerProps {
  children: React.ReactNode;
  id?: string;
}

const MainPageContentContainer: React.FC<MainPageContentContainerProps> = ({ children, id }) => {
  return (
    <div
      id={id}
      className=" mb-6 mt-6 mx-auto w-full sm:w-11/12 md:w-11/12 lg:w-10/12 2xl:w-3/4 bg-white rounded-lg shadow-md  md:p-6 "
    >
      {children}
    </div>
  );
};

export default MainPageContentContainer;
