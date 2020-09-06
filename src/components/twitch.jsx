import React, { Component } from "react";
import { TwitchEmbed } from "react-twitch-embed";

class Twitch extends Component {
  render() {
    return (
      <main role="main" className="container">
        <div
          className="jumbotron"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TwitchEmbed
            channel="general_strange"
            id="general_strange"
            theme="dark"
          />
        </div>
      </main>
    );
  }
}

export default Twitch;
