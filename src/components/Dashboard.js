import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Dashboard() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to Serraville Logistics Admin Dashboard
      </Typography>
      <Typography>
        Use the sidebar to navigate between dashboard sections.
      </Typography>
    </Box>
  );
}

export default Dashboard;
