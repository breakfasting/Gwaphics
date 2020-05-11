# Gwaphics

[Gwaphics Live Demo](https://gwaphics.herokuapp.com/)

Gwaphics, a [Canva](https://www.canva.com/) clone, is a online graphical design tool for creating designs effortlessly. Aside from creating shapes, text, and image elements on a blank canvas using intuitive drag & drop features, Users also have a variety of inspiring public design templates to choose from.

![Editor Screenshot](https://i.imgur.com/ezwZkrE.png)

## Technologies
* Frontend: React/Redux/Webpack(css-loader)
* Backend: Ruby on Rails/ExpressJS/PostgreSQL
* Storage: AWS S3
* Hosting: Heroku
  * [React-Draggable](https://www.npmjs.com/package/react-draggable/)
  * [React-icons](https://react-icons.github.io/react-icons/)
  * [Puppeteer](https://pptr.dev/)

## Features
### User Authentication
Greeted by a splash page, users may sign-in or sign-up as a new member (using [BCrypt](https://rubygems.org/gems/bcrypt/) for password hashing), also with the choice of logging in as a demo user.

### Designs

![Drag and Drop demo](https://i.imgur.com/dUWZlW2.gif)

```javascript
<Draggable position={{ x: x - 2, y: y - 2 }}>
  <div
    className={styles.selected}
    style={{
      width: Object.values(selected)[0].elementableAttributes.width * zoom,
      height: Object.values(selected)[0].elementableAttributes.height * zoom,
    }}
  />
</Draggable>
```

```javascript
elements.map((element, index) => {
  if (element._destroy) return null;
  return (
    <Draggable
      key={element.id ? element.id : index}
      onDrag={this.onControlledDrag}
      onStop={(e, data) => this.onControlledDragStop(e, index, data)}
      position={{ x: element.posX * zoom, y: element.posY * zoom }}
    >
      <div style={{ position: 'absolute', zIndex: element.zIndex }} onClick={() => setSelected(index)}>
        <Element element={element} zoom={zoom} />
      </div>
    </Draggable>
  );
})
```

### Folders

## Future Updates
* Color Picker for changing elements' colors
* Text elements on designs to be 'contentEditable' for inline responsive content editing
* Additional Icons and SVG shapes to search and choose from
* Create copies of other user's designs to use as templates
* Stockphoto API with [Unpslash](https://unsplash.com/developers)
* Uploading custom images