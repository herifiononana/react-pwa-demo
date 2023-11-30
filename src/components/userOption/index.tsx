import * as React from "react";
import Popover from "@mui/material/Popover";
import { Box, Button, Divider, IconButton, styled } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SettingsIcon from "@mui/icons-material/Settings";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import GetAppIcon from "@mui/icons-material/GetApp";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuth } from "../../provider/AuthProvider";
import { useAppDispatch } from "../../store/store";
import { logoutUser } from "../../features/authSlice/authSlice";

const ActionButton = styled(Button)({
  border: 0,
  justifyContent: "start",
  width: "100%",
});

// todo: refactor code
export default function UserOption() {
  const { logedOut } = useAuth();
  const dispatch = useAppDispatch();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    logedOut();
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <IconButton onClick={handleClick}>
        <ArrowDropDownIcon />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <ActionButton
              variant="outlined"
              sx={{ border: 0 }}
              startIcon={<SettingsIcon />}
            >
              Setting
            </ActionButton>
            <ActionButton
              variant="outlined"
              sx={{ border: 0 }}
              startIcon={<ContactSupportIcon />}
            >
              Support
            </ActionButton>
            <ActionButton
              variant="outlined"
              sx={{ border: 0 }}
              startIcon={<GetAppIcon />}
            >
              Desktop app
            </ActionButton>
            <Divider sx={{ width: "100%" }} />
            <ActionButton
              variant="outlined"
              sx={{ border: 0 }}
              startIcon={<SyncAltIcon />}
            >
              Switch store
            </ActionButton>
            <ActionButton
              variant="outlined"
              sx={{ border: 0 }}
              startIcon={<LogoutIcon />}
              onClick={() => handleLogout()}
            >
              Logout
            </ActionButton>
          </Box>
        </Box>
      </Popover>
    </div>
  );
}
