import React from 'react'
import { Helmet } from 'react-helmet'

const D = ({value}) => {
  return <>
  <Helmet>
    <title>seo D</title>
    <meta  name='description' content='we are using helmet in D'/>
    <link rel="canonical" href="/d" />

  </Helmet>
  <h1>hello {value}</h1></>
}

export default D