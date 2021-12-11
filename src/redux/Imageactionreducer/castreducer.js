const initialstate={
    images:[]
}
export const Imagecast=(state=initialstate,action)=>{
     switch(action.type)
     {
         case "on_Get_Image_cast":return{
             images:action.payload,
             ...state
         }
     }
}
export default Imagecast