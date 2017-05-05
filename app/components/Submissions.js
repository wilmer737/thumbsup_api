import React, {Component} from 'react';

import Submission from './Submission';

class Submissions extends Component {
    constructor(props) {
        super(props);
    }

    renderSubmissions(submissions) {
        return <Submission />;
    }

    render() {
        const {submissions} = this.props;
        return(
            <div>
                Submissions
                {this.renderSubmissions(submissions)}
            </div>
        );
    }
}

export default Submissions;
