const elementsOnDesign = (state, designId, copy = false) => {
  const design = state.entities.designs[designId];
  const map = design.elements.map((eleId) => {
    const element = state.entities.elements[eleId];
    if (element) {
      switch (element.elementableType) {
        case 'Shape':
          element.elementableAttributes = state.entities.shapes[element.elementableId];
          break;
        case 'Text':
          element.elementableAttributes = state.entities.text[element.elementableId];
          break;
        default:
          break;
      }
      if (copy) {
        delete element.id;
        delete element.elementableId;
        delete element.elementableAttributes.id;
      }
    }
    return element;
  });
  // debugger;
  return map.filter((el) => !!el);
};

export default elementsOnDesign;
