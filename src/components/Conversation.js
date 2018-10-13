import React, { Component } from "react";

class Conversation extends Component {
  render() {
    const paragraphs = this.props.conversation.reduce(
      (acc, key) => {
        if (key === "Enter") {
          acc.push([]);
        } else {
          acc[acc.length - 1].push(key);
        }
        return acc;
      },
      [[]]
    );
    return (
      <div className="Conversation">
        <ul>
          {paragraphs.map((content, i) => {
            return (
              <li className={i % 2 ? "him" : "me"} key={i}>
                {content.join("")}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Conversation;
