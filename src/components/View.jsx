import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVedioAPI, getSingleCategoryAPI, updateCategoryAPI, uploadVedioAPI } from '../services/allApi'


const View = ({videoUploadResponse,removeVideoResponseFromCategory,setRemoveVideoResponseFromView}) => {

  const [deleteVideoResponse,setDeleteVideoResponse] = useState("")
  const [allVideos, setAllVideos] = useState([])
  useEffect(() => {
    getAllVedios()
  },[videoUploadResponse,deleteVideoResponse,removeVideoResponseFromCategory])
      //props              //state               //state
  const getAllVedios = async () => {
    try {
      const response = await getAllVedioAPI()
      // console.log(response);
      setAllVideos(response.data)
    } catch (error) {

    }
  }
  // console.log(allVideos);

  const dragOverView =(e)=>{
    e.preventDefault()
  }

  const categoryVideoDrop= async (e)=>{
    const {categoryId,video} = JSON.parse(e.dataTransfer.getData("dataShare"))
    // console.log(`video id : ${video.id} from category id : ${categoryId} dropped in view component`);
    // remove video from category
    // get category details from where we have to remove video
    const {data} = await getSingleCategoryAPI(categoryId)
    // update category after emoving video
    const updatedAllVideos = data?.allvideos?.filter(item=>item.id!=video?.id)
    const updateCategoryDetails = {id:categoryId,categoryName:data.categoryName,allvideos:updatedAllVideos}
    const response = await updateCategoryAPI(categoryId,updateCategoryDetails)
    // pass response to category
    setRemoveVideoResponseFromView(response)
    // video must be inserted to allVideos - call uploadVideo api
    await uploadVedioAPI(video)
    getAllVedios()

    
  }

  return (
    <>
      <Row droppable="true" onDragOver={dragOverView} onDrop={e=>categoryVideoDrop(e)}>
        {
          allVideos.length > 0 ?
            allVideos?.map(video => (
              <Col key={video?.id} className='mb-4' sm={12} md={6} lg={4}>
                <VideoCard setDeleteVideoResponse={setDeleteVideoResponse}  displaData={video}/>
              </Col>
            ))

            :
            <div className="text-danger fw-bolder">No Videos are uploaded yet</div>
        }
      </Row>

    </>
  )
}

export default View