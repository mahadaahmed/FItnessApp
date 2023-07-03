import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => {
  const getTargetColor = (target) => {
    switch (target.trim()) {
      case 'quads':
        return '#FFA9A9'; // Red
      case 'spine':
        return '#FCC757'; // Yellow
      case 'glutes':
        return '#88D8B0'; // Green
      case 'hamstrings':
        return '#AB84E1'; // Purple
      case 'back':
        return '#6EC1E4'; // Blue
      case 'lats':
        return '#FFD87F'; // Orange
      case 'biceps':
        return '#E679BD'; // Pink
      case 'triceps':
        return '#ACDBA8'; // Light Green
      case 'pectorals':
        return '#FBB796'; // Peach
      case 'abs':
        return '#9EC8FF'; // Light Blue
      case 'traps':
        return '#D4A4FF'; // Lavender
      case 'upper legs':
        return '#A46161'; // Brown
      case 'shoulders':
        return '#C1C1C1'; // Gray
      case 'delts':
        return '#FFEDAA'; // Light Yellow
      case 'chest':
        return '#914A94'; // Light Red
      case 'upper back':
        return '#9FD3E6'; // Light Blue
      case 'upper arms':
        return '#E6A3A3'; // Light Pink
      case 'adductors':
        return '#FFCECE'; // Light Coral
      case 'waist':
        return '#FFD8D8'; // Light Pinkish
      case 'cardio':
        return '#0261CE'; // Light Coral
      case 'cardiovascular system':
        return '#3923A6'; // Light Pinkish
      case 'neck':
        return '#9385DA'; // Light Coral
      case 'levator scapulae':
        return '#52497F'; // Light Pinkish
      case 'lower legs':
        return '#91272D'; // Light Coral
      case 'calves':
        return '#21932F'; // Light Pinkish
      default:
        console.log(target);
        return '#000'; // Default color
    }
  };

  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            ml: '21px',
            color: '#fff',
            background: getTargetColor(exercise.bodyPart), // Use getTargetColor for background color
            fontSize: '14px',
            borderRadius: '20px',
            textTransform: 'capitalize',
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: '21px',
            color: '#fff',
            background: getTargetColor(exercise.target), // Use getTargetColor for background color
            fontSize: '14px',
            borderRadius: '20px',
            textTransform: 'capitalize',
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        ml="21px"
        color="#000"
        fontWeight="bold"
        sx={{ fontSize: { lg: '24px', xs: '20px' } }}
        mt="11px"
        pb="10px"
        textTransform="capitalize"
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
