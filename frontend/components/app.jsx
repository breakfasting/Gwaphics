import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Browse from './Browse';
import EditorContainer from './editor/editor_container';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    const { mode } = this.props;
    return (
      <div className="main">
        <Switch>
          <Route path="/design/:id" component={EditorContainer} />
          <Route path="/" component={Browse} mode={mode} />
        </Switch>
      </div>
    );
  }
}

export default App;
