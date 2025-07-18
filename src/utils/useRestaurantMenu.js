import { useState, useEffect } from "react";
import { MENU_URL } from "./constants";

const useRestrauntMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_URL + resId);
    const jsonData = await data.json();
    console.log(jsonData);
    setResInfo(jsonData.data);
  };

  return resInfo;
};

export default useRestrauntMenu;
