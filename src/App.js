import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import {AppBar, Box, Toolbar, IconButton, Typography, InputBase, Button, Container, Stack, Grid} from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { CenterFocusStrong, Transform } from '@mui/icons-material';

import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import { minWidth } from '@mui/system';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function myApp() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Toppa MLaaS
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Button color="inherit" sx={{textTransform: "none"}}> Model </Button>
          <Button color="inherit" sx={{textTransform: "none"}}> Dataset </Button>
          <Button color="inherit" sx={{textTransform: "none"}}> Blogs </Button>
          <Button color="inherit" sx={{textTransform: "none"}}> Documentation </Button>
          <Button color="inherit" sx={{textTransform: "none"}}> MLCoins </Button>
          <Button color="inherit" sx={{textTransform: "none"}}> Login </Button>
          <Button color="inherit" sx={{textTransform: "none"}}> Sign Up </Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
        <Container maxWidth="sm" align="center">
          <CurrencyBitcoinIcon style={{ height: '140px', width: '140px' }} />
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
            fontWeight='bold'
            sx={{ alignContent: 'center', flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >

            Blockchain-based AI Community
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            A Web3 community that allows Al developers to monetize their skills/models/blogs and for individuals to learn about
            Al and monetize their own data sets.
          </Typography>
          <Grid
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Button variant="contained">Enter</Button>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
