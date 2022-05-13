const Test = (props) => {
    let name = "Test";
    if (props.name) {
        name = props.name;
    }
    return (
        <h1>Hello {name}</h1>
    )
}

export default Test;