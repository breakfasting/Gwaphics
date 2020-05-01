import React from 'react';
import styles from './Editor.module.css';
import EditorNav from './EditorNav';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      design: {}, // design attributes
      elements: [{}], // key-value pair elementId and the current element, array index=z-index order
      undoHistory: [] // array of key-value pair of elementId and the element copy before changing
    };
  }

  render() {
    return (
      <div className={styles.editorContainer}>
        <EditorNav />
        <div>
          {/* <DesignDrawer />
          <WorkArea /> */}
        </div>
      </div>
    );
  }
}

export default Editor;
