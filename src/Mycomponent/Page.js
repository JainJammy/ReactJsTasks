import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {Imageid} from "../redux/Imageaction"
import "../Mycomponent/image.css" 
import Design from '../Mycomponent/Design';
import Navbar from '../Mycomponent/Navbar';
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import { Imagecast } from '../redux/Imageaction';
export  const Page = () => {    
const dispatch=useDispatch();    
const {id}=useParams()

console.log(id)
//const datainfo=useSelector((state)=>state.getimage.images)
const data=useSelector((state)=>state.getimage.images)
const castdata=useSelector((state)=>state.getcast.Imagecast)
//console.log(data,"jjj")
useEffect(()=>{
  dispatch(Imageid(id))
  dispatch(Imagecast(id))  
},[])
console.log(data,"jjjj")
    return (
        <>  
        <Navbar/>
        {/*<CardActionArea id="titles">
      <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} id="imagepositionset"/>
      </CardActionArea>
      <CardContent className="text-left px-4">
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="span"

                      >
                          <span className="name-cls" id="imagestyle">{data?.original_title}</span>
                        </Typography>

    </CardContent>*/}
    <div className="row">
        
        <div className="col zero-border pt-5" style={{ maxWidth: "1000%" }}>
          <Card className={`mx-5 mt-4 mb-5`} id="titles">
            
            <div className="row py-4">
                <div className="col-3">
                  <CardActionArea id="titles">
                    <div  className="image-div">
                      <img id="imagestyle" src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} className="product-img"/>
                      {/*<img id="imagestyles" src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`} className="backdrop"/>*/}
                    </div>
                  </CardActionArea>
                  <CardContent className="text-left px-4">
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="span"

                      >
                        <span className="name-cls" id="titleset">{data?.original_title}</span>
                        <div className="row">
                          
                        </div>
                        
                        <span className='name-cls' id="rating">Rating</span>  
                        <span className='name-cls' id="ratingset">{data?.vote_average}</span>
                        <span className='name-cls' id="realse">Realse Date</span>  
                        <span className='name-cls' id="realseset">{data?.release_date}</span>
                        <span className='name-cls' id="overview">Overview</span>
                        <span className='name-cls' id="overviewset">{data?.overview}</span>

                      </Typography>
                    </CardContent>
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 plr5 m0">
                    <CardActions></CardActions>
                  </div>
                </div>
            </div>
          </Card>
        </div>
      </div>
        <span className='Cast'>Cast</span>
        <div className="row py-4">
                <div className="col-3">
                  <CardActionArea id="titles">
                    <div  className="image-div">
                      <img id="imagestyle" src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} className="product-img"/>
                    </div>
                  </CardActionArea>
          </div>
          </div>                    
        </>
    )
}
export default Page;
