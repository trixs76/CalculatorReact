// ---------------------------------------------------------------------
// CalculatorForm - core UI logic for the React calculator.
// Depends on: NumberInput, react-select, Result, calculate()
// ---------------------------------------------------------------------

import NumberInput from "./NumberInput";
import Select from "react-select";
import Result from "./Result";

import React, { useState } from "react";
import { operations, calculate } from "../utils/Calculate";

function CalculatorForm() {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [operation, setOperation] = useState(operations[0]);
    const [result, setResult] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        const result = calculate(a, b, operation.value);
        setResult(result);
    };

    return (
        <div>
            <form className="CalculatorForm" onSubmit={handleSubmit} >
                <NumberInput name="a" label="First number:" value={a} onChange={setA} />
                <NumberInput name="b" label="Second number:" value={b} onChange={setB} />
                <Select options={operations} value={operation} onChange={setOperation} />
                <p><input type="submit" value="Calculate" /></p>
            </form>
            <Result value={result} />
        </div>
    );
}

export default CalculatorForm;