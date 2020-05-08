import React from 'react';
import {
  FiGrid, FiUploadCloud, FiTrash2, FiHeart, FiStar, FiFolderPlus, FiMoreHorizontal,
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import CreateFolderContainer from './create_folder_container';
import EditFolderContainer from './edit_folder_container';
import styles from './AllFolders.module.css';

class AllFolders extends React.Component {
  constructor(props) {
    super(props);
    this.state = { create: null };
    this.toggleModal = this.toggleModal.bind(this);
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    const { requestFolders } = this.props;
    requestFolders();
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  toggleModal(what) {
    const { create } = this.state;
    if (create === null) {
      this.setState({ create: what });
    } else {
      this.setState({ create: null });
    }
  }

  handleClickOutside(event) {
    if (this.wrapperRef
      && !this.wrapperRef.contains(event.target)) {
      this.setState({ create: null });
    }
  }

  render() {
    const { create } = this.state;
    const { folders } = this.props;
    return (
      <>
        <div className={`${styles.indexArea} ${create ? styles.blur : ''}`}>
          <h1 className={styles.indexTitle}>All your folders</h1>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <Link to="/folder/all-designs">
                <button type="button" className="btn-index btn-folder">
                  <div className={styles.iconWrap}>
                    <FiGrid />
                  </div>
                  <span className="ml-16">All your designs</span>
                </button>
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link to="/folder/likes">
                <button type="button" className="btn-index btn-folder">
                  <div className={styles.iconWrap}>
                    <FiHeart />
                  </div>
                  <span className="ml-16">Likes</span>
                </button>
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link to="/folder/uploads">
                <button type="button" className="btn-index btn-folder">
                  <div className={styles.iconWrap}>
                    <FiUploadCloud />
                  </div>
                  <span className="ml-16">Uploads</span>
                </button>
              </Link>
            </li>
            {folders.map((folder) => (
              <li className={styles.listItem} key={folder.id}>
                <Link to={`/folder/${folder.id}`}>
                  <button type="button" className="btn-index btn-folder">
                    <div className={styles.iconWrap}>
                      <FiStar />
                    </div>
                    <span className="ml-16">{folder.name}</span>
                  </button>
                </Link>
                <button type="button" className="btn-item btn-absolute" onClick={() => this.toggleModal(folder)}>
                  <FiMoreHorizontal />
                </button>
              </li>
            ))}
            <li className={styles.listItem}>
              <Link to="/folder/trash">
                <button type="button" className="btn-index btn-folder">
                  <div className={styles.iconWrap}>
                    <FiTrash2 />
                  </div>
                  <span className="ml-16">Trash</span>
                </button>
              </Link>
            </li>
            <li className={styles.listItem}>
              <button type="button" className="btn-index btn-folder" onClick={() => this.toggleModal('create')}>
                <div className={`${styles.iconWrap} ${styles.create}`}>
                  <FiFolderPlus />
                </div>
                <span className="ml-16">Create a folder</span>
              </button>
            </li>
          </ul>
        </div>
        {create
          ? (
            <div className={styles.modalWrap}>
              <div className={styles.boxWrap} ref={this.setWrapperRef}>
                {create === 'create'
                  ? <CreateFolderContainer toggleModal={this.toggleModal} />
                  : <EditFolderContainer toggleModal={this.toggleModal} folder={create} />}
              </div>
            </div>
          ) : ''}
      </>
    );
  }
}

export default AllFolders;
