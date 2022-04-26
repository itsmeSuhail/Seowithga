import React from 'react'
import { Helmet } from 'react-helmet'
import {Routes as Switch,Route, Link} from "react-router-dom"
import A from './Component/A'
import B from './Component/B'
import C from './Component/C'
import D from './Component/D'
const App = () => {
  return <>
 
  <div style={{display:'flex',justifyContent:"space-between"}}>
      <Link to="/">Home</Link>
      <Link to="/b">Service</Link>
      <Link to="/c">About</Link>
      <Link to="/d">Pay</Link>

  </div>
  <Switch>
<Route path='/' element={<A value={"Pro"}/>}/>
<Route path='/b' element={<B value={"Level"}/>}/>
<Route path='/c' element={<C value={"Player"}/>}/>
<Route path='/d' element={<D value={"Apan"}/>}/>



  </Switch>
  
  </>
}

export default App