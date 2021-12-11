import {GetImage} from "./Imageactionreducer/imagereducer"
import { Imagecast } from "./Imageaction"
import { combineReducers, createStore } from "redux"
export const rootreducers=combineReducers({ 
    getimage:GetImage,
    getcast:Imagecast
  })
export default rootreducers  