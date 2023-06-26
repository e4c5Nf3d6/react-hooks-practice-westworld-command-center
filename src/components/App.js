import React, {useState, useEffect} from "react";
import { Segment } from "semantic-ui-react";
import "../stylesheets/App.css";
import WestworldMap from "./WestworldMap"
import Headquarters from "./Headquarters"
import { Log } from "../services/Log";

function App() {
  const [hosts, setHosts] = useState([])
  const [areas, setAreas] = useState([])
  const [selectedHost, setSelectedHost] = useState(null)
  const [logs, setLogs] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/areas')
    .then(r => r.json())
    .then(data => setAreas(data))
  }, [])

  useEffect(() => {
    fetch('http://localhost:3001/hosts')
    .then(r => r.json())
    .then(data => setHosts(data))
  }, [])

  function editHostArea(selectedHost, newArea) {
    const hostsInArea = hosts.filter(host => host.area === newArea).length
    const areaLimit = areas.find(area => area.name === newArea).limit

    if (areaLimit > hostsInArea) {
      const updatedHosts = hosts.map(host => {
        if (host.id === selectedHost.id) {
          return {...selectedHost, area: newArea}
        } else {
          return host
        }
      })
      handleLog('notify', `${selectedHost.firstName} set in area ${newArea.split('_').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')}`)
      setHosts(updatedHosts)
      setSelectedHost({...selectedHost, area: newArea})
    } else {
      handleLog('error', `Too many hosts. Cannot add ${selectedHost.firstName} set in area ${newArea.split('_').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')}`)
    }
  }

  function editHostStatus(selectedHost) {
    const updatedHosts = hosts.map(host => {
      if (host.id === selectedHost.id) {
        return {...selectedHost, active: !selectedHost.active}
      } else {
        return host
      }
    })
    setHosts(updatedHosts)
    setSelectedHost({...selectedHost, active: !selectedHost.active})
    if (selectedHost.active === true) {
      handleLog('notify', `Decommissioned ${selectedHost.firstName}`)
    } else {
      handleLog('warn', `Activated ${selectedHost.firstName}`)
    }
  }

  function handleActivationChange(activationStatus) {
    const updatedHosts = hosts.map(host => {
      return ({
        ...host,
        active: activationStatus
      })
    })
    setHosts(updatedHosts)
  }

  function handleLog(type, message) {
    const updatedLogs = [Log[type](message), ...logs];
    setLogs(updatedLogs)
  }

  return (
    <Segment id="app">
      <WestworldMap 
        areas={areas}
        hosts={hosts}
        selectedHost={selectedHost} 
        onSetSelectedHost={setSelectedHost} 
        onLog={handleLog}
      />
      <Headquarters 
        hosts={hosts} 
        selectedHost={selectedHost} 
        onSetSelectedHost={setSelectedHost} 
        areas={areas} 
        onEditHostArea={editHostArea}
        onEditHostStatus={editHostStatus}
        onActivationChange={handleActivationChange}
        logs={logs}
        onLog={handleLog}
      />
    </Segment>
  );
}

export default App;
