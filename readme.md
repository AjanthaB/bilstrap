# [Bilstrap](http://bilstrap.com)

## Responsive grid based on flex property

* No depedencies
* Light weight (12kb)

### [Documentation](http://bilstrap.com)

## Install

### NPM

``` bash
npm install bilstrap
```

### Yarn

``` bash
yarn add bilstrap
```

### Bower

``` bash
bower install bilstrap
```

## Usage

### Responsive Grid

``` html
<div class="bt-row">
  <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
    col
  </div>
</div>
```

### Offset

``` html
<div class="bt-row">
  <div class="col-xs-6 col-xs-offset-6">
    col
  </div>
</div>
```

### Auto Width

``` html
<div class="bt-row">
  <div class="col-xs">
      <div> col </div>
  </div>
  <div class="col-xs">
    <div> col </div>
  </div>
</div>
```

### Align to anyware

``` html
<div class="bt-row xs-center">
  <div class="col-xs-6">
    <div> col </div>
  </div>
</div>
```

### Waves Buttons

``` html
<div class="bt-row xs-start sm-center lg-end">
  <div class="col-xs-12">
    <div>
      <button class="btn bt-waves bt-dark">Button</button>
      <button class="btn bt-waves bt-light">Button</button>
      <button class="btn bt-waves bt-danger">Button</button>
      <button class="btn bt-waves bt-amber">Button</button>
    </div>
  </div>
</div>
```

### Button Sizes

``` html

<div class="bt-row xs-start sm-center lg-end">
  <div class="col-xs-12">
    <div>
      <button class="btn bt-waves bt-dark">Normal</button>
      <button class="btn btn-large bt-waves bt-dark">Large</button>
      <button class="btn btn-small bt-waves bt-dark">Small</button>
    </div>
  </div>
</div>
```

## Development

Make your changes in **src/** and run grunt to compile **.less** and **.js** files. Compiled output will be available under **dist** folder

### License

MIT © [Ajantha Bandara](https://ajanthab.com/)

### Developer

[Ajantha Bandara](https://ajanthab.com/)