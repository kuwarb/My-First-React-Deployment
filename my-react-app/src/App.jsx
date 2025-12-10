import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://my-first-backend-deployment.onrender.com/users')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error))
  }, [])

  return (
    <>
      <h1> Hello World! My first React Deployment</h1>
      <h2> Second commit to test auto deployment </h2>
      {data.length > 0 ? (
        <ul>
          {data.map(user => (
            <li key={user.id}>{user.name} - {user.id}</li>
          ))}
        </ul>
      ) : (
        <p>No users found.</p>
      )}    
    </>
  )
}

export default App
