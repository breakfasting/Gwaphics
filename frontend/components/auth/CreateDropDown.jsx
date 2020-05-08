import React from 'react';
import { FiPlus, FiInstagram, FiFacebook, FiAirplay, FiCreditCard, FiImage, FiSmile } from 'react-icons/fi';
import dropdownStyles from './UserDropDown.module.css';
import styles from './CreateDropDown.module.css';

const mockupResponse = [
  {
    id: 1, name: 'Poster', description: '18 x 24 in', width: 1728, height: 2304, icon: <FiImage />,
  },
  {
    id: 2, name: 'Facebook Post', description: '940 x 788 px', width: 940, height: 788, icon: <FiFacebook />,
  },
  {
    id: 3, name: 'Facebook Cover', description: '820 x 312 px', width: 820, height: 312, icon: <FiFacebook />,
  },
  {
    id: 4, name: 'Presentation', description: '1920 x 1080 px', width: 1920, height: 1080, icon: <FiAirplay />,
  },
  {
    id: 5, name: 'Instagram Post', description: '1080 x 1080 px', width: 1080, height: 1080, icon: <FiInstagram />,
  },
  {
    id: 6, name: 'Business Card', description: '3.5 x 2 in', width: 336, height: 192, icon: <FiCreditCard />,
  },
  {
    id: 7, name: 'Logo', description: '500 x 500 px', width: 500, height: 500, icon: <FiSmile />,
  },
];

class CreateDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animate: false, custom: false, width: '', height: '',
    };
    this.toggleCustom = this.toggleCustom.bind(this);
    this.submitCustom = this.submitCustom.bind(this);
  }

  componentDidMount() {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this.setState({ animate: true });
      });
    });
  }

  createDesign(item) {
    const { createDesign, currentUser, history } = this.props;
    const design = {
      creatorId: currentUser.id,
      title: `Untitled Design - ${item.name}`,
      description: '',
      public: false,
      width: item.width,
      height: item.height,
    };
    createDesign(design).then((res) => {
      history.push(`/design/${res.payload.design.id}`);
    });
  }

  submitCustom() {
    const { width, height } = this.state;
    this.createDesign({ width, height, name: 'Custom Design' });
  }

  toggleCustom() {
    const { custom } = this.state;
    this.setState({ custom: !custom });
  }

  handleChange(form) {
    return (e) => {
      this.setState({ [form]: e.currentTarget.value });
    };
  }

  render() {
    const {
      animate, custom, width, height,
    } = this.state;
    const error = width < 40 || width > 8000 || height < 40 || height > 8000;
    return (
      <div className={`${dropdownStyles.dropdownCard} ${animate ? dropdownStyles.animate : ''}`}>
        <ul className={styles.createDropDown}>
          <li className={styles.listItem} onClick={this.toggleCustom}>
            <FiPlus className={custom ? `${styles.rotate} ${styles.icon}` : styles.icon} />
            <span className="ml-8">Custom Dimensions</span>
          </li>
          {custom ? (
            <div className={styles.customForm}>
              <li className={styles.custom}>
                <input
                  type="number"
                  style={width !== '' && (width < 40 || width > 8000) ? { border: '1px solid red' } : {}}
                  inputMode="numeric"
                  pattern="\d*"
                  name="width"
                  placeholder="Width"
                  onChange={this.handleChange('width')}
                />
                <input
                  type="number"
                  style={height !== '' && (height < 40 || height > 8000) ? { border: '1px solid red' } : {}}
                  inputMode="numeric"
                  pattern="\d*"
                  name="height"
                  placeholder="Height"
                  onChange={this.handleChange('height')}
                />
                <div>px</div>
              </li>
              {(width !== '' || height !== '') && error ? <li className={styles.error}>Dimensions must be at least 40px and no more than 8000px.</li> : ''}
              <li className={styles.submit}>
                <button type="submit" className="btn-blue" onClick={this.submitCustom} disabled={error}>
                  Create Design
                </button>
              </li>
            </div>
          ) : (
            <>
              {mockupResponse.map((item) => (
                <li
                  key={item.id}
                  className={styles.listItem}
                  onClick={() => this.createDesign(item)}
                >
                  {item.icon}
                  <span className="ml-8">{item.name}</span>
                  <small className={styles.hidden}>{item.description}</small>
                </li>
              ))}
            </>
          )}
        </ul>
      </div>
    );
  }
}

export default CreateDropDown;
