import Link from 'next/link';
import Image from 'next/image';
import React, { ReactElement } from 'react';

export const Menu = (): ReactElement => {
  return (
    <div className="flex pt-5 pr-20 pl-20 border">
      <div className="flex-2 border">
        <Link href={'/#home'}>
          <Image
            src={'/portfolio_logo.svg'}
            width={96}
            height={96}
            alt="Portfolio Logo that is shape of a rabbit."
            priority
          />
        </Link>
      </div>
      <div className="w-2/4 flex-2 border"></div>
      <div className="flex border flex-row flex-1 text-[var(--accent)] font-semibold space-x-6 items-center justify-end p-5">
        <Link href={'/#about'}>
          <h3>About</h3>
        </Link>
        <Link href={'/#about'}>
          <h3>Work</h3>
        </Link>
        <Link href={'/#about'}>
          <h3>Projects</h3>
        </Link>
        <Link href={'/#about'}>
          <h3>Skills</h3>
        </Link>
        <Link href={'/#about'}>
          <h3>Contact</h3>
        </Link>
        <button></button>
      </div>
    </div>
  );
};
