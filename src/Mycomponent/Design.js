import React from 'react'
import Grid from "@material-ui/core/Grid"
import "../mystyle.css"
import logo from "../Mycomponent/venom.jpg"
import {Link} from "react-router-dom"
import { useEffect,useState } from 'react'
import { Imageget, SearchReceiptByValueAction,getViewReceiptList } from '../redux/Imageaction'
import { useDispatch,useSelector } from 'react-redux'
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "../Mycomponent/image.css"
import Popular from '../Mycomponent/Popular'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
// import { SearchReceiptByValueAction } from '../redux/Imageaction'
import page from "./Page"
export const Design = () => {
// const[data,setdata]=useState([])  
const[inputvalue,setinputvalue]=useState("")
const[output,setoutput]=useState([])
const dispatch=useDispatch() 
const history=useHistory()
const data=useSelector((state)=>state.getimage.images)   

console.log(data,"Jammy Jain") 
useEffect(()=>{ 
  dispatch(Imageget())
},[])  
{/*useEffect(()=>{
setoutput([])
{data&&data.length>0?data.filter(val=>{
  if(val.original_title.toLowerCase().includes(inputvalue.toLowerCase())){
      
      setoutput(output=>[...output,val])
  }
}):""}
},[inputvalue])*/}
console.log(data,"JammyJains")
const handlefunction=(id)=>{
  history.push(`/Page/${id}`)
}

{/*let timeout = null;
  const handleChange = e => {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      onSearch(e.target.value);
    }, 1000);
  };*/}

  
  return (
    
    <> 
   
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" href="#" id="navtext">Movie Db</Link>
      <div className="collapse navbar-collapse" id="navbarposition">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">  
      <li className="nav-item active">
      <Link className="nav-link" to="/Popular">Popular </Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" href="#">Upcoming</Link>
      </li>

      <li className="nav-item">
      <Link className="nav-link" href="#">Top</Link>
      </li>
      </ul> 
      
      <form className="d-flex">
      <input className="form-control me-2" type="search" id="search" placeholder="Search" aria-label="Search" onChange={(e)=>setinputvalue(e.target.value)}/>
      <button className="btn btn-outline-success" type="submit" id="searchposition">Search</button>
       </form>
      </div>
     </nav>

     <div className="row">
       
        <div className="col zero-border pt-5" style={{ maxWidth: "1000%" }}>
          <Card className={`mx-5 mt-4 mb-5`} id="titles">
            <Typography
              className="px-4 mx-3"
              variant="h6"
              id="tableTitle"
              component="div"
              STYLE="font-weight:bold"
            >
            </Typography>
            <div className="row py-4">
              {data && data.length>0?data.map((product) => (
                <div className="col-3">
                  <CardActionArea id="titles">
                    <div  className="image-div">
                      <img id="imagestyle" src={`https://image.tmdb.org/t/p/w500${product.poster_path}`} className="product-img" onClick={(e)=>{handlefunction(product.id)}}/>
                    </div>
                  </CardActionArea>
                  <CardContent className="text-left px-4">
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="span"

                      >
                        <span className="name-cls" id="imagestyle">{product?.original_title}</span>
                        <div className="row">
                         
                        </div>
                       
                      </Typography>
                    </CardContent>

                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 plr5 m0">
                    <CardActions></CardActions>
                  </div>
                </div>
              )):("")}

            </div>
          </Card>

        </div>
      </div>
     {/*<div className="row">
       <div className="col-sm-8">
         <div className="col-sm-2">
         {data && data.length > 0 ? data.map((el)=>{
      console.log(el)        
      return (
        <>
        <h6>{el.original_title}</h6>
        </>
      )

    })
  :""}
         </div>
  </div>       
     </div>
    {/* {data && data.length > 0 ? data.map((el)=>{
      console.log(el)
      return (
        <>
        <h6>{el.original_title}</h6>
        </>
      )

    })
  :""}*/}
    </> 
  )
}
export default Design; 