import React from 'react'
import { Helmet } from 'react-helmet'

const A = ({value}) => {
  return <>
  <Helmet>
    <title>seo A</title>
    <meta  name='description' content='we are using helmet in A'/>
    <meta  name="keywords"  content='web,dsa,tv series,searchbox' />
    <link rel="canonical" href="/" />
    <style type='text/css'>
      {
        `
        body{
          background:#fff5f5;
        }
        `
      }

    </style>
  </Helmet>
  
  <h1>hello {value}</h1>
  </>
}

export default A