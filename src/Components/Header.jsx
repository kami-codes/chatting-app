import React from "react";
import { styled } from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';

function Header() {
  return (
    <div>
      <TopBar>
        <LeftBar>
          <IconButtonContainer>
            <MenuIcon />
          </IconButtonContainer>
        </LeftBar>
        <Middle>
        <SearchRoundedIcon />
        <input type="text" placeholder="Search someone" />
        </Middle>
        <RightBar>
            <HelpOutlineRoundedIcon />
        </RightBar>
      </TopBar>
    </div>
  );
}

export default Header;

const TopBar = styled.div`
  height: 70px;
  background-color: purple;
  color: white;
  display: flex;
  padding: 10px 20px;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
`;
const LeftBar = styled.div`


`;

const IconButtonContainer = styled(IconButton)`
    color: white !important;

    > .MuiSvgIcon-root {
        font-size: 40px;
    }
`

const Middle = styled.div`
border: 1px solid lightgray;
padding: 5px 10px;
border-radius: 5px;
display: flex;
align-items: center;
width: 30%;

> input{
    width: 100%;
    padding: 5px;
    background-color: transparent;
    color: white;
    border: none;
    outline: none;
}

>input::placeholder{
    color: rgba(255,255,255,0.7);
}

`;

const RightBar = styled.div``;
