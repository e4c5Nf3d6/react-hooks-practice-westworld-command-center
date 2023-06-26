import React from "react";
import "../stylesheets/Area.css";
import HostList from "./HostList"

function Area({ area, hosts, selectedHost, onSetSelectedHost }) {
  const activeAreaHosts = hosts.filter(host => {
    return host.area === area.name && host.active === true
  })

  return (
    <div
      className="area"
      id={area.name}
    >
      <h3 className="labels">
        {area.name.split('_').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')}
      </h3>
      {<HostList hosts={activeAreaHosts} selectedHost={selectedHost} onSetSelectedHost={onSetSelectedHost} />}
    </div>
  );
}

// Area.propTypes = {
//   hosts: function (props) {
//     if (props.hosts.length > props.limit) {
//       throw Error(
//         `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
//       );
//     }
//   },
// };

export default Area;
