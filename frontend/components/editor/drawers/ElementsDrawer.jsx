import React from 'react';
import DrawerSearch from './DrawerSearch';
import styles from './ElementsDrawer.module.css';
import scrollbar from './scrollbar.module.css';


class ElementsDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { info: false };
  }

  addElement(shape) {
    const { addElement } = this.props;
    const element = {
      elementableType: 'Shape',
      transparency: 1,
      zIndex: 0,
      posX: 0,
      posY: 0,
      // _destroy: true
      elementableAttributes: {
        shape, color: '#c7d0d8', width: 500, height: 500,
      },
    };
    addElement(element);
  }

  render() {
    const mockupResponse = [ // need default width height and desc to search
      { id: 1, shape: 'circle', url: window.circle },
      { id: 2, shape: 'rectangle', url: window.rectangle },
      { id: 3, shape: 'triangle', url: window.triangle },
      { id: 4, shape: 'hexagon', url: window.hexagon },
      { id: 5, shape: 'pentagon', url: window.pentagon },
      { id: 6, shape: 'rounded-square', url: window.roundedSquare },
      { id: 7, shape: 'heart', url: window.heart },
      { id: 8, shape: 'star', url: window.star },
      { id: 9, shape: 'right-triangle', url: window.rightTriangle },
    ];
    return (
      <>
        {/* <DrawerSearch placeholder="Search icons and shapes" /> */}
        <div className={scrollbar.customScroll}>
          <div className={styles.elementsDrawer}>
            <div className={styles.itemList}>
              {mockupResponse.map((item) => (
                <div
                  key={item.id}
                  className={styles.item}
                  onClick={() => this.addElement(item.shape)}
                >
                  <svg>
                    <use href={item.url} />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ElementsDrawer;
