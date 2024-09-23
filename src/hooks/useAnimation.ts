import { useEffect, useRef } from 'react';
import lottie, { AnimationItem } from 'lottie-web';

interface UseLottieAnimationProps {
  animationData: object;
  loop?: boolean;
  autoplay?: boolean;
}

const useLottieAnimation = ({
  animationData,
  loop = true,
  autoplay = true,
}: UseLottieAnimationProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<AnimationItem | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      animationRef.current = lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop,
        autoplay,
        animationData,
      });
    }
    return () => {
      animationRef.current?.destroy();
    };
  }, [animationData, loop, autoplay]);

  return containerRef;
};

export default useLottieAnimation;
