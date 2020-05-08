import React from 'react';
import { Link } from 'react-router-dom';
import {
  FiTrash2, FiFolder, FiLink, FiEyeOff, FiEye, FiDownload,
} from 'react-icons/fi';
import styles from './IndexItemDropdown.module.css';

class IndexItemDropdown extends React.Component {
  constructor(props) {
    super(props);
    const { design } = this.props;
    this.state = {
      animate: false,
      title: design.title,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.togglePublic = this.togglePublic.bind(this);
  }

  componentDidMount() {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this.setState({ animate: true });
      });
    });
  }

  componentWillUnmount() {
    this.handleSubmit();
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

  togglePublic() {
    const { updateDesign, design } = this.props;
    updateDesign({ id: design.id, public: !design.public });
  }

  // createDesign(item) {
  //   const { createDesign, currentUser, requestDesign, history, design, elements } = this.props;
  //   const newDesign = {
  //     creatorId: currentUser.id,
  //     title: item.name,
  //     description: item.description,
  //     public: false,
  //     width: item.width,
  //     height: item.height,
  //   };
  //   requestDesign(item.id).then(() => {
  //     debugger;
  //   });

  //   createDesign(design).then((res) => {
  //     history.push(`/design/${res.payload.design.id}`);
  //   });
  // }

  render() {
    const { animate, title } = this.state;
    const { design } = this.props;
    return (
      <div className={`${styles.dropdownCard} ${animate ? styles.animate : ''}`}>
        <ul className={styles.dropDown}>
          <li className={styles.title}>
            <input className={styles.input} type="text" value={title} onChange={this.handleChange('title')} onBlur={this.handleSubmit} />
          </li>
          <li>
            <hr className={styles.hr} />
          </li>
          {/* <li className={styles.listItem} onClick={() => this.createDesign(design)}>
            <FiCopy className={styles.icon} />
            <span className="ml-8">Make a copy</span>
          </li> */}
          <li className={styles.listItem} onClick={this.togglePublic}>
            {design.public ? (
              <>
                <FiEyeOff className={styles.icon} />
                <span className="ml-8">Make design private</span>
              </>
            ) : (
              <>
                <FiEye className={styles.icon} />
                <span className="ml-8">Make design public</span>
              </>
            )}

          </li>
          <li className={styles.listItem} onClick={this.toggleCustom}>
            <FiFolder className={styles.icon} />
            <span className="ml-8">Move to folder</span>
          </li>
          <a href={design.thumbnail} download>
            <li className={styles.listItem}>
              <FiDownload className={styles.icon} />
              <span className="ml-8">Download</span>
              <small className={styles.hidden}>Full size PNG</small>
            </li>
          </a>
          <Link to={`/view/${design.id}`}>
            <li className={styles.listItem}>
              <FiLink className={styles.icon} />
              <span className="ml-8">Get shareable link</span>
            </li>
          </Link>
          <li className={styles.listItem} onClick={this.toggleCustom}>
            <FiTrash2 className={styles.icon} />
            <span className="ml-8">Move to Trash</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default IndexItemDropdown;
