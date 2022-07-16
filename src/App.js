import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BasicView from './components/BasicView'
import AdvancedView from './components/AdvancedView';
// import Graph from './components/Graph';
import { Connector } from 'mqtt-react-hooks';




function App() {

  return (
    <Router>
      <Switch>



        <Route exact path='/'>
            <BasicView />
         


        </Route>
        <Route exact path='/advancedview'>
          <AdvancedView />

        </Route>






      </Switch>
    </Router>
  );
}

export default App;
