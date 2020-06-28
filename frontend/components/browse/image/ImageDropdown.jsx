import React from 'react';
import { FiTrash2, FiDownload } from 'react-icons/fi';
import styles from '../IndexItemDropdown.module.css';

// download original and trash

class ImageDropdown extends React.Component {
  constructor(props) {
    super(props);
    const { image } = this.props;
    this.state = {
      title: image.title,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(form) {
    return (e) => {
      this.setState({ [form]: e.currentTarget.value });
    };
  }

  handleSubmit() {
    const { updateDesign, design } = this.props;
    const { title } = this.state;
    if (design.title !== title) {
      updateDesign({ id: design.id, title });
    }
  }

  render() {
    const { direction, image } = this.props;
    const { title } = this.state;
    return (
      <div className={styles.dropdownCard} style={{ right: `${direction ? -278 : 10}px` }}>
        <ul className={styles.dropDown}>
          <li className={styles.title}>
            <input className={styles.input} type="text" value={title} onChange={this.handleChange('title')} onBlur={this.handleSubmit} />
          </li>
          <li>
            <hr className={styles.hr} />
          </li>
          <a href={image.url} download>
            <li className={styles.listItem}>
              <FiDownload className={styles.icon} />
              <span className="ml-8">Download</span>
              <small className={styles.hidden}>Original Image</small>
            </li>
          </a>
          <li className={styles.listItem} onClick={this.deleteDesign}>
            <FiTrash2 className={styles.icon} />
            <span className="ml-8">Delete</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default ImageDropdown;
