import React from 'react';
import { Stack, Typography, Button, Box } from '@mui/material';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos) {
    return 'Loading...';
  }

  return (
    <Box
      sx={{
        mt: { lg: '200px', xs: '20px' },
        p: '20px',
      }}
    >
      <Typography variant="h3" mb="33px">
        Watch <span style={{ textTransform: 'capitalize', fontWeight: 'bold', color: '#ff2625' }}>{name}</span> exercise videos
      </Typography>
      <Stack
        spacing={2}
        justifyContent="center"
        flexWrap={{ xs: 'wrap', lg: 'nowrap' }}
        sx={{
          flexDirection: { xs: 'column', lg: 'row' },
          gap: { lg: '20px', xs: '10px' },
        }}
      >
        {exerciseVideos?.slice(0, 3).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: 'none',
              width: { xs: '100%', lg: 'auto' },
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '300px',
                backgroundColor: '#f5f5f5',
                borderRadius: '10px',
                boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <img
                src={item.video.thumbnails[0].url}
                alt={item.video.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '10px',
                }}
              />
              <Box p="16px">
              </Box>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
