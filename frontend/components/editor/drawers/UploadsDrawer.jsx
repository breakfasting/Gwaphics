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

  addElement({ width, height, url }) {
    const { addElement } = this.props;
    const element = {
      elementableType: 'Image',
      transparency: 1,
      zIndex: 0,
      posX: 0,
      posY: 0,
      elementableAttributes: {
        url, width, height,
      },
    };
    addElement(element);
  }

  render() {
    const { images } = this.props;
    const { width, height, imageUrl } = this.state;
    return (
      <>
        <div className={styles.header}>
          <label htmlFor="upload-button" className={styles.uploadBtn}>
            Upload an Image
            <input id="upload-button" className={styles.hidden} type="file" accept="image/*" onChange={this.handleFile} />
          </label>
          {/* <button type="button" className="btn-blue">Upload an Image</button> */}
        </div>
        <div className={scrollbar.customScroll}>
          <div className={styles.uploadsDrawer}>
            <div className={styles.masonry}>
              {imageUrl && (
                <div
                  className={styles.masonItem}
                  style={{
                    flexGrow: (width * 85) / height,
                    flexBasis: (width * 95) / height,
                  }}
                >
                  <i style={{ paddingBottom: `${(height / width) * 100.0}%` }} />
                  <img className={styles.tempImg} src={imageUrl} alt="" />
                  <div className={styles.temp}>
                    <div className={styles.loader} />
                  </div>
                </div>
              )}
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
                  <img src={image.url} alt="" onClick={() => this.addElement(image)} className={styles.image} />
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
