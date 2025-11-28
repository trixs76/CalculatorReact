// ---------------------------------------------------------------------
// App.js
// Main entry point for the React Calculator application.
// Renders the CalculatorForm and app title.
// ---------------------------------------------------------------------

import CalculatorForm from "./calculator/CalculatorForm";
import "./App.css";

const title = "React calculator";

function App() {
    return (
        <div className="App">
            <h1>{title}</h1>
            <CalculatorForm />
            <h3>Created by Trixs</h3>
        </div>
    );
}

export default App;