import React, {useState, useEffect} from 'react'
import axios from 'axios';
import './dashboard.css'

export default function Login() {
  const [registerUsername, setRegisterUsername] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")
  const [loginUsername, setLoginUsername] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  const [stories, setStories] = useState([])
 
  useEffect(() => {
    axios.get("http://localhost:5000/stories/", { withCredentials: true})
      .then((res) => {
        console.log(res.data)
        setStories(res.data)
      }
    )
  }, [])


  const getStories = () => {
    axios.get("http://localhost:5000/stories/", { withCredentials: true})
      .then((res) => {
        console.log(res.data)
        setStories(res.data)
      }
    )
  }

  const postStories = () => {
    axios({
      method: "POST",
      data: {
        title: "123",
        body: "body",
        status: "public",
      },
      withCredentials: true,
      url: "http://localhost:5000/stories",
    }).then((res) => console.log(res))
  }

  const register = () => {
    axios({
      method: "POST",
      data: {
        username: registerUsername,
        password: registerPassword,
      },
      withCredentials: true,
      url: "http://localhost:5000/register",
    }).then((res) => console.log(res))
  };
  const login = () => {
    axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:5000/login",
    }).then((res) => console.log(res));
  };
  const getUser = () => {
    axios.get("http://localhost:5000/user", { withCredentials: true})
      .then((res) => {
        setStories(res.data)
        console.log(res.data)
    })
  }

  return (
    <div className="App">
      <div>
        <h1>Register</h1>
        <input
          placeholder="username"
          onChange={(e) => setRegisterUsername(e.target.value)}
        />
        <input
          placeholder="password"
          onChange={(e) => setRegisterPassword(e.target.value)}
        />
        <button onClick={register}>Submit</button>
      </div>

      <div>
        <h1>Login</h1>
        <input
          placeholder="username"
          onChange={(e) => setLoginUsername(e.target.value)}
        />
        <input
          placeholder="password"
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <button onClick={login}>Submit</button>
      </div>

      <div>
        <h1>Get User</h1>
        <button onClick={getUser}>getUser</button>
        {stories ? <h1>Welcome Back {stories.username}</h1> : null}
        <button onClick={getStories}>Submit</button>
        <button onClick={postStories}>Post</button>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Body</th>
            <th scope="col">Status</th>
            <th scope="col">Title</th>
          </tr>
        </thead>
        <tbody>
          {
            stories.map(
              story => 
                <tr key={story._id}>
                  <th scope="row">1</th>
                  <td>{story.body}</td>
                  <td>{story.status}</td>
                  <td>{story.title}</td>
                </tr>
            )
          }
        </tbody>
      </table>
      
    </div>
  );
}