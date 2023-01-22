import * as React from "react";
import MenuUnstyled from "@mui/base/MenuUnstyled";
import MenuItemUnstyled, {
  menuItemUnstyledClasses
} from "@mui/base/MenuItemUnstyled";
import PopperUnstyled from "@mui/base/PopperUnstyled";
import { styled } from "@mui/system";
import PropTypes from "prop-types";

const blue = {
  100: "#DAECFF",
  200: "#99CCF3",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75"
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f"
};

const StyledMenu = styled(MenuUnstyled)(
  ({ theme }) => `

  

`
);

const StyledListbox = styled("ul")(
  ({ theme }) => `
  font-family: Roboto, sans-serif;
  font-size: 0.875rem;
  display:grid;
  grid-template-columns:repeat(2,1fr);
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 200px;
  font-weight:500;
  overflow: auto;
  outline: 0px;

  margin-top:0;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
//  box-shadow: 0px 4px 30px ${
    theme.palette.mode === "dark" ? grey[900] : grey[200]
  };
  `
);

const StyledMenuItem = styled(MenuItemUnstyled)(
  ({ theme }) => `
  list-style: none;
  padding: 24px;
  border-radius: 6px;
  cursor: pointer;
  user-select: none;
  grid-column:span 1;
  
  &:last-of-type {
    border-bottom: none;
  }

  &.${menuItemUnstyledClasses.focusVisible} {
    outline: 3px solid ${theme.palette.mode === "dark" ? blue[600] : blue[200]};
    background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  }

  &.${menuItemUnstyledClasses.disabled} {
    color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
  }

  &:hover:not(.${menuItemUnstyledClasses.disabled}) {
    background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  }
  `
);

const TriggerButton = styled("button")(
  ({ theme }) => `
  font-family: Roboto, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
//   min-height: calc(1.5em + 22px);
  height:100%;
  padding:  16px;
  outline:none;
  line-height: 1.5;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 0px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  cursor:pointer;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    background: ${theme.palette.mode === "dark" ? grey[800] : "#f5f5f5"};
    border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
  }

  &:focus {
    border-color: ${blue[400]};
    outline: 3px solid ${theme.palette.mode === "dark" ? blue[500] : blue[200]};
  }
  `
);

const Popper = styled(PopperUnstyled)`
  z-index: 0;
  width: 100%;
  margin-top: 0;
`;

const MenuSectionRoot = styled("li")`
  list-style: none;

  border-right: 1px solid #dadbdc;
  & > ul {
    padding-left: 1em;
  }
  &:last-of-type {
    border-right: none;
  }
`;
const Divider = styled("div")`
  width: 10px;
  height: 100%;
  border-left: 1px solid black;
`;
const MenuSectionLabel = styled("span")`
  display: block;
  padding: 10px 0 5px 10px;
  font-size: 0.75em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  color: ${grey[600]};
`;
function MenuSection({ children, label }) {
  return (
    <MenuSectionRoot>
      <MenuSectionLabel>{label}</MenuSectionLabel>
      <ul>{children}</ul>
    </MenuSectionRoot>
  );
}
// I have no idea what this does.
MenuSection.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string.isRequired
};
export default function MenuButton({name}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isOpen = Boolean(anchorEl);
  const buttonRef = React.useRef(null);
  const menuActions = React.useRef(null);
  const preventReopen = React.useRef(false);

  const handleButtonClick = (event) => {
    if (preventReopen.current) {
      event.preventDefault();
      preventReopen.current = false;
      return;
    }

    if (isOpen) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleButtonMouseDown = () => {
    if (isOpen) {
      // Prevents the menu from reopening right after closing
      // when clicking the button.
      preventReopen.current = true;
    }
  };

  const handleButtonKeyDown = (event) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      setAnchorEl(event.currentTarget);
      if (event.key === "ArrowUp") {
        menuActions.current?.highlightLastItem();
      }
    }
  };

  const close = () => {
    setAnchorEl(null);
    buttonRef.current.focus();
  };

  const createHandleMenuClick = (menuItem) => {
    return () => {
      console.log(`Clicked on ${menuItem}`);
      close();
    };
  };

  return (
    <div>
      <TriggerButton
        type="button"
        onClick={handleButtonClick}
        onKeyDown={handleButtonKeyDown}
        onMouseDown={handleButtonMouseDown}
        ref={buttonRef}
        aria-controls={isOpen ? "simple-menu" : undefined}
        aria-expanded={isOpen || undefined}
        aria-haspopup="menu"
      >
        {name}
      </TriggerButton>

      <StyledMenu
        actions={menuActions}
        open={isOpen}
        onClose={close}
        anchorEl={anchorEl}
        slots={{ root: Popper, listbox: StyledListbox }}
        slotProps={{ listbox: { id: "simple-menu" } }}
      >
        <MenuSection label="Navigation" sx={{ display: "flex" }}>
          <StyledMenuItem onClick={createHandleMenuClick("Profile")}>
            Profile
          </StyledMenuItem>
          <StyledMenuItem onClick={createHandleMenuClick("My account")}>
            My account
          </StyledMenuItem>
          <StyledMenuItem onClick={createHandleMenuClick("Log out")}>
            Log out
          </StyledMenuItem>

          {/* For demo */}
          <StyledMenuItem onClick={createHandleMenuClick("Log out")}>
            Fuck Off
          </StyledMenuItem>
        </MenuSection>
        {/* <Divider></Divider> */}
        <MenuSection label="Navigation">
          <StyledMenuItem onClick={createHandleMenuClick("Profile")}>
            Profile
          </StyledMenuItem>
          <StyledMenuItem onClick={createHandleMenuClick("My account")}>
            My account
          </StyledMenuItem>
          <StyledMenuItem onClick={createHandleMenuClick("Log out")}>
            Log out
          </StyledMenuItem>

          {/* For demo */}
          <StyledMenuItem onClick={createHandleMenuClick("Log out")}>
            Fuck Off
          </StyledMenuItem>
        </MenuSection>
      </StyledMenu>
    </div>
  );
}
