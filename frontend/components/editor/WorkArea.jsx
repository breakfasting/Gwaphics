import React from 'react';
import styles from './WorkArea.module.css';

// eslint-disable-next-line react/prefer-stateless-function
class WorkArea extends React.Component {
  render() {
    const { design, elements } = this.props;
    if (!design) return null;
    return (
      <div className={styles.workArea}>
        <div className={styles.designContainer}>
          <div className={styles.design} style={{ width: design.width, height: design.height }}>
            design
          </div>
        </div>
      </div>
    );
  }
}

export default WorkArea;
