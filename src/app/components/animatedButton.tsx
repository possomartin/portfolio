'use client';
import Link from 'next/link';
import React, { ReactElement } from 'react';
import { AnimatedLottie } from './animatedLottie';

export interface IAnimatedButtonProps {
  title: string;
  link: string;
  onClick?: () => void;
}

export const AnimatedButton = ({
  title,
  link,
}: IAnimatedButtonProps): ReactElement => {
  return (
    <div className="group relative text-[var(--accent)] font-(--font-open-sans) font-bold cursor-pointer">
      <Link
        href={link}
        className="flex flex-row items-center justify-center z-50"
      >
        <AnimatedLottie animation="./lottie/chevron_right.lottie">
          <h3>{title}</h3>
        </AnimatedLottie>
      </Link>
      <div className="absolute bg-[var(--secondary)] w-12 h-12 rounded-full opacity-20 -left-3 top-0 -z-50 group-hover:w-full group-hover:p-6 transition-all delay-75"></div>
    </div>
  );
};
