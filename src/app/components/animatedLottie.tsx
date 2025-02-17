import React, { ReactElement, useState, useEffect } from 'react';
import { DotLottie, DotLottieReact } from '@lottiefiles/dotlottie-react';

export interface IAnimatedLottie {
  animation: string;
  speed?: number;
  onClickEvent: () => void;
}

export const AnimatedLottie = ({
  animation,
  speed,
  onClickEvent,
}: IAnimatedLottie): ReactElement => {
  const [dotLottie, setDotLottie] = useState<DotLottie | null>(null);
  const dotLottieRefCallback = (dotLottie: DotLottie) => {
    setDotLottie(dotLottie);
  };

  const play = () => {
    if (dotLottie) {
      dotLottie.play();
      onClickEvent();
    }
  };

  useEffect(() => {
    dotLottie?.addEventListener('load', () => {
      dotLottie.renderConfig.autoResize = true;
      dotLottie.setSpeed(speed ?? 2);
      console.log(dotLottie.manifest?.themes);
    });

    dotLottie?.addEventListener('complete', () => {
      if (dotLottie.mode == 'reverse') {
        dotLottie.setMode('forward');
      } else {
        dotLottie.setMode('reverse');
      }
    });

    return () => {
      if (dotLottie) {
        dotLottie?.removeEventListener('load');
        dotLottie?.removeEventListener('complete');
      }
    };
  }, [dotLottie, speed]);

  return (
    <button onClick={play} className="w-12 h-12">
      <DotLottieReact
        src={animation}
        dotLottieRefCallback={dotLottieRefCallback}
      />
    </button>
  );
};
