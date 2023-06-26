import React, { useState } from "react";
import { Segment, Button } from "semantic-ui-react";

function LogPanel({ onActivationChange, logs, onLog }) {
  const [allActivated, setAllActivated] = useState(false)

  function handleActivation() {
    setAllActivated(!allActivated)
    onActivationChange(!allActivated)
    onLog('warn', allActivated ? 'Decommissiong all hosts.' : "Activating all hosts!")
  }

  return (
    <Segment className="HQComps" id="logPanel">
      <pre>
        {logs ? logs.map((log, i) => (
          <p key={i} className={log.type}>
            {log.msg}
          </p>
        )) : null}
      </pre>

      <Button 
        fluid 
        color={allActivated? "green" : "red"} 
        content={allActivated ? "DECOMMISSION ALL" : "ACTIVATE ALL"} 
        onClick={handleActivation}
      />
    </Segment>
  );
}

export default LogPanel;
