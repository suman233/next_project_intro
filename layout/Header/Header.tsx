import React from 'react'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { Container } from '@mui/material';
import assest from '@/json/assest';

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

export default function Header(props: Props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', color: 'blue' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Stablo
            </Typography>
            <Divider />
            <List>
                {/* <ListItem>
                    <Link href={'/'}>

                        <Button sx={{ color: 'black' }}>
                            Home
                        </Button>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link href={'/about'}>

                        <Button sx={{ color: 'black' }}>
                            About
                        </Button>
                    </Link>
                </ListItem> */}
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <Link href={`${item}`==='Home'? `/`:`/${item.toLowerCase()}`}>
                            <ListItemButton sx={{ textAlign: 'center' }}>
                                <ListItemText primary={item} />
                            </ListItemButton>
                        </Link>
                    </ListItem>

                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Container maxWidth="sm">
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar component="nav" sx={{ backgroundColor: 'white', boxShadow: 'none' }}>
                    <Toolbar sx={{ margin: 'auto' }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <Link href={'/'}>

                                <Button sx={{
                                    color: '#000', mr: 3, "&:hover": {
                                        color: '#02E6EE'
                                    }
                                }}>
                                    Home
                                </Button>
                            </Link>


                        </Box>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ display: { xs: 'none', sm: 'block', color: 'black', textAlign: 'center' } }}
                        >
                            <Link href="/">
                                <img src={assest.logo} alt="" />
                            </Link>
                        </Typography>
                        <Link href={'/about'}>

                            <Button sx={{
                                color: '#000', ml: 3, "&:hover": {
                                    color: '#02E6EE'
                                }
                            }}>
                                About
                            </Button>
                        </Link>
                    </Toolbar>
                </AppBar>
                <nav>
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none', color: 'blue' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </nav>
                <Box component="main" sx={{ p: 3 }}>
                    <Toolbar />
                    <Typography>

                    </Typography>
                </Box>
            </Box>
        </Container>
    );
}