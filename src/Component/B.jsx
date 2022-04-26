import React from 'react'
import { Helmet } from 'react-helmet'

const B = ({value}) => {
  return<>
  <Helmet>
    <title>seo B</title>
    <meta  name='description' content='we are using helmet in B'/>
    <link rel="canonical" href="/b" />

  </Helmet>
  
  
  <h1>hello {value}</h1>
  </>
}

export default B