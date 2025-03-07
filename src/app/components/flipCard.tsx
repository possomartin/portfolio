'use client';

import React, { useState, ReactElement } from 'react';
import { AnimatedLottie } from './animatedLottie';
import Link from 'next/link';
import Image from 'next/image';

export interface IFlipCardProps {
  title: string;
  duration: string;
  description: string;
  webPage: { name: string; url: string };
  image: { url: string; alternative?: string };
}

export const FlipCard = ({
  title,
  duration,
  description,
  webPage,
  image,
}: IFlipCardProps): ReactElement => {
  const [active, setActive] = useState<boolean>(false);

  const handleButtonClick = () => {
    setActive(!active);
  };

  return (
    <div className="group flex relative w-80 h-64">
      <div
        className="absolute w-full h-full p-10 text-[var(--primary)] group-hover:text-[var(--background)] rounded-2xl shadow-lg bg-left-bottom bg-gradient-to-l from-[var(--secondary)] bg-[length:200%_100%] to-[var(--secondary-light)] from-50% to-50% group-hover:bg-right-bottom transition-all delay-150 ease-out"
        hidden={active}
      >
        <div className="grid grid-cols-1 grid-rows-2 gap-1">
          <div className="relative">
            <Image
              src={image.url}
              alt="Company logo"
              className="absolute opacity-100 group-hover:opacity-0"
              width={128}
              height={64}
              loading="lazy"
            />
            <Image
              src={image.alternative || image.url}
              alt="Alternative company logo"
              className="absolute opacity-0 group-hover:opacity-100"
              width={128}
              height={64}
              loading="lazy"
            />
          </div>
          <div className="row-start-2">
            <h1 className="font-bold text-lg">{title}</h1>
            <p className="text-sm">{duration}</p>
          </div>
        </div>
      </div>
      <div
        className="absolute bg-[var(--secondary)] w-full h-full rounded-2xl shadow-lg p-10 text-[var(--background)] text-xs"
        hidden={!active}
      >
        <div className="grid grid-cols-1 grid-rows-2 gap-2">
          <span>
            <p>{description}</p>
          </span>
          <AnimatedLottie
            animation="./lottie/dribble.lottie"
            size="w-6 h-6"
            left
            hover
          >
            <Link href={webPage.url} className="underline italic">
              {webPage.name}
            </Link>
          </AnimatedLottie>
        </div>
      </div>
      <AnimatedLottie
        animation="./lottie/plusx.lottie"
        size="w-8 h-8"
        style="absolute z-10 bg-[var(--primary)] hover:bg-[var(--text)] rounded-full bottom-5 right-5"
        onClickEvent={() => handleButtonClick()}
        reverse
      />
    </div>
  );
};
