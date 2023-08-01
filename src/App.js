import { useState } from 'react'

function App() {
  const[job, setJob] = useState('')
  const[jobs, setJobs] = useState([])
  const handleSubmit = () => {
    setJobs(prev => [...prev, job])
    setJob('')
  }

  console.log(job);
  return (
    <div style={{padding: 32}}>
      <input
       value={job} 
       onChange={e => setJob(e.target.value)}
       />
      <button onClick={handleSubmit}>Add</button>
    <ul>
      {jobs.map((jobs, index) =>
      <li key={index}>{jobs}</li>
      )}
      
    </ul>

    </div>
  )
    
  
}

export default App;
