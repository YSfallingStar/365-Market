import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab'
import { Link } from 'react-router-dom';
import logo from '../../asset/images/headerLogo.png';

const pages = [
  { id: 0, title: '홈', url: '/'},
  { id: 1, title: '커뮤니티', url: '/community'},
  { id: 2, title: '채팅', url: '/chat'},
  { id: 3, title: '마이페이지', url: '/myPage'},
];

const LinkTab = (props) => {
  return (
    <Link to={props.url}>
      <Tab
        {...props}
      />
    </Link>
  );
}

const Header = ({topMenu}) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [selectedTab, setSelectedTab] = useState(0);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleTabChange = (event, newTab) => {
    setSelectedTab(newTab);
  }

  return (
    <AppBar position="static" color="transparent">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box 
            onClick={() => window.location.href='/'}
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, height: '50px', cursor: 'pointer'}}
          >
            <img src={logo} alt="logo"/>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                  <Link to={page.url}>
                    <Typography textAlign="center">{page.title}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* 반응형: md이상 */}
          <Box 
            onClick={() => window.location.href='/'}
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, height: '50px'}}
          >
            <img src={logo} alt="logo" />
          </Box>
          <Tabs 
            value={selectedTab}
            onChange={handleTabChange}
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}
          >
            {pages.map((page) => (
              <LinkTab key={page.id} label={page.title} url={page.url} />
            ))}
          </Tabs>
          {/* 오른쪽 메뉴 */}
          <Box sx={{ flexGrow: 0 }}>
            {topMenu()}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;