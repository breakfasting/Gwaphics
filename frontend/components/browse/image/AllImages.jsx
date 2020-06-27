import React from 'react';
import styles from './AllImages.module.css';

class AllImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadedFile: null,
    };
  }

  componentDidMount() {
    // const { fetchUserUploads } = this.props;
    // fetchUserUploads();
  }

  render() {
    const { images, folder } = this.props;
    if (!folder) return null;
    return (
      <div className={styles.indexArea}>
        <div className={styles.titleBar}>
          <h1 className={styles.indexTitle}>{folder.name}</h1>
          <button type="button" className="btn-outline">
            <span className={styles.uploadBtnText}>Upload</span>
          </button>
        </div>
        {images.length === 0 ? (
          <div className="grey">
            <h2>This folder is full of potential</h2>
          </div>
        ) : (
          // <div className={styles.masonry}>
          //   {designs.map((design) => (
          //     <div
          //       key={design.id}
          //       className={styles.masonItem}
          //       style={{
          //         flexGrow: (design.width * 100) / design.height,
          //         flexBasis: (design.width * 240) / design.height,
          //       }}
          //     >
          //       <i style={{ paddingBottom: `${(design.height / design.width) * 100.0}%` }} />
          //       <DesignIndexItem design={design} />
          //     </div>
          //   ))}
          // </div>
          null
        )}
      </div>
    );
  }
}

export default AllImages;
