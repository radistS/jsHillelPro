import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Footer() {
  return (
      <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'white', p: 2, textAlign: 'center' }}>
        <Typography variant="body1">
          Email: stepurko.oletsandr@gmail.com | Phone: +380506945569, +421950387455
        </Typography>
      </Box>
  );
}

export default Footer;
