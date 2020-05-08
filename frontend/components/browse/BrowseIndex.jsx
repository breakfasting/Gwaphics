import React from 'react';
import {
  FiGrid, FiUploadCloud, FiTrash2, FiFolder, FiHome, FiHeart, FiStar,
} from 'react-icons/fi';
import { Link, Route, Switch } from 'react-router-dom';
import AllDesignsContainer from './all_designs_container';
import AllFoldersContainer from './folder/all_folders_container';
import styles from './BrowseIndex.module.css';

class BrowseIndex extends React.Component {
  componentDidMount() {
    const { requestFolders } = this.props;
    requestFolders();
  }

  render() {
    const { location, folders } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.sideBar}>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <Link to="/">
                <button type="button" className={`${location.pathname === '/' ? 'active-route' : ''} btn-index`}>
                  <FiHome />
                  <span className="ml-16">Recommended for you</span>
                </button>
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link to="/folder/all-designs">
                <button type="button" className={`${location.pathname === '/folder/all-designs' ? 'active-route' : ''} btn-index`}>
                  <FiGrid />
                  <span className="ml-16">All your designs</span>
                </button>
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link to="/folder">
                <button type="button" className={`${location.pathname === '/folder' ? 'active-route' : ''} btn-index`}>
                  <FiFolder />
                  <span className="ml-16">All your folders</span>
                </button>
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link to="/folder/likes">
                <button type="button" className={`${location.pathname === '/folder/likes' ? 'active-route' : ''} btn-index`}>
                  <FiHeart />
                  <span className="ml-16">Likes</span>
                </button>
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link to="/folder/uploads">
                <button type="button" className={`${location.pathname === '/folder/uploads' ? 'active-route' : ''} btn-index`}>
                  <FiUploadCloud />
                  <span className="ml-16">Uploads</span>
                </button>
              </Link>
            </li>
            {folders.map((folder) => (
              <li className={styles.listItem}>
                <Link to={`/folder/${folder.id}`}>
                  <button type="button" className={`${location.pathname === `/folder/${folder.id}` ? 'active-route' : ''} btn-index`}>
                    <FiStar />
                    <span className="ml-16">{folder.name}</span>
                  </button>
                </Link>
              </li>
            ))}
            <li className={styles.listItem}>
              <Link to="/folder/trash">
                <button type="button" className={`${location.pathname === '/folder/trash' ? 'active-route' : ''} btn-index`}>
                  <FiTrash2 />
                  <span className="ml-16">Trash</span>
                </button>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.main}>
          <Switch>
            <Route path="/folder/all-designs" component={AllDesignsContainer} />
            <Route path="/folder" component={AllFoldersContainer} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default BrowseIndex;
