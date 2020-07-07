import React from 'react';
import DrawerSearch from './DrawerSearch';
import styles from './TextDrawer.module.css';
import scrollbar from './scrollbar.module.css';

const mockupResponse = [ // need default width height and desc to search
  {
    id: 1, text: 'Add a heading', fontWeight: 800, fontSize: 28, fontFamily: 'Open Sans',
  },
  {
    id: 2, text: 'Add a subheading', fontWeight: 400, fontSize: 18, fontFamily: 'Open Sans',
  },
  {
    id: 3, text: 'Add a little bit of body text', fontWeight: 300, fontSize: 12, fontFamily: 'Open Sans',
  },
];

class TextDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { info: false };
  }

  getTextWidth(text, font) {
    const canvas = this.canvas || (this.canvas = document.createElement('canvas'));
    const context = canvas.getContext('2d');
    context.font = font;
    const metrics = context.measureText(text);
    // console.log(text, font, metrics.width);
    return metrics.width;
  }

  addElement({
    text, fontWeight, fontSize, fontFamily,
  }) {
    const { addElement, zoom } = this.props;
    const element = {
      elementableType: 'Text',
      transparency: 1,
      zIndex: 0,
      posX: 0,
      posY: 0,
      // _destroy: true
      elementableAttributes: {
        color: '#000000', text, fontFamily, fontWeight, fontSize, height: fontSize, width: this.getTextWidth(text, `${fontWeight} ${fontSize}px ${fontFamily}`) + 10,
      },
    };
    addElement(element);
  }

  render() {
    return (
      <>
        {/* <DrawerSearch placeholder="Search Text" /> */}
        <div className={scrollbar.customScroll}>
          <div className={styles.textDrawer}>
            <h3>Click Text to add to page</h3>
            <div className={styles.highlights}>
              <div className={`${styles.highlightItem} ${styles.heading}`} onClick={() => this.addElement(mockupResponse[0])}>
                <p>Add a heading</p>
              </div>
              <div className={`${styles.highlightItem} ${styles.subheading}`} onClick={() => this.addElement(mockupResponse[1])}>
                <p>Add a subheading</p>
              </div>
              <div className={`${styles.highlightItem} ${styles.body}`} onClick={() => this.addElement(mockupResponse[2])}>
                <p>Add a little bit of body text</p>
              </div>
            </div>
            <h3>Font Combinations</h3>
            <div className={styles.itemList}>
              {mockupResponse.map((item) => (
                <div key={item.id} className={styles.item} onClick={() => this.addElement(item)}>
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default TextDrawer;
