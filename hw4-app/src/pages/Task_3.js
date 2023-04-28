import React from 'react'

import { DataMaker } from '../components/DataMaker'
import { Posts } from '../components/Posts'

const getPosts = "https://jsonplaceholder.typicode.com/todos?_limit=10"


export const Task_3 = () => {
  return (
    <>
    <h2>Task_3</h2>
    <div className='example__container'>
      <DataMaker url={getPosts} renderDataUrl={(data) => <Posts data={data}/>}/>

    </div>
    </>
  )
}

export default Task_3;
