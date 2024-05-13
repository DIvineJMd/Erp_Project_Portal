import React, { useState } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Typography, Button } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';

const GroupList = ({ groups }) => {
  const [showAll, setShowAll] = useState(false);

  const displayGroups = showAll ? groups : groups.slice(0, 3);

  const toggleShowAll = () => {
    setShowAll(prevShowAll => !prevShowAll);
  };

  return (
    <div className=' text-black flex flex-col justify-center text-center items-center border-2 p-6 w-full'>
      <Typography variant="h6" gutterBottom>
        MY GROUPS
      </Typography>
      
      <List>
        {displayGroups.map(group => (
          <ListItem key={group.id} button>
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText primary={group.name} />
          </ListItem>
        ))}
      </List>
      <Button onClick={toggleShowAll} variant="outlined" size="small" color="primary">
        {showAll ? 'Show Less' : 'Show All'}
      </Button>
    </div>
  );
};

export default GroupList;
