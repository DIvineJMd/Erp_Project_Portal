import React from 'react';
import { Button, Typography } from '@mui/material';
import Image from 'next/image';

const ProfileSection = ({ userName }) => {

    function onMakePost(){

    }
  return (
    <div className="my-4 text-black border-4 p-8 border-solid flex flex-col justify-center items-center">
        <Image src={"/image2.jpeg"} width={100} height={100} className=' rounded-full'>

        </Image>
      <Typography variant="h5" gutterBottom>
        {userName}'s Profile
      </Typography>
      <Button variant="contained" color="primary" onClick={onMakePost}>
        Make a Post
      </Button>
    </div>
  );
};

export default ProfileSection;
