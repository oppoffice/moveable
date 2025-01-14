import { MoveableEvents } from "./types";

export const PROPERTIES = [
    "draggable", "resizable", "scalable", "rotatable",
    "warpable", "pinchable", "origin", "target", "edge",
    "throttleDrag", "throttleResize",
    "throttleScale", "throttleRotate", "keepRatio",
    "pinchThreshold",
];
export const EVENTS: Array<keyof MoveableEvents> = [
    "dragStart",
    "drag",
    "dragEnd",
    "resizeStart",
    "resize",
    "resizeEnd",
    "scaleStart",
    "scale",
    "scaleEnd",
    "rotateStart",
    "rotate",
    "rotateEnd",
    "warpStart",
    "warp",
    "warpEnd",
    "pinchStart",
    "pinch",
    "pinchEnd",

    "dragGroupStart",
    "dragGroup",
    "dragGroupEnd",
    "resizeGroupStart",
    "resizeGroup",
    "resizeGroupEnd",
    "scaleGroupStart",
    "scaleGroup",
    "scaleGroupEnd",
    "rotateGroupStart",
    "rotateGroup",
    "rotateGroupEnd",
    "pinchGroupStart",
    "pinchGroup",
    "pinchGroupEnd",
    "clickGroup",
];
