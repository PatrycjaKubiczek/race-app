interface InputRadioProps {
    value: string,
    handleFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
    checked?: boolean
}

const InputRadio= ({value, handleFilter, checked}: InputRadioProps) => (
    <label className="is-size-7">
        <input
            className="is-size-7"
            type="radio"
            value={value}
            name="status"
            style={{ marginLeft: "10px" }} 
            onChange={handleFilter}
            defaultChecked={checked}
            />
            {value}
    </label>
)
 
export default InputRadio;