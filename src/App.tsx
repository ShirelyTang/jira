import React from 'react';
import './App.css';
import {ProjectListScreen} from "./screens/project-list";
import {LoginScreen} from "./screens/login";


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
