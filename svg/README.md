# SVG xlink
Experiments to test whether a single SVG can:
- show internally linked symbols with the `<use>` tag
- colour internally linked symbols
- colour externally linked symbols with css

Ideally a logo could be full colour when used as an `<img>` src, and then could have individual parts coloured with css when accessed via `<svg><use ...`

Use for this would be a full colour logo in the header and then a single colour logo in the footer.

So far this is the best setup:
```xml
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100">
  <symbol id="shape">
    <polygon points="25 25 25 75 75 75 75 25"/>
  </symbol>
  <g>
    <use xlink:href="#shape" fill="red"/>
  </g>
</svg>
```
The internal `xlink` has `fill="red"` which does not override css when used with an external xlink. If the `fill` had been added to the `polygon` directly, then this would not allow css to override it.
