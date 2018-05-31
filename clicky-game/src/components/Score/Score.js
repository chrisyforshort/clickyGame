import React from "react";

class Score extends React.component {
    state= {
        score: 0
    }

handleIncrement = () => {
    this.setState({score:this.state.count+1})
}

    render() {
        return (
            <div>
                <p>Score: {this.state.count} | <span>Top Score: </span></p>
            </div>
        )
    }
};

export default Score;
