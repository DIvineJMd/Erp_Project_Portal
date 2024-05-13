import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';

function Post() {
  const [content, setContent] = useState('');
  const [photo, setPhoto] = useState(null);
  const [video, setVideo] = useState(null);

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handlePhotoChange = (event) => {
    setPhoto(event.target.files[0]);
  };

  const handleVideoChange = (event) => {
    setVideo(event.target.files[0]);
  };

  const handleSubmit = () => {
    // Here you can handle the submission of the post with content, photo, and video
    console.log('Content:', content);
    console.log('Photo:', photo);
    console.log('Video:', video);
    // Reset the state after submission
    setContent('');
    setPhoto(null);
    setVideo(null);
  };

  return (
    <div className="w-full mt-12 max-w-md mx-auto space-y-4">
      <TextField
        multiline
        fullWidth
        value={content}
        onChange={handleContentChange}
        label="Write your post"
        variant="outlined"
        rows={4}
        className=" bg-gray-600 text-white"
        InputProps={{
          endAdornment: (
            <div className="flex">
              <label htmlFor="photo-input" className="cursor-pointer">
                <Button
                  variant="text"
                  component="span"
                  startIcon={<AddPhotoAlternateIcon />}
                />
              </label>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                id="photo-input"
                onChange={handlePhotoChange}
              />
              <label htmlFor="video-input" className="cursor-pointer">
                <Button
                  variant="text"
                  component="span"
                  startIcon={<VideoLibraryIcon />}
                />
              </label>
              <input
                type="file"
                accept="video/*"
                className="hidden"
                id="video-input"
                onChange={handleVideoChange}
              />
            </div>
          ),
        }}
      />
      <Button onClick={handleSubmit} variant="contained" color="primary">
        Post
      </Button>
    </div>
  );
}

export default Post;
