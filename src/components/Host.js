import React from "react";
import { Card } from "semantic-ui-react";
import "../stylesheets/Host.css";

function Host({ host, selectedHost, onSetSelectedHost }) {
  return (
    <Card
      className={selectedHost === host ? "host selected" : "host"}
      onClick={() => onSetSelectedHost(host)}
      image={host.imageUrl}
      raised
      link
    />
  );
}

export default Host;
