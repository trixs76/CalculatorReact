// ---------------------------------------------------------------------
// Result Component
// Displays the computed result if a value is provided.
// Props: value
// ---------------------------------------------------------------------

function Result({ value }) {
    if (value !== null)
        return <div className="Result">Result: {value}</div>;
    return null;
}

export default Result;