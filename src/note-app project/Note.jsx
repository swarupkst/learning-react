import React, { useState } from 'react'

const Note = () => {

    const [subject, setSubject] = useState('')
    const [note, setNote] = useState('')

    const [task, setTask] = useState([])

    const submitHandeler = (e)=> { 
        e.preventDefault()
     
        let savetask=[...task];

        savetask.push({subject,note})
        setTask(savetask)

        console.log(savetask);
         setSubject('');
         setNote('');

        
    }
    const deleteNote = (idx)=> {
          const saveTask =[... task]

          saveTask.splice(idx,1)

          setTask(saveTask)
         }
  

  return (
    <div>
      <form onSubmit={(e) => {submitHandeler (e)}} 
      className='p-10 flex flex-col items-center justify-center text-center bg-amber-200 m-10 rounded-4xl'>
        
        <input className='bg-gray-500 py-5 pl-5 rounded-3xl text-white w-full'
        type='text' 
        placeholder='Enter Note Subject' 
        value={subject}
        onChange={(e)=> {setSubject(e.target.value)}}
        /> <br/> <br/>

        <input className='bg-gray-500 py-15 pl-5 rounded-3xl text-white w-full'
        type='text' 
        placeholder='Write your note.' 
        value={note}
        onChange={(e)=> {setNote (e.target.value)}}
        /> <br/> <br/>

        <button className='px-10 py-2 bg-green-500 rounded-4xl text-white active:scale-150 cursor-pointer '>Add Note</button>
      </form>

      <div>
      <div className='m-10 p-10 bg-amber-300 rounded-4xl'>
        <h1 className='text-center text-5xl text-blue-600'>Your Note</h1>
        <div className='flex flex-wrap gap-5 mt-5 h-full overflow-auto'>
            {task.map(function(elem,idx){
              return <div key={idx} className='h-70 w-53 rounded-2xl bg-white text-blue-800 bg-cover bg-[url("https://www.nicepng.com/png/detail/67-679001_notes-document-notepad-office-reminder-sticky-note-paper.png")]'>
                <h3 className='text-4xl pl-5 pt-10'>{elem.subject}</h3>
                <p className='pl-5 pt-2'>{elem.note}</p>
                <button onClick={() => deleteNote(idx)} className='px-5 py-1 rounded-2xl m-5 bg-red-600 cursor-pointer active:scale-75'>Delete</button>
              </div>
            })}
            
        </div>
      </div>
      </div>
    </div>
  )
}

export default Note
