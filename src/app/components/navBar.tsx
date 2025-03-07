'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { ReactElement, useState } from 'react';
import { AnimatedLottie } from '@components/animatedLottie';
import { AnimatedLink, IAnimatedLinkProps } from '@components/animatedLink';
import { PopOver } from './popOver';

export const NavBar = (): ReactElement => {
  /* Active Link */
  const [active, setActive] = useState<number>(0);

  /* Control PopUp Menu State*/
  const [isHidden, setHidden] = useState<boolean>(true);
  const onclick = (): void => {
    setHidden(!isHidden);
  };

  /* Animations */

  /* Menu Options List*/
  const menuOptions: IAnimatedLinkProps[] = [
    { title: 'About', link: '#about' },
    { title: 'Work', link: '#work' },
    { title: 'Projects', link: '#projects' },
    { title: 'Skills', link: '#skills' },
    { title: 'Contact', link: '#contact' },
  ];

  return (
    <div className="flex pt-5 pr-10 pl-10 md:pr-20 md:pl-20">
      {/*Desktop Menu*/}
      <div className="flex-grow md:flex-2">
        <Link href={'/'}>
          <Image
            src={'/portfolio_logo.svg'}
            width={96}
            height={96}
            alt="Portfolio Logo that is shape of a rabbit."
            priority
          />
        </Link>
      </div>
      {/*Space in Between [  ] | [ ] | [   ]*/}
      <div className="invisible w-2/4 flex-1 md:flex-2"></div>
      <div className="flex flex-grow md:flex-2 items-center justify-end">
        {/*Mobile Menu*/}
        <div className="md:hidden relative z-20">
          <AnimatedLottie
            animation={'./lottie/menu.lottie'}
            speed={3}
            onClickEvent={onclick}
            reverse
          />
          <PopOver isHidden={isHidden}>
            {menuOptions.map((element, id) => (
              <div
                className="flex flex-row justify-between space-x-5 items-center z-10"
                key={id}
                onClick={() => setActive(id)}
              >
                <div
                  className={`rounded-lg bg-[var(--primary)] w-1 h-2 ${id != active ? 'invisible' : 'visible'}`}
                />
                <AnimatedLink title={element.title} link={element.link} />
              </div>
            ))}
          </PopOver>
        </div>
        {/*Desktop Menu*/}
        <div className="hidden md:flex flex-row text-[var(--accent)] space-x-6 items-center justify-center">
          {menuOptions.map((element, id) => (
            <div
              className="grid grid-rows-2 gap-1 items-center justify-items-center text-center"
              key={id}
              onClick={() => setActive(id)}
            >
              <AnimatedLink title={element.title} link={element.link} />
              <div
                className="rounded-lg bg-[var(--primary)] w-2 h-1"
                hidden={id != active}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
