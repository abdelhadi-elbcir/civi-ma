import React from "react";
import { useEffect, useState } from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import "../Styles/DetailsFillingSideBar.css";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import StarsRoundedIcon from "@mui/icons-material/StarsRounded";
import WorkHistoryRoundedIcon from "@mui/icons-material/WorkHistoryRounded";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box } from "@mui/system";

const ITEM_HEIGHT = 48;

const DetailFillingSidebar = (props) => {
  const getWindowSize = () => {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div>
      {windowSize.innerWidth > 850 ? (
        <Box
          sx={{
            width: "100%",
            maxWidth: 360,
            boxShadow: "0px 0px 4px 0px rgb(228, 228, 228)",
            height: "fit-content",
          }}
        >
          <List disablePadding>
            <ListItem disablePadding>
              <ListItemButton
                component="a"
                sx={
                  props.tab === 0
                    ? { borderLeft: "3px solid #007456" }
                    : null
                }
              >
                <AccountCircleOutlinedIcon
                  color={props.tab === 0 ? "#007456" : "disabled"}
                />
                <ListItemText
                  className="IcoSpace"
                  primary="Informations personnelles"
                  sx={
                    props.tab === 0
                      ? { color: "#007456", paddingLeft: "8px" }
                      : null
                  }
                />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton
                component="a"
                sx={
                  props.tab === 1
                    ? { borderLeft: "3px solid #007456" }
                    : null
                }
              >
                <WorkHistoryRoundedIcon
                  color={props.tab === 1 ? "#007456" : "disabled"}
                />
                <ListItemText
                  className="IcoSpace"
                  primary="L'expérience professionnelle"
                  sx={
                    props.tab === 1
                      ? { color: "#007456", paddingLeft: "8px" }
                      : null
                  }
                />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton
                component="a"
                sx={
                  props.tab === 2
                    ? { borderLeft: "3px solid #007456" }
                    : null
                }
              >
                <SchoolRoundedIcon
                  color={props.tab === 2 ? "#007456" : "disabled"}
                />
                <ListItemText
                  className="IcoSpace"
                  primary="Éducation"
                  sx={
                    props.tab === 2
                      ? { color: "#007456", paddingLeft: "8px" }
                      : null
                  }
                />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton
                component="a"
                sx={
                  props.tab === 3
                    ? { borderLeft: "3px solid #007456" }
                    : null
                }
              >
                <StarsRoundedIcon
                  color={props.tab === 3 ? "#007456" : "disabled"}
                />
                <ListItemText
                  className="IcoSpace"
                  primary="Compétences"
                  sx={
                    props.tab === 3
                      ? { color: "#007456", paddingLeft: "8px" }
                      : null
                  }
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      ) : (
        <div>
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? "long-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            MenuListProps={{
              "aria-labelledby": "long-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: "30ch",
              },
            }}
          >
            <MenuItem
              sx={props.tab === 0 ? { color: "#007456" } : null}
              onClick={() => {
                handleClose();
              }}
            >
              <AccountCircleOutlinedIcon
                color={props.tab === 0 ? "#007456" : "disabled"}
              />
              <ListItemText
                className="IcoSpace"
                primary="Informations personnelles"
                sx={
                  props.tab === 0
                    ? { color: "#007456", paddingLeft: "8px" }
                    : null
                }
              />
            </MenuItem>
            <Divider />
            <MenuItem
              sx={props.tab === 1 ? { color: "#007456" } : null}
              onClick={() => {
                handleClose();
              }}
            >
              <WorkHistoryRoundedIcon
                color={props.tab === 1 ? "#007456" : "disabled"}
              />
              <ListItemText
                className="IcoSpace"
                primary="L'expérience professionnelle"
                sx={
                  props.tab === 1
                    ? { color: "#007456", paddingLeft: "8px" }
                    : null
                }
              />
            </MenuItem>
            <Divider />
            <MenuItem
              sx={props.tab === 2 ? { color: "#007456" } : null}
              onClick={() => {
                handleClose();
              }}
            >
              <SchoolRoundedIcon
                color={props.tab === 2 ? "#007456" : "disabled"}
              />
              <ListItemText
                className="IcoSpace"
                primary="Éducation"
                sx={
                  props.tab === 2
                    ? { color: "#007456", paddingLeft: "8px" }
                    : null
                }
              />
            </MenuItem>
            <Divider />
            <MenuItem
              sx={props.tab === 3 ? { color: "#007456" } : null}
              onClick={() => {
                handleClose();
              }}
            >
              <StarsRoundedIcon color={props.tab === 3 ? "#007456" : "disabled"} />
              <ListItemText
                className="IcoSpace"
                primary="Compétences "
                sx={
                  props.tab === 3
                    ? { color: "#007456", paddingLeft: "8px" }
                    : null
                }
              />
            </MenuItem>
          </Menu>
        </div>
      )}
    </div>
  );
};

export default DetailFillingSidebar;
