"use client"
import { list } from 'postcss'
import React, { useState } from 'react'

export default function page() {

  const [title, setTitle] = useState("")
  const [desc, setDesc] =   useState("")
  const [mainTask, setMaintask] = useState([])


  const submitHandler = (e) => {
    e.preventDefault()
    console.log(title)
    console.log(desc)
    setMaintask([...mainTask, { title, desc}])
    setTitle("")
    setDesc("")
    console.log(mainTask)
  }

  const deleteHandler = (i) => {
      let copyTask = [...mainTask]
      copyTask.splice(i,1)
      setMaintask(copyTask)
  }


  let renderTask = <h2>No Task Avilable</h2>;

  if(mainTask.length>0){
      renderTask = mainTask.map((t,i) => {
    return (
      <li key = {i} className='flex items-center justify-between mb-8'>
      <div  className='flex justify-between mb-5 w-2/3'>
      <h5 className='text-2xl font-semibold'>{t.title}</h5>
      <h6 className='text-lg font-semibold'>{t.desc}</h6>
    </div>
    <button onClick={() => {
      deleteHandler(i)
    }} className='bg-red-400 text-white font-bold rounded px-4 py-3'>Delete</button>
    </li>
    )
  })
  }
  
  return (
    <>
        <h1 className='bg-black text-white p-5 font-bold text-center text-2xl'>My To do list</h1>

        <form  onSubmit={submitHandler}>

                <input type="text"  className='text-2xl border-zinc-800  border-4 mx-10 my-4 mr-20 px-5 py-2 ' placeholder='Enter Your Task' value={title} onChange={(e) => {
                  setTitle(e.target.value)
                }}/>

                <input type="text"  className='text-2xl border-zinc-800  border-4 mx-10 my-4  px-5 py-2 ' placeholder='Enter Description of Task'  value={desc} onChange={(e)=>{
                  setDesc(e.target.value)
                }}/>

                <button className='bg-black text-white px-4  py-2 m-5 font-bold rounded'>Add Task</button>


        </form>

        <hr className='color-red' />

        <div className="p-8  bg-slate-200">
                <ul>
                  {renderTask}
                </ul>
        </div>
        
    </>
  )
}
