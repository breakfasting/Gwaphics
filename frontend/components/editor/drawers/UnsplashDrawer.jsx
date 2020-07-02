import React from 'react';
import DrawerSearch from './DrawerSearch';
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
    const { images } = this.props;
    return (
      <>
        <DrawerSearch placeholder="Search millions of photos" />
        <div className={scrollbar.customScroll}>
          <div className={styles.unsplashDrawer}>
            {console.log(images)}
          </div>
        </div>
      </>
    );
  }
}

export default UnsplashDrawer;
