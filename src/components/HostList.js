import React from "react";
import { Card } from "semantic-ui-react";
import Host from "./Host"

function HostList({ hosts, selectedHost, onSetSelectedHost }) {
  return (
    <Card.Group itemsPerRow={6}>{hosts.map(host => <Host key={host.id} host={host} selectedHost={selectedHost} onSetSelectedHost={onSetSelectedHost} />)}</Card.Group>
  );
}

export default HostList;
