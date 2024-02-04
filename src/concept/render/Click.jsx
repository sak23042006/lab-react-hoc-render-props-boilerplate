
const Click = (props) => {
    return (
        <div>
            <button onClick={props.increase}>Click me : {props.count}</button>
        </div>
    )
}

export default Click