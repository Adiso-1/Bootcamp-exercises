const CheckBox = (props) => {
	return (
		<li>
			<input onChange={props.handleChange} name={props.name} type="checkbox" />
			<label>{props.name}</label>
		</li>
	);
};
export default CheckBox;
