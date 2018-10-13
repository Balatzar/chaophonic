import React, { Component } from "react";
import { createSocket } from "../services/socket";

import Conversation from "../components/Conversation";

class Tchat extends Component {
  state = {
    conversation: ["b", "o", "Enter", "p", "l", "o", "o", "p"],
    speakers: [],
  };

  componentDidMount() {
    const socket = createSocket(this.props.match.params.room);

    document.addEventListener("keypress", event => {
      const key = event.key;
      socket.emit("talk", key);
    });

    socket.on("talk", key => {
      this.setState({
        conversation: [...this.state.conversation, key],
      });
    });

    socket.on("speaker-connect", count => {
      this.setState({
        speakers: count,
      });
    });

    socket.on("speaker-disconnect", () => {
      this.setState({
        speakers: this.state.speakers - 1,
      });
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="Tchat">
        <h1>{this.props.match.params.room}</h1>
        <div className="speakers">
          {Array(this.state.speakers)
            .fill()
            .map((_, i) => {
              return (
                <div className="speaker" key={i}>
                  <img
                    alt="speaker-avatar"
                    src={`https://api.adorable.io/avatars/50/${Math.floor(
                      Math.random() * 100
                    )}@chaophonic.png`}
                  />
                </div>
              );
            })}
        </div>
        <div className="talk">
          <Conversation conversation={this.state.conversation} />
        </div>
      </div>
    );
  }
}

export default Tchat;
