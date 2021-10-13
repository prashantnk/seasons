import React from "react";
class Time extends React.Component {
    state = { time: "" };
    componentDidMount() {
        setInterval(() => {
            this.setState({
                time: new Date().toLocaleTimeString('en-US')
            })
        }, 1000);
    }
    render() {
        return (
            <h1> {`Current Time : ${this.state.time}`} </h1>
        );
    }
}
export default Time;