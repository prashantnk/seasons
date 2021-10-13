import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner';
const getLocation = (App) => {
    window.navigator.geolocation.getCurrentPosition(
        (position) => {
            App.setState({ lat: position.coords.latitude });
        },
        (err) => {
            App.setState({ errMsg: err.message });
        }
    )
};
// const App = () => {
//     console.log(getLocation());
//     return <h1>hello !</h1>;
// }; 
class App extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = { lat: null, errMsg: "" };

    // }

    state = { lat: null, errMsg: "" };

    componentDidMount() {
        getLocation(this);
    }

    renderContent() {
        if (this.state.errMsg) {
            return <h1>Error : {this.state.errMsg}</h1>
        }

        if (this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }

        return <Spinner message="Please Accept The Location Request ! " />;
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );

    }
}

ReactDOM.render(<App />, document.querySelector('#root'));