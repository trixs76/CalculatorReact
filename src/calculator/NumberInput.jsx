// ---------------------------------------------------------------------
// NumberInput Component
// Reusable controlled numeric input for React forms.
// Props: name, label, value, onChange
// ---------------------------------------------------------------------


function NumberInput({ name, label, value, onChange }) {
    return (
        <label htmlFor={name}>
            {label}
            <input
                id={name}
                type="number"
                name={name}
                required
                onChange={(e) => onChange(parseFloat(e.target.value))}
                value={isFinite(value) ? value : ""}
            />
        </label>
    );
}

export default NumberInput;