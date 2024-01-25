import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 3, mt: 'auto' }}>
      <Typography variant="body2" color="text.secondary" align="center">
        © 2024 Recipe Recommender
      </Typography>
    </Box>
  );
};

export default Footer;
