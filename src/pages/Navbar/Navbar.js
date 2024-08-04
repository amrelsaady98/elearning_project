import React from 'react';
import { Container, AppBar, Toolbar, Typography, Button} from '@mui/material';
import { Link } from 'react-router-dom';
import DefaultNavbar from "../../examples/Navbars/DefaultNavbar";
import routes from "../../routes";

const Navbar = () => {
 
  return (
      <DefaultNavbar
          brand={'Skillify'}
          routes={routes}
          sticky
      />
    // <Container
    //
    // >
    //   <AppBar position="static" color=''>
    //     <Toolbar>
    //       <Typography variant="h6" component="div" sx={{ flexGrow: 1,
    //            textShadow: '4px 2px 5px rgba(6,0,0,0.3), 1px 6px 2px rgba(6,5,0,0.2)' }}>
    //         Skillify
    //       </Typography>
    //       <nav>
    //         <Link to="/" style={{ marginRight: 20 }}>
    //             Home
    //         </Link>
    //         <Link to="/about" style={{ marginRight: 20 }}>
    //             About
    //         </Link>
    //         <Link to="/contact" style={{ marginRight: 20 }}>
    //             Contact
    //         </Link>
    //       </nav>
    //       <Button variant="text" color="secondary" style={{ marginLeft: 20 }} component={Link} to="/Login">
    //         Login
    //       </Button>
    //       <Button variant="text" color="secondary" style={{ marginLeft: 20 }} component={Link} to="/Register">
    //         Register
    //       </Button>
    //     </Toolbar>
    //   </AppBar>
    // </Container>
  );
};

export default Navbar;