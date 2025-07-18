const animations_loader ={
    "spinner-wave":{
        name: "Spinner Wave Effect",
        html: '<div class="spinner-wave-loader" data-animation="spinner-wave"><div></div><div></div><div></div><div></div><div></div></div>',
        css: `.spinner-wave-loader {
.spinner-wave {
      display: inline-block;
      position: relative;
      width: 150px;
      height: 40px;
    }

    .spinner-wave span {
      position: absolute;
      bottom: 0;
      display: inline-block;
      width: 6px;
      height: 10px;
      background-color: #e2f10f;
      margin: 0 3px;
      animation: wave 1.2s infinite ease-in-out;
    }

    .spinner-wave span:nth-child(1) { left: 0px; animation-delay: -1.2s; }
    .spinner-wave span:nth-child(2) { left: 15px; animation-delay: -1.1s; }
    .spinner-wave span:nth-child(3) { left: 30px; animation-delay: -1.0s; }
    .spinner-wave span:nth-child(4) { left: 45px; animation-delay: -0.9s; }
    .spinner-wave span:nth-child(5) { left: 60px; animation-delay: -0.8s; }
    .spinner-wave span:nth-child(6) { left: 75px; animation-delay: -0.7s; }
    .spinner-wave span:nth-child(7) { left: 90px; animation-delay: -0.6s; }
    .spinner-wave span:nth-child(8) { left: 105px; animation-delay: -0.5s; }

    @keyframes wave {
      0%, 40%, 100% {
        transform: scaleY(0.4);
      }
      20% {
        transform: scaleY(1);
      }
    }`,
        js: "// No JavaScript required for this animation",
        preview: `<style>
.spinner-wave {
      display: inline-block;
      position: relative;
      width: 150px;
      height: 40px;
    }

    .spinner-wave span {
      position: absolute;
      bottom: 0;
      display: inline-block;
      width: 6px;
      height: 10px;
      background-color: #e2f10f;
      margin: 0 3px;
      animation: wave 1.2s infinite ease-in-out;
    }

    .spinner-wave span:nth-child(1) { left: 0px; animation-delay: -1.2s; }
    .spinner-wave span:nth-child(2) { left: 15px; animation-delay: -1.1s; }
    .spinner-wave span:nth-child(3) { left: 30px; animation-delay: -1.0s; }
    .spinner-wave span:nth-child(4) { left: 45px; animation-delay: -0.9s; }
    .spinner-wave span:nth-child(5) { left: 60px; animation-delay: -0.8s; }
    .spinner-wave span:nth-child(6) { left: 75px; animation-delay: -0.7s; }
    .spinner-wave span:nth-child(7) { left: 90px; animation-delay: -0.6s; }
    .spinner-wave span:nth-child(8) { left: 105px; animation-delay: -0.5s; }

    @keyframes wave {
      0%, 40%, 100% {
        transform: scaleY(0.4);
      }
      20% {
        transform: scaleY(1);
      }
    }
</style>
<div class="spinner-wave">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>`
    },
    "geometric-transform":{
        name: "Geometric Transformation Effect",
        html: '<div class="geometric-transform-loader" data-animation="geometric-transform"><div></div><div></div><div></div><div></div></div>',
        css: `.geometric-transform {
      position: relative;
      display: inline-block;
      width: 100px;
      height: 100px;
      animation: container-rotate 6s linear infinite;
    }

    .geometric-shape {
      position: absolute;
      top: 10px;
      left: 10px;
      width: 80px;
      height: 80px;
      border: 3px solid #22f10f;
      animation: shape-morph 6s ease-in-out infinite;
    }

    .inner-shape {
      position: absolute;
      top: 20px;
      left: 20px;
      width: 40px;
      height: 40px;
      border: 2px solid #22f10f;
      animation: inner-morph 6s ease-in-out infinite;
    }

    .dot {
      position: absolute;
      width: 8px;
      height: 8px;
      background-color: #22f10f;
      border-radius: 50%;
      animation: dot-move 6s ease-in-out infinite;
      box-shadow: 0 0 10px #22f10f;
    }

    .dot:nth-child(1) {
      top: -4px;
      left: 50%;
      transform: translateX(-50%);
      animation-delay: 0s;
    }

    .dot:nth-child(2) {
      top: 50%;
      right: -4px;
      transform: translateY(-50%);
      animation-delay: 1.5s;
    }

    .dot:nth-child(3) {
      bottom: -4px;
      left: 50%;
      transform: translateX(-50%);
      animation-delay: 3s;
    }

    .dot:nth-child(4) {
      top: 50%;
      left: -4px;
      transform: translateY(-50%);
      animation-delay: 4.5s;
    }

    @keyframes container-rotate {
      0%, 100% {
        transform: rotate(0deg);
      }
      50% {
        transform: rotate(180deg);
      }
    }

    @keyframes shape-morph {
      0%, 100% {
        border-radius: 0%;
        transform: rotate(0deg);
      }
      25% {
        border-radius: 50% 0% 0% 0%;
        transform: rotate(90deg);
      }
      50% {
        border-radius: 50%;
        transform: rotate(180deg);
      }
      75% {
        border-radius: 0% 0% 0% 50%;
        transform: rotate(270deg);
      }
    }

    @keyframes inner-morph {
      0%, 100% {
        border-radius: 50%;
        transform: rotate(0deg);
      }
      25% {
        border-radius: 0%;
        transform: rotate(-90deg);
      }
      50% {
        border-radius: 50% 0% 50% 0%;
        transform: rotate(-180deg);
      }
      75% {
        border-radius: 0% 50% 0% 50%;
        transform: rotate(-270deg);
      }
    }

    @keyframes dot-move {
      0%, 100% {
        transform: translateX(-50%) scale(1);
        box-shadow: 0 0 10px #0f4bf1;
      }
      12.5%, 37.5%, 62.5%, 87.5% {
        transform: translateX(-50%) scale(1.5) rotate(180deg);
        box-shadow: 0 0 15px #daf10f, 0 0 20px #f10f0f;
      }
      25%, 50%, 75% {
        transform: translateX(-50%) scale(1) rotate(360deg);
        box-shadow: 0 0 10px #f10f0f;
      }
    }`,
        js: "// No JavaScript required for this animation",
        preview: `<style>
.geometric-transform {
      position: relative;
      display: inline-block;
      width: 100px;
      height: 100px;
      animation: container-rotate 6s linear infinite;
    }

    .geometric-shape {
      position: absolute;
      top: 10px;
      left: 10px;
      width: 80px;
      height: 80px;
      border: 3px solid #22f10f;
      animation: shape-morph 6s ease-in-out infinite;
    }

    .inner-shape {
      position: absolute;
      top: 20px;
      left: 20px;
      width: 40px;
      height: 40px;
      border: 2px solid #22f10f;
      animation: inner-morph 6s ease-in-out infinite;
    }

    .dot {
      position: absolute;
      width: 8px;
      height: 8px;
      background-color: #22f10f;
      border-radius: 50%;
      animation: dot-move 6s ease-in-out infinite;
      box-shadow: 0 0 10px #22f10f;
    }

    .dot:nth-child(1) {
      top: -4px;
      left: 50%;
      transform: translateX(-50%);
      animation-delay: 0s;
    }

    .dot:nth-child(2) {
      top: 50%;
      right: -4px;
      transform: translateY(-50%);
      animation-delay: 1.5s;
    }

    .dot:nth-child(3) {
      bottom: -4px;
      left: 50%;
      transform: translateX(-50%);
      animation-delay: 3s;
    }

    .dot:nth-child(4) {
      top: 50%;
      left: -4px;
      transform: translateY(-50%);
      animation-delay: 4.5s;
    }

    @keyframes container-rotate {
      0%, 100% {
        transform: rotate(0deg);
      }
      50% {
        transform: rotate(180deg);
      }
    }

    @keyframes shape-morph {
      0%, 100% {
        border-radius: 0%;
        transform: rotate(0deg);
      }
      25% {
        border-radius: 50% 0% 0% 0%;
        transform: rotate(90deg);
      }
      50% {
        border-radius: 50%;
        transform: rotate(180deg);
      }
      75% {
        border-radius: 0% 0% 0% 50%;
        transform: rotate(270deg);
      }
    }

    @keyframes inner-morph {
      0%, 100% {
        border-radius: 50%;
        transform: rotate(0deg);
      }
      25% {
        border-radius: 0%;
        transform: rotate(-90deg);
      }
      50% {
        border-radius: 50% 0% 50% 0%;
        transform: rotate(-180deg);
      }
      75% {
        border-radius: 0% 50% 0% 50%;
        transform: rotate(-270deg);
      }
    }

    @keyframes dot-move {
      0%, 100% {
        transform: translateX(-50%) scale(1);
        box-shadow: 0 0 10px #0f4bf1;
      }
      12.5%, 37.5%, 62.5%, 87.5% {
        transform: translateX(-50%) scale(1.5) rotate(180deg);
        box-shadow: 0 0 15px #daf10f, 0 0 20px #f10f0f;
      }
      25%, 50%, 75% {
        transform: translateX(-50%) scale(1) rotate(360deg);
        box-shadow: 0 0 10px #f10f0f;
      }
    }
</style>
<div class="geometric-transform">
        <div class="geometric-shape">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="inner-shape"></div>
        </div>`
    },

    
    "sound-wave":{
        name: "Sound Wave Effect",
        html: '<div class="sound-wave-loader" data-animation="sound-wave"><div></div><div></div><div></div><div></div><div></div><div class="pulse-circle"></div><div class="pulse-circle"></div></div>',
        css: `.sound-wave {
      display: inline-flex;
      align-items: center;
      height: 60px;
      gap: 3px;
    }

    .wave-bar {
      width: 4px;
      background-color: #f58f09;
      border-radius: 2px;
      animation: wave-up-down 1.2s ease-in-out infinite;
      box-shadow: 0 0 6px #f18f0f;
    }

    .wave-bar:nth-child(1) { height: 15%; animation-delay: -1.1s; }
    .wave-bar:nth-child(2) { height: 30%; animation-delay: -1.0s; }
    .wave-bar:nth-child(3) { height: 60%; animation-delay: -0.9s; }
    .wave-bar:nth-child(4) { height: 80%; animation-delay: -0.8s; }
    .wave-bar:nth-child(5) { height: 60%; animation-delay: -0.7s; }
    .wave-bar:nth-child(6) { height: 80%; animation-delay: -0.6s; }
    .wave-bar:nth-child(7) { height: 100%; animation-delay: -0.5s; }
    .wave-bar:nth-child(8) { height: 80%; animation-delay: -0.4s; }
    .wave-bar:nth-child(9) { height: 60%; animation-delay: -0.3s; }
    .wave-bar:nth-child(10) { height: 80%; animation-delay: -0.2s; }
    .wave-bar:nth-child(11) { height: 60%; animation-delay: -0.1s; }
    .wave-bar:nth-child(12) { height: 30%; animation-delay: 0s; }
    .wave-bar:nth-child(13) { height: 15%; animation-delay: 0.1s; }

    @keyframes wave-up-down {
      0%, 100% {
        transform: scaleY(0.5);
        opacity: 0.6;
      }
      50% {
        transform: scaleY(1);
        opacity: 1;
      }
    }

    .circular-wave {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100px;
      height: 100px;
      transform: translate(-50%, -50%);
    }

    .wave-circle {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border: 2px solid rgba(241, 162, 15, 0.5);
      border-radius: 50%;
      animation: pulse-out 3s infinite ease-out;
      opacity: 0;
    }

    .wave-circle:nth-child(1) { animation-delay: 0s; }
    .wave-circle:nth-child(2) { animation-delay: 0.6s; }
    .wave-circle:nth-child(3) { animation-delay: 1.2s; }
    .wave-circle:nth-child(4) { animation-delay: 1.8s; }
    .wave-circle:nth-child(5) { animation-delay: 2.4s; }

    @keyframes pulse-out {
      0% {
        transform: scale(0.1);
        opacity: 1;
      }
      100% {
        transform: scale(1.8);
        opacity: 0;
      }
    }

    .wave-container {
      position: relative;
      width: 150px;
      height: 80px;
    }`,
        js: "// No JavaScript required for this animation",
        preview: `<style>
.sound-wave {
      display: inline-flex;
      align-items: center;
      height: 60px;
      gap: 3px;
    }

    .wave-bar {
      width: 4px;
      background-color: #f58f09;
      border-radius: 2px;
      animation: wave-up-down 1.2s ease-in-out infinite;
      box-shadow: 0 0 6px #f18f0f;
    }

    .wave-bar:nth-child(1) { height: 15%; animation-delay: -1.1s; }
    .wave-bar:nth-child(2) { height: 30%; animation-delay: -1.0s; }
    .wave-bar:nth-child(3) { height: 60%; animation-delay: -0.9s; }
    .wave-bar:nth-child(4) { height: 80%; animation-delay: -0.8s; }
    .wave-bar:nth-child(5) { height: 60%; animation-delay: -0.7s; }
    .wave-bar:nth-child(6) { height: 80%; animation-delay: -0.6s; }
    .wave-bar:nth-child(7) { height: 100%; animation-delay: -0.5s; }
    .wave-bar:nth-child(8) { height: 80%; animation-delay: -0.4s; }
    .wave-bar:nth-child(9) { height: 60%; animation-delay: -0.3s; }
    .wave-bar:nth-child(10) { height: 80%; animation-delay: -0.2s; }
    .wave-bar:nth-child(11) { height: 60%; animation-delay: -0.1s; }
    .wave-bar:nth-child(12) { height: 30%; animation-delay: 0s; }
    .wave-bar:nth-child(13) { height: 15%; animation-delay: 0.1s; }

    @keyframes wave-up-down {
      0%, 100% {
        transform: scaleY(0.5);
        opacity: 0.6;
      }
      50% {
        transform: scaleY(1);
        opacity: 1;
      }
    }

    .circular-wave {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100px;
      height: 100px;
      transform: translate(-50%, -50%);
    }

    .wave-circle {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border: 2px solid rgba(241, 162, 15, 0.5);
      border-radius: 50%;
      animation: pulse-out 3s infinite ease-out;
      opacity: 0;
    }

    .wave-circle:nth-child(1) { animation-delay: 0s; }
    .wave-circle:nth-child(2) { animation-delay: 0.6s; }
    .wave-circle:nth-child(3) { animation-delay: 1.2s; }
    .wave-circle:nth-child(4) { animation-delay: 1.8s; }
    .wave-circle:nth-child(5) { animation-delay: 2.4s; }

    @keyframes pulse-out {
      0% {
        transform: scale(0.1);
        opacity: 1;
      }
      100% {
        transform: scale(1.8);
        opacity: 0;
      }
    }

    .wave-container {
      position: relative;
      width: 150px;
      height: 80px;
    }
</style>
<div class="wave-container">
        <div class="sound-wave">
          <div class="wave-bar"></div>
          <div class="wave-bar"></div>
          <div class="wave-bar"></div>
          <div class="wave-bar"></div>
          <div class="wave-bar"></div>
          <div class="wave-bar"></div>
          <div class="wave-bar"></div>
          <div class="wave-bar"></div>
          <div class="wave-bar"></div>
          <div class="wave-bar"></div>
          <div class="wave-bar"></div>
          <div class="wave-bar"></div>
          <div class="wave-bar"></div>
        </div>
        <div class="circular-wave">
          <div class="wave-circle"></div>
          <div class="wave-circle"></div>
          <div class="wave-circle"></div>
          <div class="wave-circle"></div>
          <div class="wave-circle"></div>
        </div>
      </div>`
    },
    "pulse-dots":{
        name: "Pulse Dots Effect",
        html: '<div class="pulse-dots-loader" data-animation="pulse-dots"><div></div><div></div><div></div><div></div></div>',
        css: `.pulse-dots {
      display: inline-block;
    }

    .pulse-dots span {
      display: inline-block;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: #0fe9f1;
      margin: 0 5px;
      animation: pulse 1.5s infinite ease-in-out;
    }

    .pulse-dots span:nth-child(1) { animation-delay: 0s; }
    .pulse-dots span:nth-child(2) { animation-delay: 0.2s; }
    .pulse-dots span:nth-child(3) { animation-delay: 0.4s; }
    .pulse-dots span:nth-child(4) { animation-delay: 0.6s; }
    .pulse-dots span:nth-child(5) { animation-delay: 0.8s; }

    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
        opacity: 1;
      }
      50% {
        transform: scale(1.5);
        opacity: 0.7;
      }
    }`,
        js: "// No JavaScript required for this animation",
        preview: `<style>
.pulse-dots {
      display: inline-block;
    }

    .pulse-dots span {
      display: inline-block;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: #0fe9f1;
      margin: 0 5px;
      animation: pulse 1.5s infinite ease-in-out;
    }

    .pulse-dots span:nth-child(1) { animation-delay: 0s; }
    .pulse-dots span:nth-child(2) { animation-delay: 0.2s; }
    .pulse-dots span:nth-child(3) { animation-delay: 0.4s; }
    .pulse-dots span:nth-child(4) { animation-delay: 0.6s; }
    .pulse-dots span:nth-child(5) { animation-delay: 0.8s; }

    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
        opacity: 1;
      }
      50% {
        transform: scale(1.5);
        opacity: 0.7;
      }
    }
</style>
<div class="pulse-dots">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>`
    },
    "circular-progress":{
        name: "Circular Progress Effect",
        html: '<div class="circular-progress-loader" data-animation="circular-progress"></div>',
        css: `    .circular-progress {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 60px;
    }

    .circular-progress::before,
    .circular-progress::after {
      content: '';
      position: absolute;
      border-radius: 50%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }

    .circular-progress::before {
      border: 4px solid #eee;
    }

    .circular-progress::after {
      border: 4px solid transparent;
      border-top-color: #0015ce;
      border-right-color: #f10f0f;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }`,
        js: "// No JavaScript required for this animation",
        preview: `<style>
    .circular-progress {
      position: relative;
      display: inline-block;
      width: 60px;
      height: 60px;
    }

    .circular-progress::before,
    .circular-progress::after {
      content: '';
      position: absolute;
      border-radius: 50%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }

    .circular-progress::before {
      border: 4px solid #eee;
    }

    .circular-progress::after {
      border: 4px solid transparent;
      border-top-color: #0015ce;
      border-right-color: #f10f0f;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
</style>
<div class="circular-progress"></div>`
    },
    "particle-explosion":{
        name: "Particle Explosion Effect",
        html: '<div class="particle-explosion-loader" data-animation="particle-explosion"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>',
        css: `.particle-explosion {
      position: relative;
      display: inline-block;
      width: 120px;
      height: 120px;
    }

    .particle {
      position: absolute;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #b709ec;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      animation: explode 2s infinite ease-out;
    }

    .particle:nth-child(1) {
      animation-delay: 0s;
    }

    .particle:nth-child(2) {
      animation-delay: 0.1s;
    }

    .particle:nth-child(3) {
      animation-delay: 0.2s;
    }

    .particle:nth-child(4) {
      animation-delay: 0.3s;
    }

    .particle:nth-child(5) {
      animation-delay: 0.4s;
    }

    .particle:nth-child(6) {
      animation-delay: 0.5s;
    }

    .particle:nth-child(7) {
      animation-delay: 0.6s;
    }

    .particle:nth-child(8) {
      animation-delay: 0.7s;
    }

    .particle:nth-child(9) {
      animation-delay: 0.8s;
    }

    .particle:nth-child(10) {
      animation-delay: 0.9s;
    }

    .particle:nth-child(11) {
      animation-delay: 1.0s;
    }

    .particle:nth-child(12) {
      animation-delay: 1.1s;
    }

    @keyframes explode {
      0% {
        transform: translate(-50%, -50%) scale(0.1);
        opacity: 1;
      }
      
      50% {
        opacity: 0.8;
      }
      
      100% {
        transform: translate(-50%, -50%) rotate(calc(var(--i) * 30deg)) translateY(calc(var(--i) * 10px)) scale(1);
        opacity: 0;
      }
    }

    .particle:nth-child(1) { --i: 1; }
    .particle:nth-child(2) { --i: 2; }
    .particle:nth-child(3) { --i: 3; }
    .particle:nth-child(4) { --i: 4; }
    .particle:nth-child(5) { --i: 5; }
    .particle:nth-child(6) { --i: 6; }
    .particle:nth-child(7) { --i: 7; }
    .particle:nth-child(8) { --i: 8; }
    .particle:nth-child(9) { --i: 9; }
    .particle:nth-child(10) { --i: 10; }
    .particle:nth-child(11) { --i: 11; }
    .particle:nth-child(12) { --i: 12; }`,
        js: "// No JavaScript required for this animation",
        preview: `<style>
.particle-explosion {
      position: relative;
      display: inline-block;
      width: 120px;
      height: 120px;
    }

    .particle {
      position: absolute;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #b709ec;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      animation: explode 2s infinite ease-out;
    }

    .particle:nth-child(1) {
      animation-delay: 0s;
    }

    .particle:nth-child(2) {
      animation-delay: 0.1s;
    }

    .particle:nth-child(3) {
      animation-delay: 0.2s;
    }

    .particle:nth-child(4) {
      animation-delay: 0.3s;
    }

    .particle:nth-child(5) {
      animation-delay: 0.4s;
    }

    .particle:nth-child(6) {
      animation-delay: 0.5s;
    }

    .particle:nth-child(7) {
      animation-delay: 0.6s;
    }

    .particle:nth-child(8) {
      animation-delay: 0.7s;
    }

    .particle:nth-child(9) {
      animation-delay: 0.8s;
    }

    .particle:nth-child(10) {
      animation-delay: 0.9s;
    }

    .particle:nth-child(11) {
      animation-delay: 1.0s;
    }

    .particle:nth-child(12) {
      animation-delay: 1.1s;
    }

    @keyframes explode {
      0% {
        transform: translate(-50%, -50%) scale(0.1);
        opacity: 1;
      }
      
      50% {
        opacity: 0.8;
      }
      
      100% {
        transform: translate(-50%, -50%) rotate(calc(var(--i) * 30deg)) translateY(calc(var(--i) * 10px)) scale(1);
        opacity: 0;
      }
    }

    .particle:nth-child(1) { --i: 1; }
    .particle:nth-child(2) { --i: 2; }
    .particle:nth-child(3) { --i: 3; }
    .particle:nth-child(4) { --i: 4; }
    .particle:nth-child(5) { --i: 5; }
    .particle:nth-child(6) { --i: 6; }
    .particle:nth-child(7) { --i: 7; }
    .particle:nth-child(8) { --i: 8; }
    .particle:nth-child(9) { --i: 9; }
    .particle:nth-child(10) { --i: 10; }
    .particle:nth-child(11) { --i: 11; }
    .particle:nth-child(12) { --i: 12; }
</style>
<div class="particle-explosion">
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
        <div class="particle"></div>
      </div>`
    },
    "constellation":{
        name: "Constellation Effect",
        html: '<div class="constellation-loader" data-animation="constellation"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>',
        css: `.constellation {
      position: relative;
      display: inline-block;
      width: 120px;
      height: 120px;
    }

    .star {
      position: absolute;
      width: 6px;
      height: 6px;
      background-color: #260ff1;
      border-radius: 50%;
      box-shadow: 0 0 8px #22f10f;
      animation: twinkle 3s infinite ease-in-out;
    }

    .star:nth-child(1) { top: 20%; left: 20%; animation-delay: 0s; }
    .star:nth-child(2) { top: 25%; left: 60%; animation-delay: 0.3s; }
    .star:nth-child(3) { top: 60%; left: 80%; animation-delay: 0.6s; }
    .star:nth-child(4) { top: 75%; left: 40%; animation-delay: 0.9s; }
    .star:nth-child(5) { top: 45%; left: 30%; animation-delay: 1.2s; }
    .star:nth-child(6) { top: 35%; left: 45%; animation-delay: 1.5s; }
    .star:nth-child(7) { top: 65%; left: 60%; animation-delay: 1.8s; }

    .connection {
      position: absolute;
      background-color: rgba(34, 241, 15, 0.3);
      transform-origin: 0% 0%;
      animation: connection-appear 3s infinite ease-in-out;
    }

    .connection:nth-child(8) {
      width: 40px;
      height: 2px;
      top: calc(20% + 3px);
      left: calc(20% + 3px);
      transform: rotate(15deg);
      animation-delay: 0.2s;
    }

    .connection:nth-child(9) {
      width: 25px;
      height: 2px;
      top: calc(25% + 3px);
      left: calc(60% + 3px);
      transform: rotate(130deg);
      animation-delay: 0.4s;
    }

    .connection:nth-child(10) {
      width: 45px;
      height: 2px;
      top: calc(60% + 3px);
      left: calc(80% + 3px);
      transform: rotate(-135deg);
      animation-delay: 0.6s;
    }

    .connection:nth-child(11) {
      width: 35px;
      height: 2px;
      top: calc(75% + 3px);
      left: calc(40% + 3px);
      transform: rotate(-50deg);
      animation-delay: 0.8s;
    }

    .connection:nth-child(12) {
      width: 20px;
      height: 2px;
      top: calc(45% + 3px);
      left: calc(30% + 3px);
      transform: rotate(-90deg);
      animation-delay: 1.0s;
    }

    .connection:nth-child(13) {
      width: 22px;
      height: 2px;
      top: calc(35% + 3px);
      left: calc(45% + 3px);
      transform: rotate(50deg);
      animation-delay: 1.2s;
    }

    .loading-text {
      position: absolute;
      bottom: -20px;
      left: 50%;
      transform: translateX(-50%);
      color: #22f10f;
      font-size: 14px;
      font-family: Arial, sans-serif;
      white-space: nowrap;
      text-shadow: 0 0 5px rgba(34, 241, 15, 0.5);
      opacity: 0;
      animation: text-fade 3s infinite ease-in-out;
    }

    @keyframes twinkle {
      0%, 100% {
        opacity: 0.4;
        transform: scale(1);
      }
      50% {
        opacity: 1;
        transform: scale(1.5);
      }
    }

    @keyframes connection-appear {
      0%, 100% {
        opacity: 0.1;
      }
      50% {
        opacity: 0.8;
      }
    }

    @keyframes text-fade {
      0%, 100% {
        opacity: 0.2;
      }
      50% {
        opacity: 1;
      }
    }`,
        js: "// No JavaScript required for this animation",
        preview: `<style>
.constellation {
      position: relative;
      display: inline-block;
      width: 120px;
      height: 120px;
    }

    .star {
      position: absolute;
      width: 6px;
      height: 6px;
      background-color: #260ff1;
      border-radius: 50%;
      box-shadow: 0 0 8px #22f10f;
      animation: twinkle 3s infinite ease-in-out;
    }

    .star:nth-child(1) { top: 20%; left: 20%; animation-delay: 0s; }
    .star:nth-child(2) { top: 25%; left: 60%; animation-delay: 0.3s; }
    .star:nth-child(3) { top: 60%; left: 80%; animation-delay: 0.6s; }
    .star:nth-child(4) { top: 75%; left: 40%; animation-delay: 0.9s; }
    .star:nth-child(5) { top: 45%; left: 30%; animation-delay: 1.2s; }
    .star:nth-child(6) { top: 35%; left: 45%; animation-delay: 1.5s; }
    .star:nth-child(7) { top: 65%; left: 60%; animation-delay: 1.8s; }

    .connection {
      position: absolute;
      background-color: rgba(34, 241, 15, 0.3);
      transform-origin: 0% 0%;
      animation: connection-appear 3s infinite ease-in-out;
    }

    .connection:nth-child(8) {
      width: 40px;
      height: 2px;
      top: calc(20% + 3px);
      left: calc(20% + 3px);
      transform: rotate(15deg);
      animation-delay: 0.2s;
    }

    .connection:nth-child(9) {
      width: 25px;
      height: 2px;
      top: calc(25% + 3px);
      left: calc(60% + 3px);
      transform: rotate(130deg);
      animation-delay: 0.4s;
    }

    .connection:nth-child(10) {
      width: 45px;
      height: 2px;
      top: calc(60% + 3px);
      left: calc(80% + 3px);
      transform: rotate(-135deg);
      animation-delay: 0.6s;
    }

    .connection:nth-child(11) {
      width: 35px;
      height: 2px;
      top: calc(75% + 3px);
      left: calc(40% + 3px);
      transform: rotate(-50deg);
      animation-delay: 0.8s;
    }

    .connection:nth-child(12) {
      width: 20px;
      height: 2px;
      top: calc(45% + 3px);
      left: calc(30% + 3px);
      transform: rotate(-90deg);
      animation-delay: 1.0s;
    }

    .connection:nth-child(13) {
      width: 22px;
      height: 2px;
      top: calc(35% + 3px);
      left: calc(45% + 3px);
      transform: rotate(50deg);
      animation-delay: 1.2s;
    }

    .loading-text {
      position: absolute;
      bottom: -20px;
      left: 50%;
      transform: translateX(-50%);
      color: #22f10f;
      font-size: 14px;
      font-family: Arial, sans-serif;
      white-space: nowrap;
      text-shadow: 0 0 5px rgba(34, 241, 15, 0.5);
      opacity: 0;
      animation: text-fade 3s infinite ease-in-out;
    }

    @keyframes twinkle {
      0%, 100% {
        opacity: 0.4;
        transform: scale(1);
      }
      50% {
        opacity: 1;
        transform: scale(1.5);
      }
    }

    @keyframes connection-appear {
      0%, 100% {
        opacity: 0.1;
      }
      50% {
        opacity: 0.8;
      }
    }

    @keyframes text-fade {
      0%, 100% {
        opacity: 0.2;
      }
      50% {
        opacity: 1;
      }
    }
</style>
<div class="constellation">
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="star"></div>
        <div class="connection"></div>
        <div class="connection"></div>
        <div class="connection"></div>
        <div class="connection"></div>
        <div class="connection"></div>
        <div class="connection"></div>
        <div class="loading-text">Loading</div>
      </div>`
    },
    "neon-pulse":{
        name: "Neon Pulse Effect",
        html: '<div class="neon-pulse-loader" data-animation="neon-pulse"><div></div><div></div><div></div><div></div></div>',
        css: `.neon-pulse {
      position: relative;
      display: inline-block;
      width: 100px;
      height: 100px;
    }

    .neon-circle {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 60px;
      height: 60px;
      border-radius: 50%;
      border: 3px solid transparent;
      animation: neon-glow 2s infinite linear;
    }

    .neon-circle:nth-child(1) {
      border-top-color: #22f10f;
      animation-delay: 0s;
    }

    .neon-circle:nth-child(2) {
      width: 70px;
      height: 70px;
      border-right-color: #22f10f;
      animation-delay: -0.5s;
      animation-direction: reverse;
    }

    .neon-circle:nth-child(3) {
      width: 80px;
      height: 80px;
      border-bottom-color: #22f10f;
      animation-delay: -1s;
    }

    .neon-center {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 20px;
      height: 20px;
      background-color: #8ff10f;
      border-radius: 50%;
      filter: blur(4px);
      animation: center-pulse 2s infinite ease-in-out;
    }

    @keyframes neon-glow {
      0% {
        transform: translate(-50%, -50%) rotate(0deg);
        box-shadow: 0 0 10px #22f10f, 0 0 20px #22f10f, 0 0 30px #22f10f;
        opacity: 1;
      }
      50% {
        box-shadow: 0 0 20px #22f10f, 0 0 40px #22f10f, 0 0 60px #22f10f;
        opacity: 0.8;
      }
      100% {
        transform: translate(-50%, -50%) rotate(360deg);
        box-shadow: 0 0 10px #22f10f, 0 0 20px #22f10f, 0 0 30px #22f10f;
        opacity: 1;
      }
    }

    @keyframes center-pulse {
      0%, 100% {
        transform: translate(-50%, -50%) scale(1);
        opacity: 0.5;
      }
      50% {
        transform: translate(-50%, -50%) scale(1.5);
        opacity: 1;
      }
    }`,
        js: "// No JavaScript required for this animation",
        preview: `<style>
.neon-pulse {
      position: relative;
      display: inline-block;
      width: 100px;
      height: 100px;
    }

    .neon-circle {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 60px;
      height: 60px;
      border-radius: 50%;
      border: 3px solid transparent;
      animation: neon-glow 2s infinite linear;
    }

    .neon-circle:nth-child(1) {
      border-top-color: #22f10f;
      animation-delay: 0s;
    }

    .neon-circle:nth-child(2) {
      width: 70px;
      height: 70px;
      border-right-color: #22f10f;
      animation-delay: -0.5s;
      animation-direction: reverse;
    }

    .neon-circle:nth-child(3) {
      width: 80px;
      height: 80px;
      border-bottom-color: #22f10f;
      animation-delay: -1s;
    }

    .neon-center {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 20px;
      height: 20px;
      background-color: #8ff10f;
      border-radius: 50%;
      filter: blur(4px);
      animation: center-pulse 2s infinite ease-in-out;
    }

    @keyframes neon-glow {
      0% {
        transform: translate(-50%, -50%) rotate(0deg);
        box-shadow: 0 0 10px #22f10f, 0 0 20px #22f10f, 0 0 30px #22f10f;
        opacity: 1;
      }
      50% {
        box-shadow: 0 0 20px #22f10f, 0 0 40px #22f10f, 0 0 60px #22f10f;
        opacity: 0.8;
      }
      100% {
        transform: translate(-50%, -50%) rotate(360deg);
        box-shadow: 0 0 10px #22f10f, 0 0 20px #22f10f, 0 0 30px #22f10f;
        opacity: 1;
      }
    }

    @keyframes center-pulse {
      0%, 100% {
        transform: translate(-50%, -50%) scale(1);
        opacity: 0.5;
      }
      50% {
        transform: translate(-50%, -50%) scale(1.5);
        opacity: 1;
      }
    }
</style>
<div class="neon-pulse">
        <div class="neon-circle"></div>
        <div class="neon-circle"></div>
        <div class="neon-circle"></div>
        <div class="neon-center"></div>
      </div>`
    },
    "morphing-cube":{
        name: "Morphing Cube Effect",
        html: '<div class="morphing-cube-loader" data-animation="morphing-cube"><div></div><div></div><div></div><div></div></div>',
        css: `.morphing-cube {
      display: inline-block;
      position: relative;
      width: 60px;
      height: 60px;
      perspective: 600px;
    }

    .cube {
      width: 100%;
      height: 100%;
      position: relative;
      transform-style: preserve-3d;
      animation: rotate-cube 4s infinite ease-in-out;
    }

    .cube-face {
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0.8;
      border: 2px solid rgba(255, 255, 255, 0.5);
    }

    .front {
      background: #22f10f;
      transform: translateZ(30px);
      animation: morph 4s infinite ease-in-out;
    }

    .back {
      background: #19c70c;
      transform: rotateY(180deg) translateZ(30px);
      animation: morph 4s infinite ease-in-out reverse;
    }

    .right {
      background: #15a30a;
      transform: rotateY(90deg) translateZ(30px);
      animation: morph 4s infinite ease-in-out 1s;
    }

    .left {
      background: #118c08;
      transform: rotateY(-90deg) translateZ(30px);
      animation: morph 4s infinite ease-in-out 2s;
    }

    .top {
      background: #0d7506;
      transform: rotateX(90deg) translateZ(30px);
      animation: morph 4s infinite ease-in-out 1.5s;
    }

    .bottom {
      background: #095e05;
      transform: rotateX(-90deg) translateZ(30px);
      animation: morph 4s infinite ease-in-out 2.5s;
    }

    @keyframes rotate-cube {
      0%, 100% {
        transform: rotateX(0deg) rotateY(0deg);
      }
      25% {
        transform: rotateX(90deg) rotateY(45deg);
      }
      50% {
        transform: rotateX(180deg) rotateY(90deg);
      }
      75% {
        transform: rotateX(270deg) rotateY(135deg);
      }
    }

    @keyframes morph {
      0%, 100% {
        border-radius: 0%;
      }
      50% {
        border-radius: 50%;
      }
    }`,
        js: "// No JavaScript required for this animation",
        preview: `<style>
.morphing-cube {
      display: inline-block;
      position: relative;
      width: 60px;
      height: 60px;
      perspective: 600px;
    }

    .cube {
      width: 100%;
      height: 100%;
      position: relative;
      transform-style: preserve-3d;
      animation: rotate-cube 4s infinite ease-in-out;
    }

    .cube-face {
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0.8;
      border: 2px solid rgba(255, 255, 255, 0.5);
    }

    .front {
      background: #22f10f;
      transform: translateZ(30px);
      animation: morph 4s infinite ease-in-out;
    }

    .back {
      background: #19c70c;
      transform: rotateY(180deg) translateZ(30px);
      animation: morph 4s infinite ease-in-out reverse;
    }

    .right {
      background: #15a30a;
      transform: rotateY(90deg) translateZ(30px);
      animation: morph 4s infinite ease-in-out 1s;
    }

    .left {
      background: #118c08;
      transform: rotateY(-90deg) translateZ(30px);
      animation: morph 4s infinite ease-in-out 2s;
    }

    .top {
      background: #0d7506;
      transform: rotateX(90deg) translateZ(30px);
      animation: morph 4s infinite ease-in-out 1.5s;
    }

    .bottom {
      background: #095e05;
      transform: rotateX(-90deg) translateZ(30px);
      animation: morph 4s infinite ease-in-out 2.5s;
    }

    @keyframes rotate-cube {
      0%, 100% {
        transform: rotateX(0deg) rotateY(0deg);
      }
      25% {
        transform: rotateX(90deg) rotateY(45deg);
      }
      50% {
        transform: rotateX(180deg) rotateY(90deg);
      }
      75% {
        transform: rotateX(270deg) rotateY(135deg);
      }
    }

    @keyframes morph {
      0%, 100% {
        border-radius: 0%;
      }
      50% {
        border-radius: 50%;
      }
    }
</style>
<div class="morphing-cube">
        <div class="cube">
          <div class="cube-face front"></div>
          <div class="cube-face back"></div>
          <div class="cube-face right"></div>
          <div class="cube-face left"></div>
          <div class="cube-face top"></div>
          <div class="cube-face bottom"></div>
        </div>
      </div>`
    }
}