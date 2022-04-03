import { useEffect} from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";

const usePageTracking = () => {
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    ReactGA.initialize('UA-183493843-1');
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
};

export default usePageTracking;
