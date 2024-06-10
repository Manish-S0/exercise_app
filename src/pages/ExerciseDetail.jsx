import { useEffect, useState } from 'react'
import Details from "../components/Details"
import SimilarExercises from "../components/SimilarExercises"
// import ExerciseVideos from "../components/ExerciseVideos"
import { useParams } from "react-router-dom"
import { exerciseOptions, fetchData, } from "../utils/fetchData"

const ExerciseDetail = () => {

  const [exerciseDetail, setExerciseDetail] = useState({});
  // const [exerciseVideos,setExerciseVideos]=useState([])
  const [targetMusclesExercise,setTargetMusclesExercise]=useState([])
  const [equipmentExercise,setEquipmentExercise]=useState([])
  
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      // const youtubeSearchUrl='https://youtube-search-and-download.p.rapidapi.com';
      
      const exerciseDetailData= await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);

      setExerciseDetail(exerciseDetailData);

    //   const exerciseVideosData= await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,youtubeOptions)

    //   setExerciseVideos(exerciseVideosData)

      const targetMusclesExerciseData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMusclesExercise(targetMusclesExerciseData);
      const equipmentExerciseData=await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,exerciseOptions);
      setEquipmentExercise(equipmentExerciseData)

    };
    fetchExercisesData();
  }, [id]);

  return (
    <>
    
    
    <Details exerciseDetail={exerciseDetail} />
    {/* <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/> */}
    <SimilarExercises targetMusclesExercise={targetMusclesExercise} equipmentExercise={equipmentExercise}/>
    </>
  )
}

export default ExerciseDetail