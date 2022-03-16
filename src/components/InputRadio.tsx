const InputRadio = ( props: { value: string } ) => (
    <label className="is-size-7" onChange={() => setFilter(true)}>
        <input
            className="is-size-7"
            type="radio"
            value={props.value}
            name="status"
            style={{ marginLeft: "10px" }} />{" "}
        Active
    </label>
)
 
export default InputRadio;