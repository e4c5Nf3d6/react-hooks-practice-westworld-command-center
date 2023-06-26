import React from "react";
import { Segment } from "semantic-ui-react";
import HostList from "./HostList";

function ColdStorage({ hosts, selectedHost, onSetSelectedHost }) {
  return (
    <Segment.Group className="HQComps">
      <Segment compact>
        <h3 className="labels">ColdStorage</h3>
      </Segment>
      <Segment compact>
        {<HostList hosts={hosts} selectedHost={selectedHost} onSetSelectedHost={onSetSelectedHost} />}
      </Segment>
    </Segment.Group>
  );
}

export default ColdStorage;
