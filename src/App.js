import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MorningWorkout from './To_List/Morning_Workout';
import Sports_Time from './To_List/Sports_Time';
import Study from './To_List/Study';
import Daily from './To_List/Daily';

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          {/* Route for MorningWorkout */}
          <Route exact path="/" component={MorningWorkout} />
          {/* Routes for other components */}
          <Route path="/sports" component={Sports_Time} />
          <Route path="/study" component={Study} />
          <Route path="/daily" component={Daily} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
