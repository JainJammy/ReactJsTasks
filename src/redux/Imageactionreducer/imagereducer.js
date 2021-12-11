const initialstate={
  images:[],  
  ViewReceipt:[],
  isLoadding:false
}
{/*export const GetImage=(state={images:[]},action)=>{
    switch(action.type){
        case "on_Get_result":
            return{        
            ...state,
            images:action.payload
        };
        default:{
            return{
                ...state,
                
            };
        }
    }
}
export default GetImage*/}
export const GetImage=(state=initialstate,action)=>{
    switch(action.type){
        case "on_Get_result":
          return{
            ...state,
            images:action.payload           
          };
          case"on_Get_Image_data":
          return{
             ...state,
             images:action.payload 
          }
          {/*case VIEW_RECEIPT: {
            return {
              ...state,
              ViewReceipt: action.payload,
              isLoadding: true,
            };
          }
          case VIEW_RECEIPT_FAILED: {
            return {
              ...state,
              ViewReceipt: action.payload,
              isLoadding: true,
            };
          }*/} 
         default:{
             return{
              ...state
             };
         } 
    }
}
export default GetImage;