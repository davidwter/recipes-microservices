import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          My Recipe App
        </Typography>
        {/* Add additional navigation items or buttons here */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
