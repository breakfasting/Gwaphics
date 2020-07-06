import React from 'react';
import DrawerSearch from './DrawerSearch';
import ImageItem from './ImageItem';
import scrollbar from './scrollbar.module.css';
import styles from './UnsplashDrawer.module.css';

class UnsplashDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      page: 1,
    };
  }

  componentDidMount() {
    const { fetchUnsplashPopular } = this.props;
    fetchUnsplashPopular();
  }

  render() {
    const { images, toggleModal } = this.props;
    return (
      <>
        <DrawerSearch placeholder="Search millions of photos" />
        <div className={scrollbar.customScroll}>
          <div className={styles.unsplashDrawer}>
            <div className={styles.masonry}>
              {images.map((image) => (
                <div
                  key={image.id}
                  className={styles.masonItem}
                  style={{
                    flexGrow: (image.width * 85) / image.height,
                    flexBasis: (image.width * 95) / image.height,
                  }}
                >
                  <i style={{ paddingBottom: `${(image.height / image.width) * 100.0}%` }} />
                  <ImageItem thumb={image.thumb} id={image.id} toggleModal={toggleModal} />
                  {/* <DesignIndexItem image={image} toggleModal={toggleModal} /> */}
                  {/* <img src={image.thumb} alt="" onClick={() => this.addElement(image)} className={styles.image} /> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default UnsplashDrawer;
