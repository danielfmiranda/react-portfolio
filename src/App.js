import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from './Components/Container';
import ReactGa from "react-ga";


function App() {

    function initializeReactGA() {
        ReactGa.initialize('UA-167751693-1');
        ReactGa.pageview('/');
    }

    initializeReactGA();


    return (
        <div className="App">
            <Container/>
        </div>
    );
}

export default App;
