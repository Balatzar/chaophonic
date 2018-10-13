import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Landing extends Component {
  state = {
    room: "",
  };

  render() {
    return (
      <div className="Landing">
        <h1>Chaophonic</h1>
        <p>Join or create a room</p>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.history.push(`/${this.state.room}`);
          }}
        >
          <input
            type="text"
            value={this.state.room}
            onChange={e =>
              this.setState({
                room: e.target.value,
              })
            }
          />
          <button type="submit">Go</button>
          <div className="self-promotion">
            <p>
              This website was made for fun by the jrnal team. jrnal is Netflix
              for high-quality newspapers.{" "}
              <a
                href="https://jrnal.co"
                rel="noopener noreferrer"
                target="_blank"
              >
                Give it a try!
              </a>
            </p>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Landing);
