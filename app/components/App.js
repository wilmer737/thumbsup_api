import React, {Component} from 'react';

import Nav from './Navigation';
import Submissions from './Submissions';

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
        const {submissions} = this.state;
        return(
            <div className='container'>
                <Nav />
                <h3>Testimonials</h3>
                <p>Word on the Street </p>
                <p>Here at TargetCW, we take great care in making our clients and employee’s happy. We wanted to share with you the testimonials from those who have taken the time to express their appreciation. Below you can filter your search to find testimonials that best fit what you are looking for.</p>
                <Submissions submissions={submissions}/>
            </div>
        );
    }
}

export default App;
