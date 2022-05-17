import {useState} from 'react';


const LoginPage = (props) => {
    const [state,setState] = useState({
        username:"",
        password:""
    })

  const onChange = (event) => {
          setState((state) => {
              return {
                  ...state,
                  [event.target.name]:event.target.value
              }
          })
      }


  return(
          <div style={{
              "width":500,
              "backgroundColor":"#14f5bc",
              "margin":"auto"
          }}>
              <form className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input type="text"
                          name="username"
                          id="username"
                          className="form-control"
                          onChange={onChange}
                          value={state.username}/>
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password"
                          name="password"
                          id="password"
                          className="form-control"
                          onChange={onChange}
                          value={state.password}/>
                  <button className="btn btn-primary" name="register" style={{"marginRight":5}}>Register</button>
                  <button className="btn btn-primary" name="login" style={{"marginLeft":5}}>Login</button>
              </form>
          </div>
      )
}

export default LoginPage;
