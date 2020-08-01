import * as faceapi from 'face-api.js';
import {ASSETS_BASE, MODULES_BASE} from '../../../constants';

// const LINE_SIZE = 170;
const LINE_WIDTH = 8;

let canvasAdded = false;

const startVideo = (video) => {
  navigator.getUserMedia(
      { video: {} },
      stream => video.srcObject = stream,
      err => console.error(err)
  )
}

const canvasData = (textLines = [], canvas) => {
  const LINES_BREAK = 40;
  const ctx = canvas.getContext("2d");
  ctx.font = "40px Roboto";
  ctx.fillStyle = "red";
  ctx.textAlign = "left";
  textLines.forEach((text, index) => {
    ctx.fillText(text, canvas.width / 2 - 1080 / 2 + 80, 240 + LINES_BREAK * index);
  });
}

const drawFaceSquare2 = (canvas, resizedDetections, drawCircle) => {
  resizedDetections.forEach((detected) => {
    const box = detected.detection.box;
    const LINE_SIZE = Math.min(box.width, box.height) / 6;
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    drawCircle(ctx, box);
    // ctx.rect(box.x, box.y, box.width, box.height);
    // TOP LEFT
    ctx.moveTo(box.x - LINE_WIDTH/2, box.y);
    ctx.lineTo(box.x + LINE_SIZE, box.y);
    ctx.moveTo(box.x, box.y);
    ctx.lineTo(box.x, box.y + LINE_SIZE);
    // TOP RIGHT
    ctx.moveTo(box.x + LINE_WIDTH/2 + box.width, box.y);
    ctx.lineTo(box.x + box.width - LINE_SIZE, box.y);
    ctx.moveTo(box.x + box.width, box.y);
    ctx.lineTo(box.x + box.width, box.y + LINE_SIZE);
    // BOTTOM LEFT
    ctx.moveTo(box.x - LINE_WIDTH/2, box.y + box.height);
    ctx.lineTo(box.x + LINE_SIZE, box.y + box.height);
    ctx.moveTo(box.x, box.y + box.height);
    ctx.lineTo(box.x, box.y + box.height - LINE_SIZE);
    // BOTTOM RIGHT
    ctx.moveTo(box.x + LINE_WIDTH/2 + box.width, box.y + box.height);
    ctx.lineTo(box.x + box.width - LINE_SIZE, box.y + box.height);
    ctx.moveTo(box.x + box.width, box.y + box.height);
    ctx.lineTo(box.x + box.width, box.y + box.height - LINE_SIZE);

    ctx.strokeStyle = 'red';
    ctx.lineWidth = LINE_WIDTH;
    ctx.stroke();
  })
};

const base_image = new Image();
base_image.src = `${ASSETS_BASE}/camera/camera.svg`;

const drawFaceSquare = (canvas, resizedDetections, drawCircle) => {
  resizedDetections.forEach((detected) => {
    const box = detected.detection.box;
    // const LINE_SIZE = Math.min(box.width, box.height) / 6;
    const ctx = canvas.getContext('2d');
    // ctx.beginPath();
    drawCircle(ctx, box);

    // base_image.onload = function(){
      ctx.drawImage(base_image, box.x, box.y, box.width, box.height);
    // }

    // ctx.strokeStyle = 'red';
    // ctx.lineWidth = LINE_WIDTH;
    // ctx.stroke();
  })
};

const drawRecordingCircle = (context, box) => {
    const padding = 50;

    context.arc(box.x + box.width - padding, box.y + padding, 14, 0, 2 * Math.PI, false);
    context.fillStyle = 'red';
    context.fill();
};

const loadPromise = Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri(MODULES_BASE),
  faceapi.nets.faceLandmark68Net.loadFromUri(MODULES_BASE),
  faceapi.nets.faceRecognitionNet.loadFromUri(MODULES_BASE),
  faceapi.nets.faceExpressionNet.loadFromUri(MODULES_BASE),
  faceapi.nets.ageGenderNet.loadFromUri(MODULES_BASE)
]).then(()=> console.log('All models loaded!'));

export const init = (video, parentEl, onLoad, onDetect) => {
  let timeout;
  console.log('Init!');
  let drawCircle = () => null;

  const cleanUp = () => {
    console.log('cleaning camera up!');
    clearTimeout(timeout);
    video.removeEventListener('play', detect);
    canvasAdded = false;
  };

  loadPromise.then(() => {
    console.log('All models loaded, Staring video!');
    startVideo(video);
  }).then(() => {
    video.addEventListener('play', detect);
  });

  const fiveSecPromise = new Promise((resolve) => {
    setTimeout(resolve, 5000);
  });
  Promise.all([loadPromise, fiveSecPromise])
      .then(onLoad)
      .then(() => {
        drawCircle = drawRecordingCircle;
      });

  const detect = () => {
    if(canvasAdded) {
      return;
    }
    canvasAdded = true;
    const canvas = faceapi.createCanvasFromMedia(video);
    parentEl.append(canvas)
    console.log('Init append canvas!');
    const displaySize = { width: window.outerHeight * 16 / 9, height: window.outerHeight }
    faceapi.matchDimensions(canvas, displaySize);

    const draw = async() => {
      const start = Date.now();
      const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
          .withFaceLandmarks().withFaceExpressions().withAgeAndGender()
      const resizedDetections = faceapi.resizeResults(detections, displaySize)
      canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
      // faceapi.draw.drawDetections(canvas, resizedDetections)

      if(resizedDetections.length > 0) {
        drawFaceSquare(canvas, resizedDetections, drawCircle);
        faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
        onDetect(resizedDetections);
        // console.log('Time to render', Date.now() - start);
      }
    };

    const triggerDraw = () => {
      timeout = setTimeout(() => {
        draw().then(triggerDraw);
      }, 400);
    }

    triggerDraw();
  };

  return cleanUp;
}
