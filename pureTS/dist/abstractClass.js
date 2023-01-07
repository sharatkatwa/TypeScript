"use strict";
class Camera2 {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        // some complex calcultion here and
        return 4;
    }
}
class telegram extends Camera2 {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log('sepia');
    }
}
const hetesh = new telegram('', '', 2);
hetesh.getSepia();
hetesh.getReelTime();
