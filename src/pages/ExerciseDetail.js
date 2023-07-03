import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'


import {ExercisesOptions, fetchData, exerciseVideosOptions} from '../utils/fetchData'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'


const ExerciseDetail = () => {

  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [similarExercises, setSimilarExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

const {id} = useParams();

useEffect(() => {
  const fetchExerciseData = async () =>{
    const exerciseUrl = 'https://exercisedb.p.rapidapi.com';
    const videoUrl = 'https://youtube-search-and-download.p.rapidapi.com';

    const exerciseDetailData = await fetchData(`${exerciseUrl}/exercises/exercise/${id}`, ExercisesOptions)
    setExerciseDetail(exerciseDetailData);


    const exerciseVideosData = await fetchData(`${videoUrl}/search?query=${exerciseDetailData.name}`, exerciseVideosOptions)
    setExerciseVideos(exerciseVideosData.contents);

    const targetMusclesData = await fetchData(`${exerciseUrl}/exercises/target/${exerciseDetailData.target}`, ExercisesOptions);
    setSimilarExercises(targetMusclesData);

    const equipmentExercisesData = await fetchData(`${exerciseUrl}/exercises/equipment/${exerciseDetailData.equipment}`, ExercisesOptions);
    setEquipmentExercises(equipmentExercisesData);
  }
  fetchExerciseData();
},[id]);

  return (
   <Box>
    <Detail exerciseDetail={exerciseDetail}/>
    <ExerciseVideos exerciseVideos = {exerciseVideos} name={exerciseDetail.name}/>
    <SimilarExercises similarExercises= {similarExercises}
                      equipmentExercises = {equipmentExercises}/>
   </Box>
  )
}

export default ExerciseDetail