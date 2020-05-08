import React from 'react';
import styles from './DesignTools.module.css';

class DesignTools extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dropdown: null, selected: {}, selectedId: null };
    this.updateStuff = this.updateStuff.bind(this);
    this.deleteElement = this.deleteElement.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { selected } = this.props;
    if (Object.keys(prevProps.selected)[0] !== Object.keys(selected)[0]) {
      this.updateSelected();
    }
  }

  updateSelected() {
    const { selected } = this.props;
    if (Object.keys(selected).length === 0) {
      this.setState({ selected: {}, selectedId: null });
    } else {
      this.setState({ selected: Object.values(selected)[0], selectedId: Object.keys(selected)[0] });
    }
  }

  changeValue(attr) {
    if (attr === 'posX' || attr === 'posY' || attr === 'transparency' || attr === 'zIndex') {
      return (e) => {
        const { selected } = this.state;
        selected[attr] = e.target.value;
        this.setState({ selected });
      };
    }
    return (e) => {
      const { selected } = this.state;
      selected.elementableAttributes[attr] = e.target.value;
      this.setState({ selected });
    };
  }

  deleteElement() {
    const { selected, selectedId } = this.state;
    const { updateElement, setSelected } = this.props;
    selected._destroy = true;
    updateElement(selectedId, selected);
    setSelected(null);
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
          onChange={this.updateStuff}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className={styles.leftNav}>
            <button type="button" className="btn-color" style={{ backgroundColor: selected.elementableAttributes.color }}> </button>
            <input type="text" className="input-attr" size={selected.elementableAttributes.color.length + 1} value={selected.elementableAttributes.color} onChange={this.changeValue('color')} />
            {selected.elementableType === 'Shape' ? (
              <>
                <span>Width:</span>
                <input type="text" className="input-attr" size={selected.elementableAttributes.width.toString().length + 1} value={selected.elementableAttributes.width} onChange={this.changeValue('width')} />
                <span>Height:</span>
                <input type="text" className="input-attr" size={selected.elementableAttributes.height.toString().length + 1} value={selected.elementableAttributes.height} onChange={this.changeValue('height')} />
              </>
            ) : ''}
            {selected.elementableType === 'Text' ? (
              <>
                <span>Text:</span>
                <input type="text" className="input-attr" size={selected.elementableAttributes.text.length + 1} value={selected.elementableAttributes.text} onChange={this.changeValue('text')} />
                <span>Size:</span>
                <input type="text" className="input-attr" size={selected.elementableAttributes.fontSize.toString().length + 1} value={selected.elementableAttributes.fontSize} onChange={this.changeValue('fontSize')} />
                <span>Font:</span>
                <input type="text" className="input-attr" size={selected.elementableAttributes.fontFamily.toString().length + 1} value={selected.elementableAttributes.fontFamily} onChange={this.changeValue('fontFamily')} />
                <span>Weight:</span>
                <input id="attr-weight" type="text" className="input-attr" size={selected.elementableAttributes.fontWeight.toString().length + 1} value={selected.elementableAttributes.fontWeight} onChange={this.changeValue('fontWeight')} />
              </>
            ) : ''}
          </div>
          <div className={styles.rightNav}>
            <span>X:</span>
            <input type="text" className="input-attr" size={selected.posX.toString().length + 1} value={selected.posX} onChange={this.changeValue('posX')} />
            <span>Y:</span>
            <input type="text" className="input-attr" size={selected.posY.toString().length + 1} value={selected.posY} onChange={this.changeValue('posY')} />
            <span>Opacity:</span>
            <input type="text" className="input-attr" size={selected.transparency.toString().length + 1} value={selected.transparency} onChange={this.changeValue('transparency')} />
            <span>Order:</span>
            <input type="text" className="input-attr" size={selected.zIndex.toString().length + 1} value={selected.zIndex} onChange={this.changeValue('zIndex')} />
            <button type="button" className="btn-color" onClick={this.deleteElement}>Delete</button>
            {/* <button type="submit" className="btn-color">Submit</button> */}
          </div>
        </form>
      </div>
    );
  }
}

export default DesignTools;
