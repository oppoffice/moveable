
<p align="middle" ><img src="https://raw.githubusercontent.com/daybrush/moveable/master/demo/images/logo.png"/></p>
<h2 align="middle">Moveable</h2>
<p align="middle">
<a href="https://www.npmjs.com/package/moveable" target="_blank"><img src="https://img.shields.io/npm/v/moveable.svg?style=flat-square&color=007acc&label=version" alt="npm version" /></a>
<img src="https://img.shields.io/badge/language-typescript-blue.svg?style=flat-square"/>
<a href="https://github.com/daybrush/moveable/blob/master/LICENSE" target="_blank"><img src="https://img.shields.io/github/license/daybrush/moveable.svg?style=flat-square&label=license&color=08CE5D"/></a>
<a href="https://github.com/daybrush/moveable/tree/master/packages/react-moveable" target="_blank"><img alt="React" src="https://img.shields.io/static/v1.svg?label=&message=React&style=flat-square&color=61daeb"></a>
<a href="https://github.com/daybrush/moveable/tree/master/packages/preact-moveable" target="_blank"><img alt="Preact" src="https://img.shields.io/static/v1.svg?label=&message=Preact&style=flat-square&color=673ab8"></a>
<a href="https://github.com/daybrush/moveable/tree/master/packages/ngx-moveable" target="_blank"><img alt="Angular" src="https://img.shields.io/static/v1.svg?label=&message=Angular&style=flat-square&color=C82B38"></a>
<a href="https://github.com/probil/vue-moveable" target="_blank"><img
    alt="Vue"
    src="https://img.shields.io/static/v1.svg?label=&message=Vue&style=flat-square&color=3fb984"></a>
</p>
<p align="middle">Moveable is Draggable, Resizable, Scalable, Rotatable, Warpable, Pinchable, Groupable</p>
<p align="middle">
    <a href="https://daybrush.com/moveable" target="_blank"><strong>Demo</strong></a> /
    <a href="https://daybrush.com/moveable/release/latest/doc/" target="_blank"><strong>API</strong></a> /
    <a href="https://github.com/daybrush/scenejs-editor" target="_blank"><strong>Main Project</strong></a> /
    <a href="https://codepen.io/daybrush/pen/VoQypZ" target="_blank"><strong>CodePen</strong></a>
</p>

<table width="100%" align="center">
<tr>
<th colspan="4">Moveable</th>
</tr>
<tr>
<td align="center"><strong>Draggable</strong></td>
<td align="center"><strong>Resizable</strong></td>
<td align="center"><strong>Scalable</strong></td>
<td align="center"><strong>Rotatable</strong></td>
</tr>
<tr>
<td align="center">
<img src="https://raw.githubusercontent.com/daybrush/moveable/master/demo/images/draggable.gif">
</td>
<td align="center">
<img src="https://raw.githubusercontent.com/daybrush/moveable/master/demo/images/resizable.gif">
</td>
<td align="center">
<img src="https://raw.githubusercontent.com/daybrush/moveable/master/demo/images/scalable.gif">
</td>
<td align="center">
<img src="https://raw.githubusercontent.com/daybrush/moveable/master/demo/images/rotatable.gif">
</td>
</tr>
<tr>
<td align="center"><strong>Warpable</strong></td>
<td align="center"><strong>Pinchable</strong></td>
<td align="center"><a href="https://github.com/daybrush/moveable/blob/master/groupable.md"><strong>Groupable</strong></a></td>
<td align="center"><strong></strong></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/daybrush/moveable/master/demo/images/warpable.gif"></td>
<td align="center"><img src="https://raw.githubusercontent.com/daybrush/moveable/master/demo/images/pinchable.gif"></td>
<td align="center"><img src="https://raw.githubusercontent.com/daybrush/moveable/master/demo/images/groupable.gif"></td>
<td align="center"><strong></strong></td>
</tr>
</table>


