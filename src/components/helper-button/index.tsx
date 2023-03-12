import { useTheme } from "next-themes";
import React, { useState } from "react";
import SelectList from "../select-list";
import SwitchButton from "../switch-button";

const HelperButton = () => {
  const languages = [
    { id: "en", name: "en", unavailable: false },
    { id: "id", name: "id", unavailable: false },
  ];

  const [selectedLanguange, setSelectedLanguange] = useState(languages[0]);
  const {systemTheme , theme, setTheme} = useTheme();
  const currentTheme = React.useMemo(() => {
    return theme === "system" ? systemTheme : theme ;
  }, [theme, systemTheme])   

  const [darkMode, setDarkMode] = useState<boolean>(currentTheme === 'dark' ? true : false)
  
  const handleChangeTheme = React.useCallback((val: boolean) => {
    setDarkMode(val)
    setTheme(val ? 'dark' : 'light')
  }, [theme, setTheme])

  return (
    <>
      <SelectList
        lists={languages}
        selected={selectedLanguange}
        onChange={(list) => {
          setSelectedLanguange(list);
        }}
      />
      <SwitchButton checked={darkMode}  onChange={handleChangeTheme} />
    </>
  );
};

export default HelperButton;
