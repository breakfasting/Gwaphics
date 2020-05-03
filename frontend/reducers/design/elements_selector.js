const elementsOnDesign = (state, designId) => {
  const design = state.entities.designs[designId];
  return design.elements.map((eleId) => {
    const element = state.entities.elements[eleId];
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
    return element;
  });
};

export default elementsOnDesign;
