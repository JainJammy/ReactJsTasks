import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Design from "./Mycomponent/Design"
import Page from "./Mycomponent/Page"
import Popular from './Mycomponent/Popular'
export const App = () => {
  return (
    <>
    <BrowserRouter>
     <Route exact path="/" component={Design}/>    
     <Route exact path="/Page/:id" component={Page}/>
     <Route exact path="/Popular" component={Popular}/>
    </BrowserRouter>  
    </>
  )
}
export default App;