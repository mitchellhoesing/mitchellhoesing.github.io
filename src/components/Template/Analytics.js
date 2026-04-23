import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

const { NODE_ENV, REACT_APP_GA_TRACKING_ID } = process.env;

const analyticsEnabled = NODE_ENV === 'production' && !!REACT_APP_GA_TRACKING_ID;

if (analyticsEnabled) {
  ReactGA.initialize(REACT_APP_GA_TRACKING_ID);
}

const Analytics = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (analyticsEnabled) {
      ReactGA.set({
        page: pathname,
      });
      ReactGA.pageview(pathname);
    }
  }, [pathname]);

  return null;
};

export default Analytics;
