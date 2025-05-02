import React, { useEffect, useRef, useState } from 'react';

const withFadeIn = (WrappedComponent: React.ComponentType<any>, duration = '100ms', shouldFadeIn = true) => {
  return (props: React.ComponentProps<typeof WrappedComponent>) => {
    const [isVisible, setIsVisible] = useState(shouldFadeIn ? false : true);
    const ref = useRef(null);

    useEffect(() => {
      if (!shouldFadeIn) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 } // Trigger when 10% of element is visible
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, [shouldFadeIn]);

    // Convert duration string to Tailwind compatible value
    const tailwindDuration = duration.includes('ms') 
      ? duration.replace('ms', '') 
      : String(parseFloat(duration) * 1000);

    return (
      <div
        ref={ref}
        className={`
          transition-opacity ease-in-out
          ${isVisible ? 'opacity-100' : 'opacity-0'}
        `}
        style={{ transitionDuration: `${tailwindDuration}ms` }}
      >
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default withFadeIn;