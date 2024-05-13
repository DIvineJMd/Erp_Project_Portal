import React from 'react';
import { Chip, Typography } from '@mui/material';
import { LocalOffer as TagIcon } from '@mui/icons-material';

const PopularHashtags = ({ hashtags }) => {
  return (
    <div className="my-4 w-full">
      <Typography variant="h6" gutterBottom>
        Popular Hashtags
      </Typography>
      <div className="flex flex-wrap gap-2">
        {hashtags.map((tag, index) => (
          <Chip key={index} className=' bg-blue-500' icon={<TagIcon />} label={tag} clickable />
        ))}
      </div>
    </div>
  );
};

export default PopularHashtags;
