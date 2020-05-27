import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from './Components/Container';
import ReactGA from 'react-ga';

    function initializeReactGA() {
        ReactGA.initialize('UA-167751693-1');
        ReactGA.pageview('/');
    }

    initializeReactGA();


function App() {




    return (
        <div className="App">
            <Container/>
        </div>
    );
}

export default App;
