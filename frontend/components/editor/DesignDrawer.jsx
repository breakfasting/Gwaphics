import React from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import ToolsNav from './ToolsNav';
import ElementsDrawer from './drawers/ElementsDrawer';
import TextDrawer from './drawers/TextDrawer';
import UploadsDrawerContainer from './drawers/uploads_drawer_container';
import UnsplashDrawerContainer from './drawers/unsplash_drawer_container';
import EmptyDrawer from './drawers/EmptyDrawer';
import styles from './DesignDrawer.module.css';

class DesignDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { drawer: 1, closed: false, animate: true };
    this.changeDrawer = this.changeDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
  }

  changeDrawer(id) {
    const { closed } = this.state;
    if (closed) {
      this.setState({ drawer: id, closed: false, animate: false });
    } else {
      this.setState({ drawer: id, closed: false, animate: true });
    }
  }

  closeDrawer() {
    this.setState({ closed: true });
  }

  render() {
    const { addElement, zoom } = this.props;
    const { drawer, closed, animate } = this.state;
    const drawers = [
      <EmptyDrawer />,
      <UnsplashDrawerContainer addElement={addElement} />,
      <ElementsDrawer addElement={addElement} />,
      <TextDrawer addElement={addElement} zoom={zoom} />,
      // <EmptyDrawer />,
      <UploadsDrawerContainer addElement={addElement} />,
      <EmptyDrawer />,
      <EmptyDrawer />,
    ];
    return (
      <div className={styles.designDrawer}>
        <ToolsNav
          changeDrawer={this.changeDrawer}
          current={drawer}
          closed={closed}
          animate={animate}
        />
        <div className={`${styles.drawer} ${closed ? '' : styles.showDrawer}`}>
          {drawers[drawer]}
        </div>
        <div className={styles.handle}>
          <button type="button" className={`${styles.container} btn-none`} onClick={this.closeDrawer}>

            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" viewBox="199 149 104 404" width="20" height="80">
              <defs><path d="M200 550C200.3 533.74 216.97 517.07 250 500C283.03 482.93 299.7 466.26 300 450L300 250C299.67 233.13 283 216.46 250 200C217 183.54 200.33 166.87 200 150L200 550Z" id="fEGO0r42v" /></defs>
              <g>
                <g>
                  <use xlinkHref="#fEGO0r42v" opacity="1" fill="#293039" fillOpacity="1" />
                  <g><use xlinkHref="#fEGO0r42v" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="0" strokeOpacity="1" /></g>
                </g>
              </g>
            </svg>
            <div className={styles.handleIcon}>
              <FiChevronLeft />
            </div>
          </button>
        </div>
      </div>
    );
  }
}

export default DesignDrawer;
