import React from "react";
import { Grid } from "semantic-ui-react";
import Details from "./Details";
import "../stylesheets/Headquarters.css";
import ColdStorage from "./ColdStorage"
import LogPanel from "./LogPanel"

function Headquarters({ hosts, selectedHost, onSetSelectedHost, areas, onEditHostArea, onEditHostStatus, onActivationChange, logs, onLog }) {

  const inactiveHosts = hosts.filter(host => host.active === false)

  return (
    <Grid celled="internally">
      <Grid.Column width={8}>{<ColdStorage hosts={inactiveHosts} selectedHost={selectedHost} onSetSelectedHost={onSetSelectedHost} />}</Grid.Column>
      <Grid.Column width={5}>
        <Details 
          selectedHost={selectedHost}
          areas={areas} 
          onEditHostArea={onEditHostArea}
          onEditHostStatus={onEditHostStatus} 
        />
      </Grid.Column>
      <Grid.Column width={3}>
        {<LogPanel onActivationChange={onActivationChange} logs={logs} onLog={onLog} />}
      </Grid.Column>
    </Grid>
  );
}

export default Headquarters;
