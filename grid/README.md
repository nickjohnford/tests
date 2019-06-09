# Grids in IE11
## Simple layout
Prefixing on the grid wrapper is required, but is not enough. The following will cause all the grid items to sit at column 1, row 1.
```
display: -ms-grid;
display: grid;
-ms-grid-columns: 1fr 1fr 1fr 1fr;
grid-template-columns: 1fr 1fr 1fr 1fr;
```

To get the items to be put into the correct spaces, each item needs to specifically be given a column and row number. As they will default to position 1,1 - there's no reason to set the column or row if the item appears in the first of either of these.
```
.grid__item2 {
  -ms-grid-column: 2;
}
.grid__item3 {
  -ms-grid-column: 3;
}
.grid__item4 {
  -ms-grid-column: 4;
}
.grid__item5 {
  -ms-grid-row: 2;
}
.grid__item6 {
  -ms-grid-column: 2;
  -ms-grid-row: 2;
}
```
