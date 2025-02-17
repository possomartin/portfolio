import React, { ReactElement, ReactNode } from 'react';

export interface IPopOver {
  isHidden: boolean;
  children: ReactNode;
}

export const PopOver = ({ isHidden, children }: IPopOver): ReactElement => {
  return (
    <div className="absolute right-0" hidden={isHidden}>
      <div className="absolute blur w-screen h-screen top-0 right-0" />
      <div className="absolute text-[var(--accent)] border shadow-lg rounded-md bg-[var(--background-secondary)] w-40 p-10 right-0">
        <div className="flex flex-col space-y-6 justify-between items-end">
          {children}
        </div>
      </div>
    </div>
  );
};
