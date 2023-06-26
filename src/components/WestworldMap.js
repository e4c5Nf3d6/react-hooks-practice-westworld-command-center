import React from "react";
import { Segment } from "semantic-ui-react";
import Area from "./Area"

function WestworldMap({ areas, hosts, selectedHost, onSetSelectedHost, onLog }) {
  return <Segment id="map">{areas.map(area => {
    return <Area key={area.id} area={area} hosts={hosts} selectedHost={selectedHost} onSetSelectedHost={onSetSelectedHost} />
  })}</Segment>;
}

export default WestworldMap;
