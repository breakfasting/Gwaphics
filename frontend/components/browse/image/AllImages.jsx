import React from 'react';
import styles from './AllImages.module.css';
import DesignIndexItem from '../DesignIndexItem';

class AllImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: '',
      uploadedFile: null,
      title: 'temp',
      width: 0,
      height: 0,
    };
    this.handleFile = this.handleFile.bind(this);
  }


  componentDidMount() {
    const { fetchUserUploads } = this.props;
    fetchUserUploads();
  }


  handleFile(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () => {
      const image = new Image();
      image.onload = () => {
        this.setState({
          imageUrl: reader.result,
          uploadedFile: file,
          title: file.name,
          width: image.width,
          height: image.height,
        }, this.uploadImage);
      };
      image.src = reader.result;
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: '', uploadedFile: null });
    }
  }

  uploadImage() {
    const {
      title, uploadedFile, width, height,
    } = this.state;
    const { receiveUpload } = this.props;

    const formData = new FormData();
    formData.append('uploaded_image[title]', title);
    if (uploadedFile) {
      formData.append('uploaded_image[image]', uploadedFile);
      formData.append('uploaded_image[width]', width);
      formData.append('uploaded_image[height]', height);
    }
    $.ajax({
      url: '/api/uploaded_images',
      method: 'POST',
      data: formData,
      contentType: false,
      processData: false,
    }).then((payload) => {
      this.setState({ imageUrl: '', uploadedFile: null });
      receiveUpload(payload);
    });
  }

  render() {
    const { images, folder, toggleModal } = this.props;
    const {
      width, height, imageUrl, title,
    } = this.state;
    if (!folder) return null;
    return (
      <div className={styles.indexArea}>
        <div className={styles.titleBar}>
          <h1 className={styles.indexTitle}>{folder.name}</h1>
          <label className={styles.uploadBtnLabel}>
            <span className={styles.uploadBtnText}>Upload</span>
            <input className={styles.hidden} type="file" accept="image/*" onChange={this.handleFile} />
          </label>
        </div>
        {images.length === 0 ? (
          <div className="grey">
            <h2>This folder is full of potential</h2>
          </div>
        ) : (
          <div className={styles.masonry}>
            {imageUrl && (
            <div
              className={styles.masonItem}
              style={{
                flexGrow: (width * 100) / height,
                flexBasis: (width * 240) / height,
              }}
            >
              <i style={{ paddingBottom: `${(height / width) * 100.0}%` }} />
              <DesignIndexItem
                image={{
                  url: imageUrl, title, width, height,
                }}
                temp
              />
            </div>
            )}
            {images.map((image) => (
              <div
                key={image.id}
                className={styles.masonItem}
                style={{
                  flexGrow: (image.width * 100) / image.height,
                  flexBasis: (image.width * 240) / image.height,
                }}
              >
                <i style={{ paddingBottom: `${(image.height / image.width) * 100.0}%` }} />
                <DesignIndexItem image={image} toggleModal={toggleModal} />
                {/* <img src={image.url} alt="" /> */}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default AllImages;
