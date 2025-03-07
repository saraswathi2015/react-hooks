import React, { useState, useEffect } from "react";
function useInternetStatus() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    //handle online and offline events

    function setOnline() {
      setIsOnline(true);
    }
    function setOffline() {
      setIsOnline(false);
    }

    window.addEventListener("online", setOnline);
    window.addEventListener("offline", setOffline);

    return () => {
      window.removeEventListener("online", setOnline);
      window.removeEventListener("offline", setOffline);
    };
  }, []);

  return isOnline;
}

export default useInternetStatus;
