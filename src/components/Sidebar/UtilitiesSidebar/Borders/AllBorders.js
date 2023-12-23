import React from 'react'
import { BorderData } from './BorderData'
import SingleBorder from './SingleBorder'

const AllBorders = () => {
  return (
    <>
   <div class="container-fluid">
        <h1 class="h3 mb-1 text-gray-800">Border Utilities</h1>
        <p class="mb-4">Bootstrap's default utility classes can be found on the official <a
                href="https://getbootstrap.com/docs">Bootstrap Documentation</a> page. The custom utilities
            below were created to extend this theme past the default utility classes built into Bootstrap's
            framework.</p>
        <div class="row">
        {
            BorderData.map((element)=>{
               return <SingleBorder {...element}/>
            })
        }
        </div>
    </div>
    
    </>
  )
}

export default AllBorders