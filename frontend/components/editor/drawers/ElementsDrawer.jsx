import React from 'react';
import styles from './ElementsDrawer.module.css';
import DrawerSearch from './DrawerSearch';

const mockupResponse = [ // need default width height and desc to search
  { id: 1, shape: 'circle', url: './assets/shapes/circle.svg#svg' },
  { id: 2, shape: 'rectangle', url: './assets/shapes/rectangle.svg#svg' },
  { id: 3, shape: 'triangle', url: './assets/shapes/triangle.svg#svg' },
  { id: 4, shape: 'hexagon', url: './assets/shapes/hexagon.svg#svg' },
  { id: 5, shape: 'pentagon', url: './assets/shapes/pentagon.svg#svg' },
  { id: 6, shape: 'rounded-square', url: './assets/shapes/rounded-square.svg#svg' },
  { id: 7, shape: 'heart', url: './assets/shapes/heart.svg#svg' },
  { id: 8, shape: 'star', url: './assets/shapes/star.svg#svg' },
  { id: 9, shape: 'right-triangle', url: './assets/shapes/right-triangle.svg#svg' },
];

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
    return (
      <div className={styles.elementsDrawer}>
        <DrawerSearch placeholder="Search icons and shapes" />
        <div className={styles.itemList}>
          {mockupResponse.map((item) => (
            <div key={item.id} className={styles.item} onClick={() => this.addElement(item.shape)}>
              <svg>
                <use href={item.url} />
              </svg>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ElementsDrawer;
