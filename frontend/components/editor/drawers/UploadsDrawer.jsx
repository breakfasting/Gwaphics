import React from 'react';
import scrollbar from './scrollbar.module.css';
import styles from './UploadsDrawer.module.css';

class UploadsDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: '',
      uploadedFile: null,
      title: 'temp',
      width: 0,
      height: 0,
    };
  }

  componentDidMount() {
    const { fetchUserUploads } = this.props;
    fetchUserUploads();
  }

  render() {
    const { images } = this.props;
    return (
      <>
        <div className={styles.header}>
          <button type="button" className="btn-blue">Upload an Image</button>
        </div>
        <div className={scrollbar.customScroll}>
          <div className={styles.uploadsDrawer}>
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
                  {/* <DesignIndexItem image={image} toggleModal={toggleModal} /> */}
                  <img src={image.url} alt="" />
                </div>
              ))}
            </div>
            {/* {images.map((image) => <img src={image.url} alt="" />)} */}
          </div>
        </div>
      </>
    );
  }
}

export default UploadsDrawer;
