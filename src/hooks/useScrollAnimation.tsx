"use client";

import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(entry.target);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
}

export function useStaggeredScrollAnimation(count: number, options: UseScrollAnimationOptions = {}) {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(count).fill(false));
  const refs = useRef<(HTMLElement | null)[]>(new Array(count).fill(null));

  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;

  useEffect(() => {
    const observers = refs.current.map((_, index) => {
      return new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleItems(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, index * 150); // Stagger delay

            if (triggerOnce) {
              observers[index]?.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            setVisibleItems(prev => {
              const newState = [...prev];
              newState[index] = false;
              return newState;
            });
          }
        },
        {
          threshold,
          rootMargin,
        }
      );
    });

    refs.current.forEach((ref, index) => {
      if (ref && observers[index]) {
        observers[index].observe(ref);
      }
    });

    return () => {
      refs.current.forEach((ref, index) => {
        if (ref && observers[index]) {
          observers[index].unobserve(ref);
        }
      });
    };
  }, [count, threshold, rootMargin, triggerOnce]);

  const setRef = (index: number) => (element: HTMLElement | null) => {
    refs.current[index] = element;
  };

  return { setRef, visibleItems };
}