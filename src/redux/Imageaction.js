import axios from "axios"
import { useState } from "react"
export const onGetresult=(data)=>{
    console.log(data,"Jamy") 
    return{
    type:"on_Get_result",
    payload:data,
    };
}
export const onGetImagedata=(datas)=>{
    return{
        type:"on_Get_Image_data",
        payload:datas,
    };
}
export const onGetImagecast=(castdata)=>{
     return{
       type:"on_Get_Image_cast",
       payload:castdata
     }
}
export const Imageget=()=>{
    const Api_key="c45a857c193f6302f2b5061c3b85e743"    
     return async (dispatch)=>{
     const res=await  axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${Api_key}&language=en-US&page=1`)
          .then((res)=>{
              console.log(res.data.results)
              dispatch(onGetresult(res.data.results))
          })  
          .catch((error)=>{
            console.log(error)  
          })
     }     
} 
export const Imageid=(id)=>{
    const Api_key="c45a857c193f6302f2b5061c3b85e743"    
    return async (dispatch)=>{
     const res=await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${Api_key}&language=en-US`)
       .then((res)=>{
         console.log(res.data)  
         dispatch(onGetImagedata(res.data))
       })
       .catch((error)=>{
         console.log(error)  
       })
    } 
}
export const Imagecast=(id)=>{
  const Api_key="c45a857c193f6302f2b5061c3b85e743"    
  return async (dispatch)=>{
   const res=await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${Api_key}&language=en-US`)
     .then((res)=>{
       console.log(res.data)  
       dispatch(onGetImagecast(res.data))
     })
     .catch((error)=>{
       console.log(error)  
     })
  } 
}
{/*export const SearchReceiptByValueAction = value => {
  return dispatch => {
    DonorServices.SearchReceiptByValue(value).then(res => {
      dispatch(getViewReceiptList(res.data.data.rows));
    });
  };
};
export const getViewReceiptList = data => {
  return {
    type: VIEW_RECEIPT,
    payload: data,
  };
}*/}
