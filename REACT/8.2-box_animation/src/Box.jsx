const Box = (props) => {
    const style = {
        width: props.width,
        height: props.width,
        background: props.background,
    };
    return (
        <div style={style}></div>
    )
}
export default Box;