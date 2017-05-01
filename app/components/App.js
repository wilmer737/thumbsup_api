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
            <div className='container'>
                <h3>TargetCW New Fancy Site</h3>
                <button className='btn btn-danger'>Sup</button>
            </div>
        );
    }
}

export default App;
