import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>

    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/contact" component={Contact} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
    </div>
  )
}

export default App;