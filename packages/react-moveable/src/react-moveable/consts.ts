import { prefixCSS } from "framework-utils";
import getAgent from "@egjs/agent";
import { Able } from ".";
import Pinchable from "./ables/Pinchable";
import Draggable from "./ables/Draggable";
import Rotatable from "./ables/Rotatable";
import Resizable from "./ables/Resizable";
import Scalable from "./ables/Scalable";
import Warpable from "./ables/Warpable";

export const agent = getAgent();
export const isNotSupportTransformOrigin
    = agent.os.name.indexOf("ios") > -1 || agent.browser.name.indexOf("safari") > -1;
export const PREFIX = "moveable-";
export const MOVEABLE_CSS = prefixCSS(PREFIX, `
{
	position: fixed;
	width: 0;
	height: 0;
	left: 0;
	top: 0;
	z-index: 3000;
}
.control-box {
    z-index: 0;
}
.line, .control {
	left: 0;
	top: 0;
}
.control {
	position: absolute;
	width: 14px;
	height: 14px;
	border-radius: 50%;
	border: 2px solid #fff;
	box-sizing: border-box;
	background: #4af;
	margin-top: -7px;
    margin-left: -7px;
    z-index: 10;
}
.line {
	position: absolute;
	width: 1px;
	height: 1px;
	background: #4af;
	transform-origin: 0px 0.5px;
}
.line.rotation-line {
	height: 40px;
	width: 1px;
	transform-origin: 0.5px 39.5px;
}
.line.rotation-line .control {
	border-color: #4af;
	background:#fff;
	cursor: alias;
}
.control.origin {
	border-color: #f55;
	background: #fff;
	width: 12px;
	height: 12px;
	margin-top: -6px;
	margin-left: -6px;
	pointer-events: none;
}
.direction.e, .direction.w {
	cursor: ew-resize;
}
.direction.s, .direction.n {
	cursor: ns-resize;
}
.direction.nw, .direction.se, :host.reverse .direction.ne, :host.reverse .direction.sw {
	cursor: nwse-resize;
}
.direction.ne, .direction.sw, :host.reverse .direction.nw, :host.reverse .direction.se {
	cursor: nesw-resize;
}
.group {
    z-index: -1;
}
${isNotSupportTransformOrigin ? `:global svg *:before {
	content:"";
	transform-origin: inherit;
}` : ""}
`);
export const DRAGGER_EVENTS = ["dragstart", "drag", "dragend", "pinchstart", "pinch", "pinchend"];

export const NEARBY_POS = [
    [0, 1, 2],
    [1, 0, 3],
    [2, 0, 3],
    [3, 1, 2],
];

export const TINY_NUM = 0.0000001;
export const MIN_SCALE = 0.000000001;
export const MOVEABLE_ABLES: Able[] = [Pinchable, Draggable, Rotatable, Resizable, Scalable, Warpable];
export const MAX_NUM = Math.pow(10, 10);
export const MIN_NUM = -MAX_NUM;
