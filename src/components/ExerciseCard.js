import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardActionArea, CardMedia, Stack, Button, Typography } from '@mui/material';

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
        <Stack spacing={2}>
            <Card
                sx={{
                    borderTop: '4px solid red',
                    borderBottom: '2px solid red',
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
                }}
            >
                <CardActionArea component={Link} to={`/exercise/${exercise.id}`}>
                    <CardMedia component="img" src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
                </CardActionArea>
                <Button
                    sx={{
                        color: '#000',
                        backgroundColor: getTargetColor(exercise.bodyPart),
                        fontSize: '16px',
                        borderRadius: '20px',
                        textTransform: 'capitalize',
                        paddingLeft: '16px',
                        paddingRight: '16px',
                        mb: '7px',
                        mt: '7px',
                        marginLeft: '10px',
                        marginRight: '10px',
                    }}
                >
                    {exercise.bodyPart}
                </Button>
                <Button
                    sx={{
                        color: '#000',
                        backgroundColor: getTargetColor(exercise.target),
                        fontSize: '16px',
                        borderRadius: '20px',
                        textTransform: 'capitalize',
                        paddingLeft: '16px',
                        paddingRight: '16px',
                        mb: '7px',
                        mt: '7px',
                    }}
                >
                    {exercise.target}
                </Button>

            </Card>
            <Typography textTransform="capitalize" fontWeight="bold" fontSize="20px" >
                {exercise.name}
            </Typography>
        </Stack>
    );
};

export default ExerciseCard;
