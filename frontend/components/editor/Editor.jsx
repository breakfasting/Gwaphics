import React from 'react';
import styles from './Editor.module.css';
import EditorNav from './EditorNav';
import DesignDrawer from './DesignDrawer';
import WorkArea from './WorkArea';
import Viewer from './Viewer';

class Editor extends React.Component {
  render() {
    const {
      design, elements, zoom, selected,
    } = this.state;
    // return <Viewer design={design} elements={elements} zoom={zoom} />
    return (
      <h1>Editor</h1>
    );
  }
}

export default Editor;
