const Input = (props) => {
	return (
		<div>
			<label htmlFor="input">Search</label>
			<input id="input" value={props.value} onChange={props.onChange} />
		</div>
	);
};
export default Input;
