import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
import { Header } from './Header';
import { Top } from './Top';
import { DailyTop } from './daily/pages/DailyTop';
import { CategoryView } from './daily/pages/CategoryView';
import { DailyDetail } from './daily/pages/DailyDetail';
import { TaskTop } from './task/pages/TaskTop';
import { TaskFinished } from './task/pages/TaskFinished';

export const App = () => {  
  return(
    <div>
      {/* <Router>*/}
      <HashRouter>
        <Header />
        <div>
          <Switch>
              <Route exact path='/' component={Top} />
              <Route exact path='/daily' component={DailyTop} />
              <Route exact path='/daily/:id' component={DailyDetail} />
              <Route exact path='/daily/category/:cat' component={CategoryView} />
              <Route exact path='/task' component={TaskTop} />
              <Route exact path='/task/finished' component={TaskFinished} />
              <Route render={() => <h4>not found...</h4>} />
          </Switch>
        </div>
      </HashRouter>
    </div>
  )  
}