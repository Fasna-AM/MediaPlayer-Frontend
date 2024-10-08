import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'
import { removeVideoAPI, saveHistoryAPT } from '../services/allApi';


const VideoCard = ({displaData,setDeleteVideoResponse,insideCategory}) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = async() =>{
        setShow(true);
        //call saveHistory api
        //VideoDetails to be stored history
        const {caption,link} = displaData
        const today = new Date()
        const timeStamp = today.toLocaleString('en-US',{timeZoneName:'short'})
        console.log(timeStamp);
        const videoDetails = {caption,link,timeStamp}
        await saveHistoryAPT(videoDetails)
        
    } 

    const deleteVideo = async (id)=>{
        const result = await removeVideoAPI(id)
        setDeleteVideoResponse(result)
    }
     
    const videoDragStart = (e,videoId)=>{
        // console.log(`Video with id : ${videoId} has started draging.....`);
        e.dataTransfer.setData("id",videoId)
        
    }


    return (
        <>
            <Card draggable={true} onDragStart={e=>videoDragStart(e,displaData?.id)} style={{ height: '250px' }}>
                <Card.Img onClick={handleShow} variant="top" height={'150px'} src={displaData?.url} />
                <Card.Body>
                    <Card.Text className='d-flex justify-content-between'>
                        <p>{displaData.caption}</p>
                        { !insideCategory && <button onClick={()=>deleteVideo(displaData?.id)} className='btn'><i class="fa-solid fa-trash text-danger"></i></button>}
                    </Card.Text>
                </Card.Body>
            </Card>
            <Modal size='lg' centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{displaData.caption}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe width="100%" height="514" src={`${displaData.link}?autoplay=1`} title="Caption"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </Modal.Body>

            </Modal>
        </>
    )
}

export default VideoCard

// to drag and drop

// 1. dragable = {true}

// 2. onDragStart={e=>function_name(e,displaData?.id)}
//                           const function_name= (e,videoId)=>{
//                                  e.dataTransfer.setData("id",videoId)
    
//                             }
// 3.  e.dataTransfer.setData("id",videoId) :- store data for drop

// 4. droppable="true"

// 5. onDragOver(function_name) :- to prevent  unwanted event occure
//                  const function_name = e=>{
//                              e.preventDefault()
//                   }

// 6. onDrop={e=>function_name(e,categoryDetails?.id)}
//                              const function_name= (e,categoryId)=>{
//                                    const videoId = e.dataTransfer.getData("id")

        
//                             }