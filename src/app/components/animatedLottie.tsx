import React, { ReactElement, useState, useEffect, ReactNode } from 'react';
import { DotLottie, DotLottieReact } from '@lottiefiles/dotlottie-react';

export interface IAnimatedLottie {
  animation: string;
  speed?: number;
  left?: boolean;
  reverse?: boolean;
  children?: ReactNode;
  onClickEvent?: () => void;
}

export const AnimatedLottie = ({
  animation,
  speed,
  reverse,
  children,
  left,
  onClickEvent,
}: IAnimatedLottie): ReactElement => {
  const [dotLottie, setDotLottie] = useState<DotLottie | null>(null);
  const dotLottieRefCallback = (dotLottie: DotLottie) => {
    setDotLottie(dotLottie);
  };

  const play = () => {
    if (dotLottie) {
      dotLottie.play();
      if (onClickEvent) onClickEvent();
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
      onClick={play}
      className={`flex ${left ? 'flex-row' : 'flex-row-reverse'} items-center`}
    >
      <div className="w-12 h-12">
        <DotLottieReact
          src={animation}
          dotLottieRefCallback={dotLottieRefCallback}
        />
      </div>
      {children}
    </button>
  );
};
