import React from 'react';
import './App.css';
import {ProjectListScreen} from "./sscreens/project-list";
import {LoginScreen} from "./sscreens/login";


function App() {
    return (
        <div className="App">
            <header className="App-header">
                {/*<ProjectListScreen/>*/}
                <LoginScreen/>
            </header>
        </div>
    );
}

export default App;
