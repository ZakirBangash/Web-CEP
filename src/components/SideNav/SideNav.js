import React,{useState,useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import './SideNav.css';
import {Link} from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux';
import {selectCount, selectUser, logout } from '../../features/counter/eCommerceSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { getOnlyProduct } from '../../app/actions/productActions';


const instance = axios.create({
  baseURL : "http://127.0.0.1:8000"
});

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
      display: 'none',
    },
  },
  drawerHeader: {
             display: "flex",
             alignItems: "center",
             padding: theme.spacing(0, 1),
             // necessary for content to be below app bar
             ...theme.mixins.toolbar,
             justifyContent: "flex-end",
        },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
  
  },
}));
toast.configure();
function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const basket = useSelector(selectCount);
  const userInfo = useSelector(selectUser);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [value, setvalue] = useState('');


useEffect(() => {
}, [userInfo.name])

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const logOut = () => {
    console.log("This is Zakir")
    dispatch(logout());
    toast.success("You logout successfully", {position: toast.POSITION.BOTTOM_LEFT});
  }

  const searching = () => {
    dispatch(getOnlyProduct({value}))
    navigate('/search');
  }

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <div className="left-arrow">
            <h1>BAZAR</h1>
                     <IconButton  onClick={handleDrawerToggle}>
                             <ChevronLeftIcon />
                     </IconButton>
                 </div>

      <Divider />
      <List>
       
          <ListItem button>
            <ListItemText>Future Work</ListItemText>
          </ListItem>
      
      </List>
      <Divider />
      <List>
          <ListItem button >
            <ListItemText>Future Work</ListItemText>
          </ListItem>
          <ListItem button >
            <ListItemText>Future Work</ListItemText>
          </ListItem>
          <ListItem button >
            <ListItemText>Future Work</ListItemText>
          </ListItem>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className="header">

        <div className="headerStart">

                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerToggle}
                        edge="start"
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div className="logoText">
                    <Link to="/">
                        <h1 className="logo-h1">BAZAAR</h1>
                    </Link>
                    </div>
                    </div>

                    <div className="header__search">
                         <input type="text" value={value} onChange={(e)=> setvalue(e.target.value)} className="header__input" />
                         <SearchIcon onClick={searching} className="header__searchIcon" />
                     </div>

                  
                    {userInfo.name ? (<div onClick={logOut} className="header__option">
                          <span className="header__optionLineOne">LogOut</span>
                     </div>) : (
                        <Link to="/signin">
                        <div className="header__option">
                             <span className="header__optionLineOne">Hello</span>
                             <span className="header__optionLineTwo">SignUp</span>
                            
                        </div>
                        </Link>
                     )}

                     <Link to="/checkout">
                     <div className="header__optionBasket">
                         <ShoppingBasketIcon />
                         <span>{basket.length}</span>
                     </div>
                    </Link>
        
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>


    </div>
  );
}

export default ResponsiveDrawer;
