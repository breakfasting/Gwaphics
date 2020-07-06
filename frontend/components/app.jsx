import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BrowseContainer from './browse_container';
import EditorContainer from './editor/editor_container';
import ViewerContainer from './editor/viewer_container';
import ExternalImageModalContainer from './modal/external_image_modal_container';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    const { externalModal, toggleModal } = this.props;
    return (
      <>
        <div className="main">
          <Switch>
            <Route path="/design/:id" component={EditorContainer} />
            <Route path="/view/:id" component={ViewerContainer} />
            <Route path="/" component={BrowseContainer} />
          </Switch>
        </div>
        <ExternalImageModalContainer
          active={externalModal}
          toggleModal={(id) => toggleModal('externalModal', id)}
          external
        />
      </>
    );
  }
}

export default App;
