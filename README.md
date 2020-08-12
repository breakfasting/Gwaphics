# Gwaphics

[Gwaphics Live Demo](https://gwaphics.herokuapp.com/)

Gwaphics, a [Canva](https://www.canva.com/) clone, is a online graphical design tool for creating designs effortlessly. Aside from creating shapes, text, and image elements on a blank canvas using intuitive drag & drop features, Users also have a variety of inspiring public design templates to choose from.

![Editor Screenshot](https://i.imgur.com/FuQnPEs.png)

## Technologies
* Frontend: React/Redux/Webpack(css-loader)
* Backend: Ruby on Rails/ExpressJS/PostgreSQL
* Storage: AWS S3
* Hosting: Heroku
  * [React-icons](https://react-icons.github.io/react-icons/)
  * [React-Contenteditable](https://github.com/lovasoa/react-contenteditable)
  * [Puppeteer](https://pptr.dev/)

## Features
### User Authentication
Greeted by a splash page, users may sign-in or sign-up as a new member (using [BCrypt](https://rubygems.org/gems/bcrypt/) for password hashing), also with the choice of logging in as a demo user.

### Designs
Designs are the main feature of the Gwaphics project. Aside from storing meta-data about the design itself, a design most importantly holds references to all the elements associated with it. While these kinds of one-to-many associations are usually handled with NoSQL databases with embedded sub-documents, Gwaphics utilizes rails' nested attributes and polymorphic associations to ensure a Relational database such as PostgreSQL could also achieve minimal backend API calls.

```ruby
class Design < ApplicationRecord
  accepts_nested_attributes_for :elements, allow_destroy: true
end
```

According to our [schema](https://github.com/breakfasting/Gwaphics/wiki/Schema), a `design` has_many `elements` which either has_many `shapes`, `text`, `images` or `stockphotos`, the tricky part for polymorphic associations to accept nested attributes, is to override the `accepts_nested_attributes_for` build method to take in `elementable_type` and find a declared constant with the specified name.

```ruby
class Element < ApplicationRecord
  accepts_nested_attributes_for :elementable

  def build_elementable(params)
    self.elementable = elementable_type.constantize.new(params)
  end
end
```

Thus, our `designs_controller` only takes in one single `design` payload to populate/modify all corresponding tables. With the frontend state handling the temporary attributes of creating/editing a design, Gwaphics minimizes the API calls for either create, update, and delete actions with one single API call on user save.

![Drag and Drop demo](https://i.imgur.com/dUWZlW2.gif)

The visual representation of borders indicating the selection of elements which may overlap with one another, is handled by simultaneously rendering a "controlled component" which is on a higher z-index.

```JSX
<Draggable position={{ x: x - 2, y: y - 2 }}>
  <div
    className={styles.selected}
    style={{
      width: selected.elementableAttributes.width * zoom,
      height: selected.elementableAttributes.height * zoom,
    }}
  />
</Draggable>
```
The above `Draggable` higher-order component is completely controlled by the local React state's position `x` and `y`, with minor offsets making space for the highlighting border to render. Which each time a user selects an element below, the `onControlledDrag` handler syncs the position of the element with the selection border.

```JSX
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

### Thumbnails

![Thumbnails of designs](https://i.imgur.com/q2ZpnpI.png)

Thumbnails are generated to ensure the efficiency of loading multiple designs on a page. Gwaphics runs "Puppeteer" as an external ExpressJS API, a headless chromium browser that navigates to the sharable link of each design on user save, which then captures the page with the given width and height. The screenshot response is sent back as a base64 string, processed to be a JavaScript File type, and then uploaded to AWS S3 via Active Storage.

```javascript
export const createThumbnail = ({ id, width, height }) => (
  fetch(`https://gwaphics-pup.herokuapp.com/screenshot?id=${id}&width=${width}&height=${height}`)
    .then((res) => res.blob())
    .then((blob) => {
      const file = new File([blob], 'File name', { type: 'image/png' });
      return file;
    })
);
```

## Future Updates
* Color Picker for changing elements' colors
* Text elements on designs to be 'contentEditable' for inline responsive content editing
* Additional Icons and SVG shapes to search and choose from
* Create copies of other user's designs to use as templates
* Stockphoto API with [Unpslash](https://unsplash.com/developers)
* Uploading custom images
