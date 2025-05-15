import Image from 'next/image';
import React, { ReactElement, ReactNode } from 'react';
import { AnimatedButton } from './animatedButton';

export interface IBentoGrid {
  children: ReactNode;
}

export const BentoGrid = ({ children }: IBentoGrid): ReactElement => {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 lg:auto-rows-[18rem] lg:grid-cols-2">
      {children}
    </div>
  );
};

export interface IBentoGridItem {
  title: string;
  description: string;
  image_url: string;
  links: Array<{
    name: string;
    url: string;
  }>;
  chips: ReactNode;
  className?: string;
}

export const BentoGridItem = ({
  title,
  description,
  image_url,
  links,
  chips,
  className,
}: IBentoGridItem): ReactElement => {
  return (
    <div
      className={
        'relative flex md:flex-row flex-col gap-4 items-center justify-center rounded-lg shadow-lg p-10 overflow-hidden justify-self-end ' +
        className
      }
    >
      <div className="flex flex-col justify-center items-center gap-8">
        <h2 className="self-start text-[var(--primary)] text-lg font-bold">
          {title}
        </h2>
        {chips}
        <span className="text-[var(--secondary)]">
          <p>{description}</p>
        </span>
        <div className="flex flex-row self-start gap-4">
          {links.map((link, index) => (
            <AnimatedButton
              key={index}
              link={link.url}
              title={link.name}
              className={'self-start'}
            />
          ))}
        </div>
      </div>
      <div className="self-end w-full md:w-1/2">
        <Image
          src={image_url}
          alt={title}
          height={420}
          width={220}
          className="md:absolute w-[16rem] md:w-[20rem] -bottom-5 md:-bottom-7 -right-10 md:right-0 shadow-lg"
        />
      </div>
    </div>
  );
};
