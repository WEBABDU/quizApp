import React from 'react';

import "./PageHeading.css"

export const PageHeading = ({text}) => {
  return (
    <>
        <h1 className='heading'>{text}</h1>
    </>
  )
}