## 🔥 Features
* **Draggable** refers to the ability to drag and move targets.
* **Resizable** indicates whether the target's width and height can be increased or decreased.
* **Scalable** indicates whether the target's x and y can be scale of transform.
* **Rotatable** indicates whether the target can be rotated.
* **Warpable** indicates whether the target can be warped(distorted, bented).
* **Pinchable** indicates whether the target can be pinched with draggable, resizable, scalable, rotatable.
* **[Groupable](https://github.com/daybrush/moveable/blob/master/groupable.md)** indicates Whether the targets can be moved in group with draggable, resizable, scalable, rotatable.
* Support SVG Elements (svg, path, line, ellipse, g, rect, ...etc)
* Support 3d Transform


## ⚙️ Installation
### npm
```sh
$ npm i moveable
```

### scripts
```html
<script src="//daybrush.com/moveable/release/latest/dist/moveable.min.js"></script>
```

## 📄 Documents
* [API Documentation](https://daybrush.com/moveable/release/latest/doc/)
* 🚀 [**How to use Groupable**](https://github.com/daybrush/moveable/blob/master/groupable.md)
* ✨ [**How to use custom CSS**](https://github.com/daybrush/moveable/blob/master/custom_css.md)

## 🚀 How to use
```ts
import Moveable from "moveable";

const moveable = new Moveable(document.body, {
    target: document.querySelector(".target"),
    // If the container is null, the position is fixed. (default: parentElement(document.body))
    container: document.body,
    draggable: true,
    resizable: true,
    scalable: true,
    rotatable: true,
    warpable: true,
    // Enabling pincable lets you use events that
    // can be used in draggable, resizable, scalable, and rotateable.
    pinchable: true, // ["resizable", "scalable", "rotatable"]
    origin: true,
    keepRatio: true,
    // Resize, Scale Events at edges.
    edge: false,
    throttleDrag: 0,
    throttleResize: 0,
    throttleScale: 0,
    throttleRotate: 0,
});
/* draggable */
moveable.on("dragStart", ({ target, clientX, clientY }) => {
    console.log("onDragStart", target);
}).on("drag", ({
    target, transform,
    left, top, right, bottom,
    beforeDelta, beforeDist, delta, dist,
    clientX, clientY,
}) => {
    console.log("onDrag left, top", left, top);
    target!.style.left = `${left}px`;
    target!.style.top = `${top}px`;
    // console.log("onDrag translate", dist);
    // target!.style.transform = transform;
}).on("dragEnd", ({ target, isDrag, clientX, clientY }) => {
    console.log("onDragEnd", target, isDrag);
});

/* resizable */
moveable.on("resizeStart", ({ target, clientX, clientY }) => {
    console.log("onResizeStart", target);
}).on("resize", ({ target, width, height, dist, delta, clientX, clientY }) => {
    console.log("onResize", target);
    delta[0] && (target!.style.width = `${width}px`);
    delta[1] && (target!.style.height = `${height}px`);
}).on("resizeEnd", ({ target, isDrag, clientX, clientY }) => {
    console.log("onResizeEnd", target, isDrag);
});

/* scalable */
moveable.on("scaleStart", ({ target, clientX, clientY }) => {
    console.log("onScaleStart", target);
}).on("scale", ({
    target, scale, dist, delta, transform, clientX, clientY,
}: OnScale) => {
    console.log("onScale scale", scale);
    target!.style.transform = transform;
}).on("scaleEnd", ({ target, isDrag, clientX, clientY }) => {
    console.log("onScaleEnd", target, isDrag);
});

/* rotatable */
moveable.on("rotateStart", ({ target, clientX, clientY }) => {
    console.log("onRotateStart", target);
}).on("rotate", ({ target, beforeDelta, delta, dist, transform, clientX, clientY }) => {
    console.log("onRotate", dist);
    target!.style.transform = transform;
}).on("rotateEnd", ({ target, isDrag, clientX, clientY }) => {
    console.log("onRotateEnd", target, isDrag);
});

/* warpable */
this.matrix = [
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1,
];
moveable.on("warpStart", ({ target, clientX, clientY }) => {
    console.log("onWarpStart", target);
}).on("warp", ({
    target,
    clientX,
    clientY,
    delta,
    dist,
    multiply,
    transform,
}) => {
    console.log("onWarp", target);
    // target.style.transform = transform;
    this.matrix = multiply(this.matrix, delta);
    target.style.transform = `matrix3d(${this.matrix.join(",")})`;
}).on("warpEnd", ({ target, isDrag, clientX, clientY }) => {
    console.log("onWarpEnd", target, isDrag);
});

/* pinchable */
// Enabling pincable lets you use events that
// can be used in draggable, resizable, scalable, and rotateable.
moveable.on("pinchStart", ({ target, clientX, clientY }) => {
    // pinchStart event occur before dragStart, rotateStart, scaleStart, resizeStart
    console.log("onPinchStart");
}).on("pinch", ({ target, clientX, clientY, datas }) => {
    // pinch event occur before drag, rotate, scale, resize
    console.log("onPinch");
}).on("pinchEnd", ({ isDrag, target, clientX, clientY, datas }) => {
    // pinchEnd event occur before dragEnd, rotateEnd, scaleEnd, resizeEnd
    console.log("onPinchEnd");
});
```


## 📦 Packages
* [**react-moveable**](https://github.com/daybrush/moveable/blob/master/packages/react-moveable): A React Component that create Moveable, Draggable, Resizable, Scalable, Rotatable, Warpable, Pinchable.
* [**preact-moveable**](https://github.com/daybrush/moveable/blob/master/packages/preact-moveable): A Preact Component that create Moveable, Draggable, Resizable, Scalable, Rotatable, Warpable, Pinchable.
* [**ngx-moveable**](https://github.com/daybrush/moveable/blob/master/packages/ngx-moveable): An Angular Component that create Moveable, Draggable, Resizable, Scalable, Rotatable, Warpable, Pinchable.
* [**vue-moveable**(@probil)](https://github.com/probil/vue-moveable): A Vue Component that create Moveable, Draggable, Resizable, Scalable, Rotatable, Warpable, Pinchable.



## ⭐️ Show Your Support
Please give a ⭐️ if this project helped you!

## 👏 Contributing

If you have any questions or requests or want to contribute to `moveable` or other packages, please write the [issue](https://github.com/daybrush/moveable/issues) or give me a Pull Request freely.

## 🐞 Bug Report

If you find a bug, please report to us opening a new [Issue](https://github.com/daybrush/moveable/issues) on GitHub.


## 📝 License

This project is [MIT](https://github.com/daybrush/moveable/blob/master/LICENSE) licensed.

```
MIT License

Copyright (c) 2019 Daybrush

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
