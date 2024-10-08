//  define all api for project ,it call commonAPI function

import commonAPI from "./commonAPI";
import SERVER_URL from "./serverUrl";

// uploadVedio api - api must call by AddComponent

export const uploadVedioAPI = async (vedio) =>{
    return await commonAPI("POST",`${SERVER_URL}/allVideos`,vedio)
}

// getAllVedioAPI - called by View Component
export const getAllVedioAPI = async()=>{
    return await commonAPI("GET",`${SERVER_URL}/allVideos`,"")

}

//saveHistory API - called by VideoCard
export const saveHistoryAPT = async(videoDetails)=>{
    return await commonAPI("POST",`${SERVER_URL}/history`,videoDetails)

}

//getHistoryAPI - called by History
export const getHistoryAPI = async()=>{
    return await commonAPI("GET",`${SERVER_URL}/history`,"")
}


// removeHistoryApi - called by history
export const removeHistoryAPI = async(id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/history/${id}`,{})
}

// removeVideoApi - called by Vediocard
export const removeVideoAPI = async(id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/allVideos/${id}`,{})
}

// addCategoryAPI - called by Category
export const addCategoryAPI = async (categoryDetails)=>{
    return await commonAPI("POST",`${SERVER_URL}/categories`,categoryDetails)
}

// getAllCategoryAPI - called by Category
export const getAllCategoryAPI = async ()=>{
    return await commonAPI("GET",`${SERVER_URL}/categories`,"")
}

// removeCtegoryAPI - called by category
export const removeCategoryAPI = async (id)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/categories/${id}`,{})
}

// getSingleVideoAPI- called by category
export const getSingleVideoAPI = async(id)=>{
    return await commonAPI("GET",`${SERVER_URL}/allVideos/${id}`,"")
}

// updateCategoryAPI - called bt category
export const updateCategoryAPI = async(categoryId,updateCategoryDetails)=>{
    return await commonAPI("PUT",`${SERVER_URL}/categories/${categoryId}`,updateCategoryDetails)
}

// getSingleCategoryAPI -called view
export const getSingleCategoryAPI = async (id) =>{
    return await commonAPI("GET",`${SERVER_URL}/categories/${id}`,"")
}