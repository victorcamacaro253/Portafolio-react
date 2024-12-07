import React, { useEffect, useRef, useState } from 'react';

const withFadeIn = (WrappedComponent, duration = '0.1s',shouldFadeIn = true) => {
    return (props) => {
      const [isVisible, setIsVisible] = useState(shouldFadeIn ? false : true);
      const ref = useRef(null);
  
      useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              observer.unobserve(entry.target); // Dejar de observar una vez que es visible
            }
          });
        });
  
        if (ref.current) {
          observer.observe(ref.current);
        }
  
        return () => {
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        };
      }, [shouldFadeIn]);
  
      return (
        <div
          ref={ref}
          className={`fade-in ${isVisible ? 'visible' : ''}`}
          style={{ transitionDuration: duration }} // Aplicar duración de la transición
        >
          <WrappedComponent {...props} />
        </div>
      );
    };
  };

export default withFadeIn;