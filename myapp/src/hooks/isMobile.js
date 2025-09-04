import { useState, useEffect } from 'react';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const isSmallScreen = window.innerWidth <= 768;
      setIsMobile(isSmallScreen);
    };

    const checkUserAgent = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const mobileUserAgents = [
        /android/, /webos/, /iphone/, /ipad/, /ipod/, /blackberry/, /windows phone/
      ];
      
      return mobileUserAgents.some(agent => userAgent.match(agent));
    };

    checkScreenSize();
    
    setIsMobile(checkScreenSize() || checkUserAgent());

    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return isMobile;
};

export default useIsMobile;