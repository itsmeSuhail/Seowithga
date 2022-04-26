import React from 'react'
import { Helmet } from 'react-helmet'

const C = ({value}) => {
  return <>
  <Helmet>
    <title>seo AC</title>
    <meta  name='description' content='we are using helmet in C'/>
    <link rel="canonical" href="/c" />

  </Helmet>
  
  
  
  <h1>hello {value}</h1>
  </>
}

export default C