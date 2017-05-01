import React, {Component} from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submissions: []
        };

    }

    componentWillMount() {
        let submissions = [];
        let request = $.ajax({
            url: '/submission',
            dataType: 'json',
        });

        request.done((data) => {
            this.setState({
                submissions: [
                    ...data,
                    ...this.state.submissions,
                ]
            });
        });
    }

    render() {
        return(
            <h3>React in comp</h3>
        );
    }
}

export default App;
