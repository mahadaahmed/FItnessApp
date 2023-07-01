import React, {useEffect, useState} from 'react'
import { Pagination, Box, Stack, Typography } from '@mui/material'
import ExerciseCard from './ExerciseCard'
import { fetchData, ExercisesOptions } from '../utils/fetchData'

const Exercises = ({exercises, setExercises, bodyPart}) => {

  const [currentPage, setCurrentPage] = React.useState(1)
  const exercisesPerPage = 9;
  const startIndex = (currentPage - 1) * exercisesPerPage;
  const currentExercises = [];

  for (let i = startIndex; i < startIndex + exercisesPerPage && i < exercises.length; i++) {
    currentExercises.push(exercises[i]);
  }
  const paginate = (event, newPage) => {
    setCurrentPage(newPage)
    window.scrollTo({top: 1800, behavior: 'smooth'})
  }

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
  
      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', ExercisesOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, ExercisesOptions);
      }
  
      if (exercisesData) {
        setExercises(exercisesData); // Set the 'results' property as the state
      } else {
        setExercises([]); // Handle the case when 'results' property is not present
      }
    };
  
    fetchExercisesData();
  }, [bodyPart]);
  


  return (

      <Box id ="exercises"
      sx={{mt:{lg:'110px'}}}
      mt= "50px"
      p="20px"
      >
        <Typography variant='h3' mb= '46px'>
          Showing results
        </Typography>

        <Stack direction= 'row' sx={{
          gap: {lg: '110px', xs: '50px'}
        }}
        flexWrap='wrap' 
        justifyContent='center' 
        >
          {currentExercises.map((exercise,index) => (
         <ExerciseCard key ={index} exercise= {exercise}/>
          ))}
        </Stack>

        <Stack mt="100px" alignItems="center">
            {exercises.length > 9 && (
              <Pagination
              color='standard'
              shape='rounded'
              defaultPage={1}
              count={Math.ceil(exercises.length/exercisesPerPage)}
              page={currentPage}
              onChange={paginate}
              size='large'
              />
            )}
        </Stack>

      </Box>

    )
}

export default Exercises