import React from 'react';
import Design from './Design';
import styles from './WorkArea.module.css';

// eslint-disable-next-line react/prefer-stateless-function
class WorkArea extends React.Component {
  render() {
    const {
      design, elements, zoom,
    } = this.props;
    if (Object.keys(design).length === 0) return null;
    return (
      <div className={styles.workArea}>
        <div className={styles.designContainer}>
          <Design elements={elements} design={design} zoom={zoom} />
        </div>
      </div>
    );
  }
}

export default WorkArea;
