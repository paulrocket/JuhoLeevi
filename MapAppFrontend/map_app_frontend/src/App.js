import logo from './logo.svg';
import {React,useState} from "react";
import './App.css';
import Navbar from './components/Navbar';
import LoginPage from './components/LoginPage';
import {Routes,Route,Navigate} from 'react-router-dom';

function App() {

  const [state,setState] = useState({
    list:[],
    isLogged:false,
    token:"",
    loading:false,
    error:""
  })

  const [urlRequest,setUrlRequest] = useState({
    url:"",
    request:{},
    action:""
  })

  const login = (user) => {
    setUrlRequest({
      url:"/LoginPage",
      request:{
        method:"POST",
        mode:"cors",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(user)
      },
      action:"login"
    })
  }


    return (
      <div className="App">
        <Navbar/>
          <Routes>
            <Route path="Home" element={<Navigate to="/"/>} />
            <Route path="LoginPage" element={<LoginPage/>}/>
          </Routes>
        <hr/>
      </div>
    );
}

export default App;
