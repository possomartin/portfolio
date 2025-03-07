import React, { ReactElement, useState, useEffect, ReactNode } from 'react';
import { DotLottie, DotLottieReact } from '@lottiefiles/dotlottie-react';

export interface IAnimatedLottie {
  animation: string;
  speed?: number;
  left?: boolean;
  reverse?: boolean;
  children?: ReactNode;
  style?: string;
  size?: string;
  hover?: boolean;
  onClickEvent?: () => void;
}

export const AnimatedLottie = ({
  animation,
  speed,
  reverse,
  children,
  left,
  style,
  size,
  hover,
  onClickEvent,
}: IAnimatedLottie): ReactElement => {
  const [dotLottie, setDotLottie] = useState<DotLottie | null>(null);
  const dotLottieRefCallback = (dotLottie: DotLottie) => {
    setDotLottie(dotLottie);
  };

  const playOnClick = () => {
    if (dotLottie) {
      dotLottie.play();
      if (onClickEvent) onClickEvent();
    }
  };

  const playOnHover = () => {
    if (dotLottie) {
      dotLottie.play();
    }
  };

  useEffect(() => {
    dotLottie?.addEventListener('load', () => {
      dotLottie.renderConfig.autoResize = true;
      dotLottie.setSpeed(speed ?? 2);
      dotLottie.setLoop(false);
    });

    dotLottie?.addEventListener('complete', () => {
      if (reverse) {
        if (dotLottie.mode == 'reverse') {
          dotLottie.setMode('forward');
        } else {
          dotLottie.setMode('reverse');
        }
      }
    });

    return () => {
      if (dotLottie) {
        dotLottie.removeEventListener('load');
        dotLottie.removeEventListener('complete');
      }
    };
  }, [dotLottie, speed, reverse]);

  return (
    <button
      type="button"
      onClick={!hover ? playOnClick : () => {}}
      onMouseOver={hover ? playOnHover : () => {}}
      className={`flex ${left ? 'flex-row' : 'flex-row-reverse'} items-center ${style}`}
    >
      <div className={size || 'w-12 h-12'}>
        <DotLottieReact
          src={animation}
          dotLottieRefCallback={dotLottieRefCallback}
        />
      </div>
      {children}
    </button>
  );
};
