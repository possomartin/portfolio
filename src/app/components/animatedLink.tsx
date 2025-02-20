import Link from 'next/link';
import React, { ReactElement } from 'react';

export interface IAnimatedLinkProps {
  title: string;
  link: string;
}

export const AnimatedLink = ({
  title,
  link,
}: IAnimatedLinkProps): ReactElement => {
  return (
    <Link
      href={link}
      className="group max-h-5 block space-y-5 overflow-hidden font-bold"
    >
      <h3 className="group-hover:-translate-y-8 transition-transform delay-100">
        {title}
      </h3>
      <h3 className="group-hover:-translate-y-11 text-[var(--text)] transition-transform delay-100">
        {title}
      </h3>
    </Link>
  );
};
