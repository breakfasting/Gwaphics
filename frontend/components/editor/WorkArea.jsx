import React from 'react';
import Design from './Design';
import DesignContainer from './design_container';
import styles from './WorkArea.module.css';
import DesignToolsContainer from './design_tools_container';

// eslint-disable-next-line react/prefer-stateless-function
class WorkArea extends React.Component {
  constructor(props) {
    super(props);
    // this.setWrapperRef = this.setWrapperRef.bind(this);
    // this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  // componentDidMount() {
  //   document.addEventListener('mousedown', this.handleClickOutside);
  // }

  // componentWillUnmount() {
  //   document.removeEventListener('mousedown', this.handleClickOutside);
  // }

  // setWrapperRef(node) {
  //   this.wrapperRef = node;
  // }

  // handleClickOutside(event) {
  //   const { setSelected } = this.props;
  //   if (this.wrapperRef && this.wrapperRef.contains(event.target)) {
  //     console.log('here')
  //     setSelected(null);
  //   }
  // }

  render() {
    const {
      design, elements, zoom, updateElementPos, selected, setSelected, updateElement, selection, setSelection,
    } = this.props;
    if (Object.keys(design).length === 0) return null;
    return (
      <div className={styles.workContainer}>
        <DesignToolsContainer selected={selected} updateElement={updateElement} setSelected={setSelected} selection={selection} />
        <div className={styles.workArea}>
          <div className={styles.designContainer}>
            <DesignContainer
              // elements={elements}
              // design={design}
              zoom={zoom}
              updateElement={updateElement}
              setSelection={setSelection}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default WorkArea;
