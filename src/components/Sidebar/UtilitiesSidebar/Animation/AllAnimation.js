import React from 'react'
import { AnimationData } from './AnimationData'
import SingleAnimation from './SingleAnimation'

const AllAnimation = () => {
  return (
    
    <div class="container-fluid">

    <h1 class="h3 mb-1 text-gray-800">Animation Utilities</h1>
    <p class="mb-4">Bootstrap's default utility classes can be found on the official <a
            href="https://getbootstrap.com/docs">Bootstrap Documentation</a> page. The custom utilities
        below were created to extend this theme past the default utility classes built into Bootstrap's
        framework.</p>

   
    <div class="row">
    {
      AnimationData.map((element)=>(
        <SingleAnimation {...element}/>
      ))
    }
    </div>
    </div>
  )
}

export default AllAnimation