  const animations_hover ={"glitch-hover":{
    name: "Glitch Text Hover Effect",
    html: '<h1 class="hover-glitch" data-animation="hover-glitch">HOVER ME</h1>',
    css: ` .glitch-hover {
      position: relative;
      font-size: 36px;
      font-weight: 700;
      color: #11d0e9;
      text-transform: uppercase;
      letter-spacing: 2px;
      cursor: pointer;
    }

    .glitch-hover::before,
    .glitch-hover::after {
      content: "HOVER ME";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: all 0.3s ease;
    }

    .glitch-hover::before {
      color: #0ff;
      z-index: -1;
    }

    .glitch-hover::after {
      color: #f0f;
      z-index: -2;
    }

    .glitch-hover:hover {
      animation: glitch-hover 0.4s linear infinite;
    }

    .glitch-hover:hover::before {
      opacity: 1;
      animation: glitch-hover-1 0.4s linear infinite;
    }

    .glitch-hover:hover::after {
      opacity: 1;
      animation: glitch-hover-2 0.4s linear infinite;
    }

    @keyframes glitch-hover {
      0% { transform: translate(0); }
      20% { transform: translate(-2px, 2px); }
      40% { transform: translate(-2px, -2px); }
      60% { transform: translate(2px, 2px); }
      80% { transform: translate(2px, -2px); }
      100% { transform: translate(0); }
    }

    @keyframes glitch-hover-1 {
      0% { transform: translate(0); }
      20% { transform: translate(3px, -3px); }
      40% { transform: translate(3px, 3px); }
      60% { transform: translate(-3px, -3px); }
      80% { transform: translate(-3px, 3px); }
      100% { transform: translate(0); }
    }

    @keyframes glitch-hover-2 {
      0% { transform: translate(0); }
      20% { transform: translate(-3px, 3px); }
      40% { transform: translate(-3px, -3px); }
      60% { transform: translate(3px, 3px); }
      80% { transform: translate(3px, -3px); }
      100% { transform: translate(0); }
    }

    .glitch-hover::before {
      text-shadow: 2px 0 #0ff;
    }

    .glitch-hover::after {
      text-shadow: -2px 0 #f0f;
    }

    .glitch-hover:hover {
      text-shadow: 
        0.05em 0 0 rgba(255, 0, 0, 0.75),
        -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
        0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
    }`,
    js: "// No JavaScript required for this animation",
    preview: `<style>
 .glitch-hover {
      position: relative;
      font-size: 36px;
      font-weight: 700;
      color: #11d0e9;
      text-transform: uppercase;
      letter-spacing: 2px;
      cursor: pointer;
    }

    .glitch-hover::before,
    .glitch-hover::after {
      content: "HOVER ME";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: all 0.3s ease;
    }

    .glitch-hover::before {
      color: #0ff;
      z-index: -1;
    }

    .glitch-hover::after {
      color: #f0f;
      z-index: -2;
    }

    .glitch-hover:hover {
      animation: glitch-hover 0.4s linear infinite;
    }

    .glitch-hover:hover::before {
      opacity: 1;
      animation: glitch-hover-1 0.4s linear infinite;
    }

    .glitch-hover:hover::after {
      opacity: 1;
      animation: glitch-hover-2 0.4s linear infinite;
    }

    @keyframes glitch-hover {
      0% { transform: translate(0); }
      20% { transform: translate(-2px, 2px); }
      40% { transform: translate(-2px, -2px); }
      60% { transform: translate(2px, 2px); }
      80% { transform: translate(2px, -2px); }
      100% { transform: translate(0); }
    }

    @keyframes glitch-hover-1 {
      0% { transform: translate(0); }
      20% { transform: translate(3px, -3px); }
      40% { transform: translate(3px, 3px); }
      60% { transform: translate(-3px, -3px); }
      80% { transform: translate(-3px, 3px); }
      100% { transform: translate(0); }
    }

    @keyframes glitch-hover-2 {
      0% { transform: translate(0); }
      20% { transform: translate(-3px, 3px); }
      40% { transform: translate(-3px, -3px); }
      60% { transform: translate(3px, 3px); }
      80% { transform: translate(3px, -3px); }
      100% { transform: translate(0); }
    }

    .glitch-hover::before {
      text-shadow: 2px 0 #0ff;
    }

    .glitch-hover::after {
      text-shadow: -2px 0 #f0f;
    }

    .glitch-hover:hover {
      text-shadow: 
        0.05em 0 0 rgba(255, 0, 0, 0.75),
        -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
        0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
    }
</style>
      <div class="glitch-hover">HOVER ME</div>`
  },
  "rainbow-text":{
    name: "Rainbow Wave Hover Effect",
    html: '<h1 class="rainbow-wave" data-animation="rainbow-wave"><span>H</span><span>e</span><span>l</span><span>l</span><span>o</span><span> </span><span>W</span><span>o</span><span>r</span><span>l</span><span>d</span></h1>',
    css: ` .rainbow-text {
      font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-size: 32px; /* Reduced size for a professional look */
      font-weight: 700;
      color: #361574;
      display: inline-block;
      transition: all 0.3s ease;
    }

    .rainbow-text span {
      display: inline-block;
      transition: all 0.3s ease;
      position: relative;
    }

    .rainbow-text:hover span {
      animation: rainbow-wave 1s ease forwards;
    }

    .rainbow-text:hover span:nth-child(1) { animation-delay: 0s; }
    .rainbow-text:hover span:nth-child(2) { animation-delay: 0.05s; }
    .rainbow-text:hover span:nth-child(3) { animation-delay: 0.1s; }
    .rainbow-text:hover span:nth-child(4) { animation-delay: 0.15s; }
    .rainbow-text:hover span:nth-child(5) { animation-delay: 0.2s; }
    .rainbow-text:hover span:nth-child(6) { animation-delay: 0.25s; }
    .rainbow-text:hover span:nth-child(7) { animation-delay: 0.3s; }
    .rainbow-text:hover span:nth-child(8) { animation-delay: 0.35s; }
    .rainbow-text:hover span:nth-child(9) { animation-delay: 0.4s; }
    .rainbow-text:hover span:nth-child(10) { animation-delay: 0.45s; }
    .rainbow-text:hover span:nth-child(11) { animation-delay: 0.5s; }

    @keyframes rainbow-wave {
      0% {
        transform: translateY(0);
        color: #fff;
      }
      20% {
        transform: translateY(-15px);
        color: #ff1a75;
      }
      40% {
        transform: translateY(0);
        color: #ff9500;
      }
      60% {
        transform: translateY(-7px);
        color: #ffff00;
      }
      80% {
        transform: translateY(0);
        color: #00e1ff;
      }
      100% {
        transform: translateY(0);
        color: #9d4edd;
      }
    }`,
    js: "// No JavaScript required for this animation",
    preview: `<style>
 .rainbow-text {
      font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-size: 32px; /* Reduced size for a professional look */
      font-weight: 700;
      color: #361574;
      display: inline-block;
      transition: all 0.3s ease;
    }

    .rainbow-text span {
      display: inline-block;
      transition: all 0.3s ease;
      position: relative;
    }

    .rainbow-text:hover span {
      animation: rainbow-wave 1s ease forwards;
    }

    .rainbow-text:hover span:nth-child(1) { animation-delay: 0s; }
    .rainbow-text:hover span:nth-child(2) { animation-delay: 0.05s; }
    .rainbow-text:hover span:nth-child(3) { animation-delay: 0.1s; }
    .rainbow-text:hover span:nth-child(4) { animation-delay: 0.15s; }
    .rainbow-text:hover span:nth-child(5) { animation-delay: 0.2s; }
    .rainbow-text:hover span:nth-child(6) { animation-delay: 0.25s; }
    .rainbow-text:hover span:nth-child(7) { animation-delay: 0.3s; }
    .rainbow-text:hover span:nth-child(8) { animation-delay: 0.35s; }
    .rainbow-text:hover span:nth-child(9) { animation-delay: 0.4s; }
    .rainbow-text:hover span:nth-child(10) { animation-delay: 0.45s; }
    .rainbow-text:hover span:nth-child(11) { animation-delay: 0.5s; }

    @keyframes rainbow-wave {
      0% {
        transform: translateY(0);
        color: #fff;
      }
      20% {
        transform: translateY(-15px);
        color: #ff1a75;
      }
      40% {
        transform: translateY(0);
        color: #ff9500;
      }
      60% {
        transform: translateY(-7px);
        color: #ffff00;
      }
      80% {
        transform: translateY(0);
        color: #00e1ff;
      }
      100% {
        transform: translateY(0);
        color: #9d4edd;
      }
    }
</style>
<div class="rainbow-text">
        <span>H</span>
        <span>e</span>
        <span>l</span>
        <span>l</span>
        <span>o</span>
        <span>&nbsp;</span>
        <span>W</span>
        <span>o</span>
        <span>r</span>
        <span>l</span>
        <span>d</span>
      </div>`
  },
  "pulse-glow":{
    name: "Pulse Glow Hover Effect",
    html: '<button class="pulse-glow" data-animation="pulse-glow">Hover Me</button>',
    css: ` .hover-element {
      width: 150px;
      height: 150px;
      background-color: #333;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-weight: bold;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    .hover-element:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 30px rgba(0, 123, 255, 0.3);
    }

    .hover-element:hover::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: linear-gradient(
        60deg,
        transparent,
        rgba(0, 123, 255, 0.1),
        rgba(0, 123, 255, 0.4),
        rgba(0, 123, 255, 0.1),
        transparent
      );
      transform: rotate(45deg);
      animation: pulse-glow 1.5s linear infinite;
    }

    @keyframes pulse-glow {
      0% {
        transform: rotate(45deg) translateY(-100%);
      }
      100% {
        transform: rotate(45deg) translateY(100%);
      }
    }

    .hover-element::after {
      content: 'Hover Me';
      position: relative;
      z-index: 1;
    }`,
    js: "// No JavaScript required for this animation",
    preview: `<style>
 .hover-element {
      width: 150px;
      height: 150px;
      background-color: #333;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-weight: bold;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    .hover-element:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 30px rgba(0, 123, 255, 0.3);
    }

    .hover-element:hover::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: linear-gradient(
        60deg,
        transparent,
        rgba(0, 123, 255, 0.1),
        rgba(0, 123, 255, 0.4),
        rgba(0, 123, 255, 0.1),
        transparent
      );
      transform: rotate(45deg);
      animation: pulse-glow 1.5s linear infinite;
    }

    @keyframes pulse-glow {
      0% {
        transform: rotate(45deg) translateY(-100%);
      }
      100% {
        transform: rotate(45deg) translateY(100%);
      }
    }

    .hover-element::after {
      content: 'Hover Me';
      position: relative;
      z-index: 1;
    }
</style>
      <div class="hover-element"></div>`
  },
  "particle-hover-button":{
    name: "Particle-hover Explosion Hover Effect",
    html: `<div class="particle-hover-explosion" data-animation="particle-hover-explosion">
      <button>Hover Me</button>
      <span class="particle-hover"></span>
      <span class="particle-hover"></span>
      <span class="particle-hover"></span>
      <span class="particle-hover"></span>
      <span class="particle-hover"></span>
      <span class="particle-hover"></span>
      <span class="particle-hover"></span>
      <span class="particle-hover"></span>
    </div>`,
    css: `.particle-hover-button {
      position: relative;
      width: 200px;
      height: 60px;
      background: #333;
      border: none;
      border-radius: 8px;
      color: white;
      font-size: 16px;
      font-weight: 600;
      letter-spacing: 1px;
      cursor: pointer;
      overflow: hidden;
      z-index: 1;
      transition: transform 0.3s, box-shadow 0.3s;
    }

    .particle-hover-button:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 30px rgba(252, 70, 107, 0.4);
    }

    .particle-hover {
      position: absolute;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: linear-gradient(to right, #fc466b, #3f5efb);
      opacity: 0;
      pointer-events: none;
    }

    .particle-hover:nth-child(1) {
      top: 50%;
      left: 50%;
    }
    .particle-hover:nth-child(2) {
      top: 50%;
      left: 50%;
    }
    .particle-hover:nth-child(3) {
      top: 50%;
      left: 50%;
    }
    .particle-hover:nth-child(4) {
      top: 50%;
      left: 50%;
    }
    .particle-hover:nth-child(5) {
      top: 50%;
      left: 50%;
    }
    .particle-hover:nth-child(6) {
      top: 50%;
      left: 50%;
    }
    .particle-hover:nth-child(7) {
      top: 50%;
      left: 50%;
    }
    .particle-hover:nth-child(8) {
      top: 50%;
      left: 50%;
    }

    .particle-hover-button:hover .particle-hover:nth-child(1) {
      animation: particle-hover-1 0.8s ease-out forwards;
    }
    .particle-hover-button:hover .particle-hover:nth-child(2) {
      animation: particle-hover-2 0.8s ease-out forwards;
    }
    .particle-hover-button:hover .particle-hover:nth-child(3) {
      animation: particle-hover-3 0.8s ease-out forwards;
    }
    .particle-hover-button:hover .particle-hover:nth-child(4) {
      animation: particle-hover-4 0.8s ease-out forwards;
    }
    .particle-hover-button:hover .particle-hover:nth-child(5) {
      animation: particle-hover-5 0.8s ease-out forwards;
    }
    .particle-hover-button:hover .particle-hover:nth-child(6) {
      animation: particle-hover-6 0.8s ease-out forwards;
    }
    .particle-hover-button:hover .particle-hover:nth-child(7) {
      animation: particle-hover-7 0.8s ease-out forwards;
    }
    .particle-hover-button:hover .particle-hover:nth-child(8) {
      animation: particle-hover-8 0.8s ease-out forwards;
    }

    @keyframes particle-hover-1 {
      0% { transform: translate(0, 0); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translate(-50px, -50px); opacity: 0; }
    }

    @keyframes particle-hover-2 {
      0% { transform: translate(0, 0); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translate(50px, -50px); opacity: 0; }
    }

    @keyframes particle-hover-3 {
      0% { transform: translate(0, 0); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translate(-50px, 50px); opacity: 0; }
    }

    @keyframes particle-hover-4 {
      0% { transform: translate(0, 0); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translate(50px, 50px); opacity: 0; }
    }

    @keyframes particle-hover-5 {
      0% { transform: translate(0, 0); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translate(0, -70px); opacity: 0; }
    }

    @keyframes particle-hover-6 {
      0% { transform: translate(0, 0); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translate(0, 70px); opacity: 0; }
    }

    @keyframes particle-hover-7 {
      0% { transform: translate(0, 0); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translate(-70px, 0); opacity: 0; }
    }

    @keyframes particle-hover-8 {
      0% { transform: translate(0, 0); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translate(70px, 0); opacity: 0; }
    }

    .particle-hover-button::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(45deg, #fc466b, #3f5efb);
      opacity: 0;
      z-index: -1;
      transition: opacity 0.3s ease;
    }

    .particle-hover-button:hover::before {
      opacity: 1;
    }

    .particle-hover-button span {
      position: relative;
      z-index: 2;
    }`,
    js: "// No JavaScript required for this animation",
    preview: `<style>
.particle-hover-button {
      position: relative;
      width: 200px;
      height: 60px;
      background: #333;
      border: none;
      border-radius: 8px;
      color: white;
      font-size: 16px;
      font-weight: 600;
      letter-spacing: 1px;
      cursor: pointer;
      overflow: hidden;
      z-index: 1;
      transition: transform 0.3s, box-shadow 0.3s;
    }

    .particle-hover-button:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 30px rgba(252, 70, 107, 0.4);
    }

    .particle-hover {
      position: absolute;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: linear-gradient(to right, #fc466b, #3f5efb);
      opacity: 0;
      pointer-events: none;
    }

    .particle-hover:nth-child(1) {
      top: 50%;
      left: 50%;
    }
    .particle-hover:nth-child(2) {
      top: 50%;
      left: 50%;
    }
    .particle-hover:nth-child(3) {
      top: 50%;
      left: 50%;
    }
    .particle-hover:nth-child(4) {
      top: 50%;
      left: 50%;
    }
    .particle-hover:nth-child(5) {
      top: 50%;
      left: 50%;
    }
    .particle-hover:nth-child(6) {
      top: 50%;
      left: 50%;
    }
    .particle-hover:nth-child(7) {
      top: 50%;
      left: 50%;
    }
    .particle-hover:nth-child(8) {
      top: 50%;
      left: 50%;
    }

    .particle-hover-button:hover .particle-hover:nth-child(1) {
      animation: particle-hover-1 0.8s ease-out forwards;
    }
    .particle-hover-button:hover .particle-hover:nth-child(2) {
      animation: particle-hover-2 0.8s ease-out forwards;
    }
    .particle-hover-button:hover .particle-hover:nth-child(3) {
      animation: particle-hover-3 0.8s ease-out forwards;
    }
    .particle-hover-button:hover .particle-hover:nth-child(4) {
      animation: particle-hover-4 0.8s ease-out forwards;
    }
    .particle-hover-button:hover .particle-hover:nth-child(5) {
      animation: particle-hover-5 0.8s ease-out forwards;
    }
    .particle-hover-button:hover .particle-hover:nth-child(6) {
      animation: particle-hover-6 0.8s ease-out forwards;
    }
    .particle-hover-button:hover .particle-hover:nth-child(7) {
      animation: particle-hover-7 0.8s ease-out forwards;
    }
    .particle-hover-button:hover .particle-hover:nth-child(8) {
      animation: particle-hover-8 0.8s ease-out forwards;
    }

    @keyframes particle-hover-1 {
      0% { transform: translate(0, 0); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translate(-50px, -50px); opacity: 0; }
    }

    @keyframes particle-hover-2 {
      0% { transform: translate(0, 0); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translate(50px, -50px); opacity: 0; }
    }

    @keyframes particle-hover-3 {
      0% { transform: translate(0, 0); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translate(-50px, 50px); opacity: 0; }
    }

    @keyframes particle-hover-4 {
      0% { transform: translate(0, 0); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translate(50px, 50px); opacity: 0; }
    }

    @keyframes particle-hover-5 {
      0% { transform: translate(0, 0); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translate(0, -70px); opacity: 0; }
    }

    @keyframes particle-hover-6 {
      0% { transform: translate(0, 0); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translate(0, 70px); opacity: 0; }
    }

    @keyframes particle-hover-7 {
      0% { transform: translate(0, 0); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translate(-70px, 0); opacity: 0; }
    }

    @keyframes particle-hover-8 {
      0% { transform: translate(0, 0); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translate(70px, 0); opacity: 0; }
    }

    .particle-hover-button::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(45deg, #fc466b, #3f5efb);
      opacity: 0;
      z-index: -1;
      transition: opacity 0.3s ease;
    }

    .particle-hover-button:hover::before {
      opacity: 1;
    }

    .particle-hover-button span {
      position: relative;
      z-index: 2;
    }
</style>
<div class="particle-hover-explosion">
      <button class="particle-hover-button">
        <span>Hover Me</span>
        <div class="particle-hover"></div>
        <div class="particle-hover"></div>
        <div class="particle-hover"></div>
        <div class="particle-hover"></div>
        <div class="particle-hover"></div>
        <div class="particle-hover"></div>
        <div class="particle-hover"></div>
        <div class="particle-hover"></div>
      </button>`
  },
  "magnetic-button":{
    name: "Magnetic Button Hover Effect",
    html: '<button class="magnetic-button" data-animation="magnetic-button">Hover Me</button>',
    css: `.magnetic-button {
      position: relative;
      padding: 18px 36px;
      background: linear-gradient(45deg, #7c3aed, #4f46e5);
      border: none;
      border-radius: 30px;
      color: white;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
      overflow: hidden;
      box-shadow: 0 10px 30px -10px rgba(124, 58, 237, 0.5);
    }

    .magnetic-button:hover {
      transform: scale(1.05);
      box-shadow: 0 15px 30px -10px rgba(124, 58, 237, 0.7);
    }

    .magnetic-button::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.2));
      transform: translateY(-100%);
      transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
      z-index: 1;
    }

    .magnetic-button:hover::before {
      transform: translateY(0);
    }

    .magnetic-button::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 5px;
      background: rgba(255, 255, 255, 0.5);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    .magnetic-button:hover::after {
      transform: scaleX(1);
    }

    .magnetic-button span {
      position: relative;
      z-index: 2;
    }`,
    js: "// No JavaScript required for this animation",
    preview: `<style>
.magnetic-button {
      position: relative;
      padding: 18px 36px;
      background: linear-gradient(45deg, #7c3aed, #4f46e5);
      border: none;
      border-radius: 30px;
      color: white;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
      overflow: hidden;
      box-shadow: 0 10px 30px -10px rgba(124, 58, 237, 0.5);
    }

    .magnetic-button:hover {
      transform: scale(1.05);
      box-shadow: 0 15px 30px -10px rgba(124, 58, 237, 0.7);
    }

    .magnetic-button::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.2));
      transform: translateY(-100%);
      transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
      z-index: 1;
    }

    .magnetic-button:hover::before {
      transform: translateY(0);
    }

    .magnetic-button::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 5px;
      background: rgba(255, 255, 255, 0.5);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    .magnetic-button:hover::after {
      transform: scaleX(1);
    }

    .magnetic-button span {
      position: relative;
      z-index: 2;
    }
</style>
      <button class="magnetic-button"><span>Hover Me</span></button>
`
  },
  "hover-text":{
    name: "Neon Glow Hover Effect",
    html: '<h1 class="text-glow" data-animation="text-glow"><span>H</span><span>e</span><span>l</span><span>l</span><span>o</span><span> </span><span>W</span><span>o</span><span>r</span><span>l</span><span>d</span></h1>',
    css: ` .hover-text {
      font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-size: 32px; /* Reduced size for a professional look */
      font-weight: 700;
      color: #a19e9e;
      display: inline-block;
      transition: all 0.3s ease;
    }

    .hover-text span {
      display: inline-block;
      transition: all 0.3s ease;
    }

    .hover-text:hover span {
      color: #29e3a4;
      text-shadow: 
        0 0 5px #29e3a4, 
        0 0 10px #29e3a4, 
        0 0 20px #29e3a4, 
        0 0 40px #29e3a4;
      transform: translateY(-3px);
    }

    .hover-text span:nth-child(odd) { transition-delay: 0.05s; }
    .hover-text span:nth-child(even) { transition-delay: 0.1s; }`,
    js: "// No JavaScript required for this animation",
    preview: `<style>
 .hover-text {
      font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-size: 32px; /* Reduced size for a professional look */
      font-weight: 700;
      color: #a19e9e;
      display: inline-block;
      transition: all 0.3s ease;
    }

    .hover-text span {
      display: inline-block;
      transition: all 0.3s ease;
    }

    .hover-text:hover span {
      color: #29e3a4;
      text-shadow: 
        0 0 5px #29e3a4, 
        0 0 10px #29e3a4, 
        0 0 20px #29e3a4, 
        0 0 40px #29e3a4;
      transform: translateY(-3px);
    }

    .hover-text span:nth-child(odd) { transition-delay: 0.05s; }
    .hover-text span:nth-child(even) { transition-delay: 0.1s; }
</style>
<div class="hover-text">
        <span>H</span>
        <span>e</span>
        <span>l</span>
        <span>l</span>
        <span>o</span>
        <span>&nbsp;</span>
        <span>W</span>
        <span>o</span>
        <span>r</span>
        <span>l</span>
        <span>d</span>
      </div>`
  },
  "ripple-button":{
    name: "Ripple Effect Hover Animation",
    html: '<button class="ripple-button" data-animation="ripple-button">Hover Me</button>',
    css: `.ripple-button {
      position: relative;
      width: 180px;
      height: 60px;
      background-color: #3498db;
      color: white;
      border: none;
      border-radius: 30px;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
      overflow: hidden;
      transition: all 0.3s ease;
    }

    .ripple-button::after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 25%;
      width: 50%;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.3);
      border-radius: 100%;
      transform: scale(0);
      opacity: 0;
      transition: transform 0.5s, opacity 0.6s;
    }

    .ripple-button:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(52, 152, 219, 0.4);
    }

    .ripple-button:hover::after {
      transform: scale(2.5);
      opacity: 0;
      animation: ripple 0.6s linear;
    }

    @keyframes ripple {
      0% {
        transform: scale(0);
        opacity: 0.5;
      }
      100% {
        transform: scale(2.5);
        opacity: 0;
      }
    }`,
    js: "// No JavaScript required for this animation",
    preview: `<style>
.ripple-button {
      position: relative;
      width: 180px;
      height: 60px;
      background-color: #3498db;
      color: white;
      border: none;
      border-radius: 30px;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
      overflow: hidden;
      transition: all 0.3s ease;
    }

    .ripple-button::after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 25%;
      width: 50%;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.3);
      border-radius: 100%;
      transform: scale(0);
      opacity: 0;
      transition: transform 0.5s, opacity 0.6s;
    }

    .ripple-button:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(52, 152, 219, 0.4);
    }

    .ripple-button:hover::after {
      transform: scale(2.5);
      opacity: 0;
      animation: ripple 0.6s linear;
    }

    @keyframes ripple {
      0% {
        transform: scale(0);
        opacity: 0.5;
      }
      100% {
        transform: scale(2.5);
        opacity: 0;
      }
    }
</style>
      <button class="ripple-button">Hover Me</button>
`
  }
};