import * as React from 'react';
import PropTypes from 'prop-types';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, useRouteMatch, Switch, Route } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Review from '../Review/Review';
import NotFound from '../../NotFound/NotFound';
import AdminRoute from '../../Login/Login/AdminRoute/AdminRoute';
import DashboardHome from '../DashboardHome/DashboardHome';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import AddDrone from '../AddDrone/AddDrone';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageDrones from '../ManageDrones/ManageDrones';
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment/Payment';
import EmptyPay from '../Payment/EmptyPay/EmptyPay';
import {
  Button,
  AppBar,
  CssBaseline,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
  Toolbar,
} from '@mui/material';

const drawerWidth = 180;

function Dashboard(props) {
  let { path, url } = useRouteMatch();
  const { user, logout, admin } = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <NavLink style={{ textDecoration: 'none', color: 'black' }} to="/">
          <ListItem button>
            <ListItemText primary="Home" />
          </ListItem>
        </NavLink>
        <NavLink
          style={{ textDecoration: 'none', color: 'black' }}
          to="/explore"
        >
          <ListItem button>
            <ListItemText primary="Explore" />
          </ListItem>
        </NavLink>
      </List>
      <Divider />
      {admin ? (
        <List>
          <NavLink
            style={{ textDecoration: 'none', color: 'black' }}
            to={`${url}/manage-all-orders`}
          >
            <ListItem button>
              <ListItemText primary="Manage All Orders" />
            </ListItem>
          </NavLink>
          <NavLink
            style={{ textDecoration: 'none', color: 'black' }}
            to={`${url}/add-drone`}
          >
            <ListItem button>
              <ListItemText primary="Add a New Drone" />
            </ListItem>
          </NavLink>
          <NavLink
            style={{ textDecoration: 'none', color: 'black' }}
            to={`${url}/make-admin`}
          >
            <ListItem button>
              <ListItemText primary="Make Admin" />
            </ListItem>
          </NavLink>
          <NavLink
            style={{ textDecoration: 'none', color: 'black' }}
            to={`${url}/manage-drones`}
          >
            <ListItem button>
              <ListItemText primary="Manage Drones" />
            </ListItem>
          </NavLink>
        </List>
      ) : (
        <List>
          <NavLink
            style={{ textDecoration: 'none', color: 'black' }}
            to={`${url}/my-orders`}
          >
            <ListItem button>
              <ListItemText primary="My Orders" />
            </ListItem>
          </NavLink>

          <NavLink
            style={{ textDecoration: 'none', color: 'black' }}
            to={`${url}/review`}
          >
            <ListItem button>
              <ListItemText primary="Review" />
            </ListItem>
          </NavLink>
          <NavLink
            style={{ textDecoration: 'none', color: 'black' }}
            to={`${url}/pay`}
          >
            <ListItem button>
              <ListItemText primary="Pay" />
            </ListItem>
          </NavLink>
        </List>
      )}
      <Divider />
      <List>
        <ListItem button sx={{ justifyContent: 'center' }}>
          <Button variant="contained" onClick={logout}>
            Logout
          </Button>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: 'flex',
              jjustifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              flexGrow: 1,
            }}
          >
            <Typography sx={{ mx: 2 }} variant="h6" noWrap component="div">
              Dashboard
            </Typography>

            <Typography variant="body2" noWrap component="div">
              Hello, {user.displayName}
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <AdminRoute path={`${path}/manage-all-orders`}>
            <ManageAllOrders />
          </AdminRoute>
          <AdminRoute path={`${path}/add-drone`}>
            <AddDrone />
          </AdminRoute>
          <AdminRoute path={`${path}/make-admin`}>
            <MakeAdmin />
          </AdminRoute>
          <AdminRoute path={`${path}/manage-drones`}>
            <ManageDrones />
          </AdminRoute>
          <Route exact path={`${path}/`}>
            <DashboardHome />
          </Route>
          <Route exact path={`${path}/pay`}>
            <EmptyPay />
          </Route>
          <Route path={`${path}/pay/:payId`}>
            <Payment />
          </Route>
          <Route path={`${path}/my-orders`}>
            <MyOrders />
          </Route>

          <Route path={`${path}/review`}>
            <Review />
          </Route>
          <Route path={`${path}/*`}>
            <NotFound />
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
