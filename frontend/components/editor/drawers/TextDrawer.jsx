import React from 'react';
import DrawerSearch from './DrawerSearch';
import styles from './TextDrawer.module.css';

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

class TextDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { info: false };
  }

  // addElement(shape) {
  //   const { addElement } = this.props;
  //   const element = {
  //     elementableType: 'Shape',
  //     transparency: 1,
  //     zIndex: 0,
  //     posX: 0,
  //     posY: 0,
  //     // _destroy: true
  //     elementableAttributes: {
  //       shape, color: '#c7d0d8', width: 500, height: 500,
  //     },
  //   };
  //   addElement(element);
  // }

  render() {
    return (
      <div className={styles.customScroll}>
        <div className={styles.textDrawer}>
          <DrawerSearch placeholder="Search Text" />
          <h3>Click Text to add to page</h3>
          <div className={styles.highlights}>
            <div className={`${styles.highlightItem} ${styles.heading}`}>
              <p>Add a heading</p>
            </div>
            <div className={`${styles.highlightItem} ${styles.subheading}`}>
              <p>Add a subheading</p>
            </div>
            <div className={`${styles.highlightItem} ${styles.body}`}>
              <p>Add a little bit of body text</p>
            </div>
          </div>
          <h3>Font Combinations</h3>
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
      </div>
    );
  }
}

export default TextDrawer;
