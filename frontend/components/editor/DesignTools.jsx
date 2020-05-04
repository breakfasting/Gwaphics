import React from 'react';
import styles from './DesignTools.module.css';

class DesignTools extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dropdown: null, selected: {}, selectedId: null };
    this.updateStuff = this.updateStuff.bind(this);
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

  updateStuff(e) {
    e.preventDefault();
    const { selected, selectedId } = this.state;
    const { updateElement } = this.props;
    updateElement(selectedId, selected);
  }

  render() {
    const { selected } = this.state;
    if (Object.keys(selected).length === 0) {
      return (
        <div className={styles.designTools}>
          <span className={styles.nothingSelected}>Nothing selected</span>
        </div>
      );
    }
    return (
      <div className={styles.designTools}>
        <form
          className={styles.designForm}
          onSubmit={this.updateStuff}
        >
          <button type="button" className="btn-color" style={{ backgroundColor: selected.elementableAttributes.color }}> </button>
          <input type="text" className="input-attr" size={selected.elementableAttributes.color.length} value={selected.elementableAttributes.color} onChange={this.changeValue('color')} />
          <span>Width:</span>
          <input type="text" className="input-attr" size={selected.elementableAttributes.width.toString().length} value={selected.elementableAttributes.width} onChange={this.changeValue('width')} />
          <span>Height:</span>
          <input type="text" className="input-attr" size={selected.elementableAttributes.height.toString().length} value={selected.elementableAttributes.height} onChange={this.changeValue('height')} />
          <span>X:</span>
          <input type="text" className="input-attr" size={selected.posX.toString().length} value={selected.posX} onChange={this.changeValue('posX')} />
          <span>Y:</span>
          <input type="text" className="input-attr" size={selected.posY.toString().length} value={selected.posY} onChange={this.changeValue('posY')} />
          <button type="submit" className="btn-color">Submit</button>
        </form>
      </div>
    );
  }
}

export default DesignTools;
