import * as faceapi from 'face-api.js';
import {MODULES_BASE} from '../../../constants';

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

const nameCapitalized = (name) => name.charAt(0).toUpperCase() + name.slice(1);

const getMaxKeyByValue = (values) => {
  let res;
  let max = 0;

  Object.keys(values).forEach((key) => {
      if(values[key] > max) {
        res = key;
        max = values[key];
      }
  });
  return res;
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

const drawFaceSquare = (canvas, resizedDetections) => {
  resizedDetections.forEach((detected) => {
    const box = detected.detection.box;
    const LINE_SIZE = Math.min(box.width, box.height) / 6;
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
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
}

const loadPromise = Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri(MODULES_BASE),
  faceapi.nets.faceLandmark68Net.loadFromUri(MODULES_BASE),
  faceapi.nets.faceRecognitionNet.loadFromUri(MODULES_BASE),
  faceapi.nets.faceExpressionNet.loadFromUri(MODULES_BASE),
  faceapi.nets.ageGenderNet.loadFromUri(MODULES_BASE)
]);

export const init = (video, parentEl) => {
  console.log('Init!');
  loadPromise.then(() => startVideo(video));

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
        drawFaceSquare(canvas, resizedDetections);
        const expressionText = [
          `Mode: ${nameCapitalized(getMaxKeyByValue(resizedDetections[0].expressions))}`,
          `Age: ${Math.round(resizedDetections[0].age)}`,
          `Gender: ${nameCapitalized(resizedDetections[0].gender)}`
        ];

        canvasData(expressionText, canvas);
        faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
        // console.log('Time to render', Date.now() - start);
      }
    };

    let timeout;
    const triggerDraw = () => {
      timeout = setTimeout(() => {
        draw().then(triggerDraw);
      }, 400);
    }

    triggerDraw();

    return () => {
      console.log('cleaning camera up!');
      clearTimeout(timeout);
      video.removeEventListener('play', detect)
    };
  };

  video.addEventListener('play', detect)
}
