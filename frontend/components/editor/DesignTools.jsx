import React from 'react';
import styles from './DesignTools.module.css';

class DesignTools extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dropdown: null, selected: {}, selectedId: null };
  }

  componentDidUpdate(prevProps) {
    const { selected } = this.props;
    if (Object.keys(prevProps.selected)[0] !== Object.keys(selected)[0]) {
      this.updateSelected();
    }
  }

  updateSelected() {
    const { selected } = this.props;
    this.setState({ selected: Object.values(selected)[0], selectedId: Object.keys(selected)[0] });
  }

  changeValue(attr) {
    if (attr === 'color' || attr === 'height' || attr === 'width') {
      return (e) => {
        const { selected } = this.state;
        selected.elementableAttributes[attr] = e.target.value;
        this.setState({ selected });
      };
    }
    return (e) => {
      this.setState({ selected: { [attr]: e.target.value } });
    };
  }

  render() {
    const { selected, selectedId } = this.state;
    const { updateElement } = this.props;
    if (Object.keys(selected).length === 0) {
      return (
        <div className={styles.designTools}>
          Nothing selected
        </div>
      );
    }
    return (
      <div className={styles.designTools}>
        <button type="button" className="btn-color"> </button>
        <form onSubmit={() => updateElement(selectedId, selected)}>
          <input type="text" value={selected.elementableAttributes.color} onChange={this.changeValue('color')} />
        </form>
      </div>
    );
  }
}

export default DesignTools;
