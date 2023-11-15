import React, { useState } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import VoicemailIcon from "@mui/icons-material/Voicemail";

interface NavbarNativeProps {
  switchToHome: () => void;
  switchToMemo: () => void;
  switchToMore: () => void;
}

function NavbarNative({
  switchToHome,
  switchToMemo,
  switchToMore,
}: NavbarNativeProps) {
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction
        label="Accueil"
        icon={<HomeOutlinedIcon />}
        onClick={switchToHome}
      />
      <BottomNavigationAction
        label="Memo vocal"
        icon={<VoicemailIcon />}
        onClick={switchToMemo}
      />
      <BottomNavigationAction
        label="Plus"
        icon={<MoreHorizOutlinedIcon />}
        onClick={switchToMore}
      />
    </BottomNavigation>
  );
}

export default NavbarNative;
