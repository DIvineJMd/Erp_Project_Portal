import React from 'react';
import { Avatar, Button, Card, CardContent, CardHeader, CardActions, IconButton, Typography } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';

function PostCard({ post }) {
  const handleLike = () => {
    // Handle like functionality
  };

  const handleComment = () => {
    // Handle comment functionality
  };

  const handleShare = () => {
    // Handle share functionality
  };

  return (
    <Card>
      <CardHeader
        avatar={<Avatar>{post.post_owner.charAt(0)}</Avatar>}
        title={post.post_owner}
        subheader={post.post_date}
      />
      <CardContent>
        <Typography variant="body1">{post.post_content}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="like" onClick={handleLike}>
          <ThumbUpIcon />
          <Typography variant="body2">{post.post_likes}</Typography>
        </IconButton>
        <IconButton aria-label="comment" onClick={handleComment}>
          <CommentIcon />
          <Typography variant="body2">{post.post_comments}</Typography>
        </IconButton>
        <Button
          aria-label="share"
          onClick={handleShare}
          startIcon={<ShareIcon />}
        >
          Share
        </Button>
      </CardActions>
    </Card>
  );
}

export default PostCard;
