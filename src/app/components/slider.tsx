'use client';
import React, {
  ReactElement,
  ReactNode,
  useState,
  useRef,
  useEffect,
} from 'react';

export interface ISliderProps {
  initialScroll: number;
  children: Array<ReactNode>;
}

const style = {
  button:
    'rounded-full bg-[var(--primary)] text-[var(--background)] p-2 w-10 h-10 hover:bg-[var(--secondary)] shadow-lg disabled:opacity-20',
  container: 'overflow-hidden',
  content:
    'overflow-x-scroll [scrollbar-width:none] smooth-scroll flex flex-row justify-start gap-5 py-5 px-2 snap-x snap-mandatory',
};

export const Slider = ({
  children,
  initialScroll = 0,
}: ISliderProps): ReactElement => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(true);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      console.log(scrollLeft);
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-[90vw] h-auto flex flex-col p-2 justify-between gap-5">
      <div className={style.container}>
        <div
          className={style.content}
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          {children}
        </div>
      </div>
      <div className="flex flex-row items-center justify-center self-end gap-5">
        <button
          type="button"
          className={style.button}
          onClick={scrollLeft}
          disabled={!canScrollLeft}
        >
          {'<'}
        </button>
        <button
          type="button"
          className={style.button}
          onClick={scrollRight}
          disabled={!canScrollRight}
        >
          {'>'}
        </button>
      </div>
    </div>
  );
};
