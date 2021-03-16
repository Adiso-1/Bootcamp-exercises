import './Spinner.component.css'

const Spinner = (props) => {
    return <div className={`${props.round} ${props.shape}`}></div>;
}
export default Spinner;