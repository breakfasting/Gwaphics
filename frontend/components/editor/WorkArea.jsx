import React from 'react';
import Design from './Design';
import styles from './WorkArea.module.css';
import DesignTools from './DesignTools';

// eslint-disable-next-line react/prefer-stateless-function
class WorkArea extends React.Component {
  render() {
    const {
      design, elements, zoom, updateElementPos, selected, setSelected, updateElement,
    } = this.props;
    if (Object.keys(design).length === 0) return null;
    return (
      <div className={styles.workArea}>
        <DesignTools selected={selected} updateElement={updateElement} setSelected={setSelected} />
        <div className={styles.designContainer}>
          <Design
            elements={elements}
            design={design}
            selected={selected}
            zoom={zoom}
            updateElementPos={updateElementPos}
            setSelected={setSelected}
          />
        </div>
      </div>
    );
  }
}

export default WorkArea;
