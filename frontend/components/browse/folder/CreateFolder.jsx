import React from 'react';
import styles from './CreateFolder.module.css';

class CreateFolder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animate: false, name: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this.setState({ animate: true });
      });
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name } = this.state;
    const { createFolder, toggleCreate } = this.props;
    createFolder({ name }).then(toggleCreate);
  }

  handleChange(form) {
    return (e) => {
      this.setState({ [form]: e.currentTarget.value });
    };
  }

  render() {
    const { animate, name } = this.state;
    return (
      <div className={`${styles.dropdownCard} ${animate ? styles.animate : ''}`}>
        <ul className={styles.createDropDown}>
          <form className={styles.customForm}>
            <li className={styles.title}>
              <h2>Create new folder</h2>
            </li>
            <li className={styles.custom}>
              <input
                type="text"
                name="name"
                placeholder="Folder Name"
                value={name}
                onChange={this.handleChange('name')}
              />
            </li>
            <li className={styles.submit}>
              <button type="submit" className="btn-blue" onClick={this.handleSubmit}>
                Create Folder
              </button>
            </li>
          </form>
        </ul>
      </div>
    );
  }
}

export default CreateFolder;
