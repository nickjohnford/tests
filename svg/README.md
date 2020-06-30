# SVG xlink
Experiments to test whether a single SVG can:
- show internally linked symbols with the `<use>` tag
- colour internally linked symbols
- colour externally linked symbols with css

Ideally a logo could be full colour when used as an `<img>` src, and then could have individual parts coloured with css when accessed via `<svg><use ...`

Use for this would be a full colour logo in the header and then a single colour logo in the footer.

## Basic SVG code
So far this is the best setup:
```xml
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100">
  <symbol id="shape">
    <polygon points="25 25 25 75 75 75 75 25"/>
  </symbol>
  <use xlink:href="#shape" fill="red"/>
</svg>
```
The internal `xlink` has `fill="red"` which does not override css when used with an external xlink. If the `fill` had been added to the `polygon` directly, then this would not allow css to override it.

## SVG with multiple shapes
Different shapes can be in separate symbols and then added with multiple internal `<use>` tags, each with their own colour:
```xml
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100">
  <symbol id="shape">
    <polygon points="25 25 25 75 75 75 75 25"/>
  </symbol>
  <symbol id="shape2">
    <polygon points="15 15 15 60 60 60 60 15"/>
  </symbol>
  <use xlink:href="#shape" fill="red"/>
  <use xlink:href="#shape2" fill="blue"/>
</svg>
```
In order to have this work as an external css-styled SVG, the html page `svg` needs to have the `<use>` tag wrapped in a `<g>`. Otherwise you only get one of the shapes:
```xml
<svg>
  <g>
    <use xlink:href="multi.svg#shape" class="pinkshape"/>
    <use xlink:href="multi.svg#shape2" class="greenshape"/>
  </g>
</svg>

```
Each `<use>` can have its own class to allow for separate styling of the shapes; such as alternate logo colours.
