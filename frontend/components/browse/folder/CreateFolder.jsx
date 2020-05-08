import React from 'react';
import styles from './CreateFolder.module.css';

class CreateFolder extends React.Component {
  constructor(props) {
    super(props);
    const { folder } = this.props;
    this.state = {
      animate: false, name: folder.name,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteFolder = this.deleteFolder.bind(this);
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
    const { action, toggleModal, folder } = this.props;
    action({ id: folder.id, name }).then(toggleModal);
  }

  handleChange(form) {
    return (e) => {
      this.setState({ [form]: e.currentTarget.value });
    };
  }

  deleteFolder() {
    const { folder, deleteFolder, toggleModal } = this.props;
    deleteFolder(folder.id).then(toggleModal);
  }

  render() {
    const { animate, name } = this.state;
    const { formType } = this.props;
    return (
      <div className={`${styles.dropdownCard} ${animate ? styles.animate : ''}`}>
        <ul className={styles.createDropDown}>
          <form className={styles.customForm}>
            <li className={styles.title}>
              <h2>{formType}</h2>
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
            {formType === 'Edit Folder' ? (
              <li className={styles.submit}>
                <button type="button" className="btn-blue" onClick={this.deleteFolder}>
                  Delete Folder
                </button>
              </li>
            ) : ''}
            <li className={styles.submit}>
              <button type="submit" className="btn-blue" onClick={this.handleSubmit}>
                {formType}
              </button>
            </li>
          </form>
        </ul>
      </div>
    );
  }
}

export default CreateFolder;
