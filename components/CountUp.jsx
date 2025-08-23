import React, { useEffect, useRef, useState } from 'react';

const CountUp = ({ end = '0' }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  const numericPart = parseInt(end) || 0;
  const suffix = end.replace(numericPart.toString(), '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.6 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let start = 0;
    const duration = 2000;
    const intervalTime = 30;
    const steps = Math.ceil(duration / intervalTime);
    const increment = numericPart / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= numericPart) {
        start = numericPart;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, intervalTime);

    return () => clearInterval(timer);
  }, [hasAnimated, numericPart]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

export default CountUp;
