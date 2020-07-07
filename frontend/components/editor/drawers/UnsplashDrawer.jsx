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
      popular: true,
    };
    this.addElement = this.addElement.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }

  componentDidMount() {
    const { fetchUnsplashPopular } = this.props;
    fetchUnsplashPopular();
  }

  handleSearch(e) {
    this.setState({ query: e.target.value });
  }

  clearSearch() {
    this.setState({ query: '', popular: true });
  }

  submitSearch(e) {
    e.preventDefault();
    const { fetchUnsplashQuery } = this.props;
    const { page, query } = this.state;
    fetchUnsplashQuery(page, query);
    this.setState({ popular: false });
  }

  addElement({ width, height, full: url }) {
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
    const { popularResults, searchResults, toggleModal } = this.props;
    const { query, popular } = this.state;
    const images = popular ? popularResults : searchResults;
    return (
      <>
        <DrawerSearch
          placeholder="Search millions of photos"
          handleSearch={this.handleSearch}
          handleClear={this.clearSearch}
          value={query}
          handleSubmit={this.submitSearch}
        />
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
                  <ImageItem thumb={image.thumb} id={image.id} image={image} toggleModal={toggleModal} addElement={this.addElement} />
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
