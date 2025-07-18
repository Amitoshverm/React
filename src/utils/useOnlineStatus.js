import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  // window se check krna hai ki offline hai ya online
  // jab hum check kr rahe honge toh ek bar hi window ko call kre uske liye useEffect() use krna hai
  // fir apne status ko set krenege us hisab se

  const [onlineStatus, setOnlineStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);
  return onlineStatus;
};
export default useOnlineStatus;
