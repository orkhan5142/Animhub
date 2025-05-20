const animations_text ={"3d-flip":{
        name: "3D Flip Text Effect",
        html: '<div class="flip-text"><span>H</span><span>e</span><span>l</span><span>l</span><span>o</span><span>&nbsp;</span><span>W</span><span>o</span><span>r</span><span>l</span><span>d</span></div>',
        css: `.flip-text {
            font-size: 42px;
            font-weight: bold;
            display: flex;
            opacity: 1;
        }

        .flip-text span {
            display: inline-block;
            color: #025edf;
            transform-origin: center bottom;
            transform: perspective(500px) rotateX(-90deg);
            animation: flip 4s forwards infinite;
        }

        @keyframes flip {
            0%, 100% { transform: perspective(500px) rotateX(-90deg); }
            50% { transform: perspective(500px) rotateX(0deg); }
        }

        .flip-text span:nth-child(1) { animation-delay: 0s; }
        .flip-text span:nth-child(2) { animation-delay: 0.1s; }
        .flip-text span:nth-child(3) { animation-delay: 0.2s; }
        .flip-text span:nth-child(4) { animation-delay: 0.3s; }
        .flip-text span:nth-child(5) { animation-delay: 0.4s; }
        .flip-text span:nth-child(6) { animation-delay: 0.5s; }
        .flip-text span:nth-child(7) { animation-delay: 0.6s; }
        .flip-text span:nth-child(8) { animation-delay: 0.7s; }
        .flip-text span:nth-child(9) { animation-delay: 0.8s; }
        .flip-text span:nth-child(10) { animation-delay: 0.9s; }
        .flip-text span:nth-child(11) { animation-delay: 1s; }`,
        js: "// No JavaScript required for this animation",
        preview: `
            <style>
            .flip-text {
            font-size: 42px;
            font-weight: bold;
            display: flex;
            opacity: 1;
        }

        .flip-text span {
            display: inline-block;
            color: #025edf;
            transform-origin: center bottom;
            transform: perspective(500px) rotateX(-90deg);
            animation: flip 4s forwards infinite;
        }

        @keyframes flip {
            0%, 100% { transform: perspective(500px) rotateX(-90deg); }
            50% { transform: perspective(500px) rotateX(0deg); }
        }

        .flip-text span:nth-child(1) { animation-delay: 0s; }
        .flip-text span:nth-child(2) { animation-delay: 0.1s; }
        .flip-text span:nth-child(3) { animation-delay: 0.2s; }
        .flip-text span:nth-child(4) { animation-delay: 0.3s; }
        .flip-text span:nth-child(5) { animation-delay: 0.4s; }
        .flip-text span:nth-child(6) { animation-delay: 0.5s; }
        .flip-text span:nth-child(7) { animation-delay: 0.6s; }
        .flip-text span:nth-child(8) { animation-delay: 0.7s; }
        .flip-text span:nth-child(9) { animation-delay: 0.8s; }
        .flip-text span:nth-child(10) { animation-delay: 0.9s; }
        .flip-text span:nth-child(11) { animation-delay: 1s; }
                
            </style>
            <div class="flip-text">
                <span>H</span><span>e</span><span>l</span><span>l</span><span>o</span><span>&nbsp;</span>
                <span>W</span><span>o</span><span>r</span><span>l</span><span>d</span>
            </div>
        `
    },
    
    "elastic-bounce":{
        name: "Elastic Bounce Effect",
        html: '<div class="elastic-bounce"><span>H</span><span>e</span><span>l</span><span>l</span><span>o</span><span>&nbsp;</span><span>W</span><span>o</span><span>r</span><span>l</span><span>d</span></div>',
        css: `.bounce-text {
      font-size: 42px;
      font-weight: bold;
      display: flex;
    }

    .bounce-text span {
      display: inline-block;
      color: #2fbee9;
      animation: bounce 2s ease-in-out infinite;
    }

    .bounce-text span:nth-child(1) { animation-delay: 0s; }
    .bounce-text span:nth-child(2) { animation-delay: 0.1s; }
    .bounce-text span:nth-child(3) { animation-delay: 0.2s; }
    .bounce-text span:nth-child(4) { animation-delay: 0.3s; }
    .bounce-text span:nth-child(5) { animation-delay: 0.4s; }
    .bounce-text span:nth-child(6) { animation-delay: 0.5s; }
    .bounce-text span:nth-child(7) { animation-delay: 0.6s; }
    .bounce-text span:nth-child(8) { animation-delay: 0.7s; }
    .bounce-text span:nth-child(9) { animation-delay: 0.8s; }
    .bounce-text span:nth-child(10) { animation-delay: 0.9s; }
    .bounce-text span:nth-child(11) { animation-delay: 1s; }

    @keyframes bounce {
      0%, 100% { transform: translateY(0) scale(1); }
      20% { transform: translateY(-20px) scaleY(1.2); }
      40% { transform: translateY(10px) scaleY(0.8); }
      60% { transform: translateY(-5px) scaleY(1.1); }
    }`,
        js: "// No JavaScript required for this animation",
        preview: `
            <style>
            .bounce-text {
      font-size: 42px;
      font-weight: bold;
      display: flex;
    }

    .bounce-text span {
      display: inline-block;
      color: #2fbee9;
      animation: bounce 2s ease-in-out infinite;
    }

    .bounce-text span:nth-child(1) { animation-delay: 0s; }
    .bounce-text span:nth-child(2) { animation-delay: 0.1s; }
    .bounce-text span:nth-child(3) { animation-delay: 0.2s; }
    .bounce-text span:nth-child(4) { animation-delay: 0.3s; }
    .bounce-text span:nth-child(5) { animation-delay: 0.4s; }
    .bounce-text span:nth-child(6) { animation-delay: 0.5s; }
    .bounce-text span:nth-child(7) { animation-delay: 0.6s; }
    .bounce-text span:nth-child(8) { animation-delay: 0.7s; }
    .bounce-text span:nth-child(9) { animation-delay: 0.8s; }
    .bounce-text span:nth-child(10) { animation-delay: 0.9s; }
    .bounce-text span:nth-child(11) { animation-delay: 1s; }

    @keyframes bounce {
      0%, 100% { transform: translateY(0) scale(1); }
      20% { transform: translateY(-20px) scaleY(1.2); }
      40% { transform: translateY(10px) scaleY(0.8); }
      60% { transform: translateY(-5px) scaleY(1.1); }
    }
                
            </style>
<div class="bounce-text">
        <span>H</span><span>e</span><span>l</span><span>l</span><span>o</span><span>&nbsp;</span>
        <span>W</span><span>o</span><span>r</span><span>l</span><span>d</span>
      </div>        `
    },
    
    "floating-letters":{
        name: "Floating Letters Effect",
        html: '<div class="floating-letters"><span>H</span><span>e</span><span>l</span><span>l</span><span>o</span><span>&nbsp;</span><span>W</span><span>o</span><span>r</span><span>l</span><span>d</span></div>',
        css: `.floating-letters {
      font-size: 42px;
      font-weight: bold;
      color: rgb(177, 11, 199);
      display: flex;
      justify-content: center;
      overflow: hidden;
    }

    .floating-letters span {
      display: inline-block;
      margin: 0 2px;
      animation: float-letter 3s ease-in-out infinite;
    }

    .floating-letters span:nth-child(1) { animation-delay: 0.0s; }
    .floating-letters span:nth-child(2) { animation-delay: 0.1s; }
    .floating-letters span:nth-child(3) { animation-delay: 0.2s; }
    .floating-letters span:nth-child(4) { animation-delay: 0.3s; }
    .floating-letters span:nth-child(5) { animation-delay: 0.4s; }
    .floating-letters span:nth-child(6) { animation-delay: 0.5s; }
    .floating-letters span:nth-child(7) { animation-delay: 0.6s; }
    .floating-letters span:nth-child(8) { animation-delay: 0.7s; }
    .floating-letters span:nth-child(9) { animation-delay: 0.8s; }
    .floating-letters span:nth-child(10) { animation-delay: 0.9s; }
    .floating-letters span:nth-child(11) { animation-delay: 1.0s; }

    @keyframes float-letter {
      0%, 100% {
        transform: translateY(0);
        text-shadow: 0 0 5px rgba(35, 3, 43, 0.5);
      }
      25% {
        text-shadow: 0 15px 10px rgba(46, 4, 56, 0.25);
      }
      50% {
        transform: translateY(-15px);
        text-shadow: 0 30px 15px rgba(46, 14, 58, 0.1);
      }
      75% {
        text-shadow: 0 15px 10px rgba(46, 11, 63, 0.25);
      }
    }`,
        js: "// No JavaScript required for this animation",
        preview: `
            <style>
            .floating-letters {
      font-size: 42px;
      font-weight: bold;
      color: rgb(177, 11, 199);
      display: flex;
      justify-content: center;
      overflow: hidden;
    }

    .floating-letters span {
      display: inline-block;
      margin: 0 2px;
      animation: float-letter 3s ease-in-out infinite;
    }

    .floating-letters span:nth-child(1) { animation-delay: 0.0s; }
    .floating-letters span:nth-child(2) { animation-delay: 0.1s; }
    .floating-letters span:nth-child(3) { animation-delay: 0.2s; }
    .floating-letters span:nth-child(4) { animation-delay: 0.3s; }
    .floating-letters span:nth-child(5) { animation-delay: 0.4s; }
    .floating-letters span:nth-child(6) { animation-delay: 0.5s; }
    .floating-letters span:nth-child(7) { animation-delay: 0.6s; }
    .floating-letters span:nth-child(8) { animation-delay: 0.7s; }
    .floating-letters span:nth-child(9) { animation-delay: 0.8s; }
    .floating-letters span:nth-child(10) { animation-delay: 0.9s; }
    .floating-letters span:nth-child(11) { animation-delay: 1.0s; }

    @keyframes float-letter {
      0%, 100% {
        transform: translateY(0);
        text-shadow: 0 0 5px rgba(35, 3, 43, 0.5);
      }
      25% {
        text-shadow: 0 15px 10px rgba(46, 4, 56, 0.25);
      }
      50% {
        transform: translateY(-15px);
        text-shadow: 0 30px 15px rgba(46, 14, 58, 0.1);
      }
      75% {
        text-shadow: 0 15px 10px rgba(46, 11, 63, 0.25);
      }
    }
                
            </style>
<div class="floating-letters">
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
      </div>        `
    },
    
    "glitch-text":{
        name: "Glitch Text Effect",
        html: '<div class="glitch-text">Hello World</div>',
        css: `.glitch-text {
      font-size: 42px;
      font-weight: bold;
      position: relative;
      color: #1f2937;
      transition: color 0.3s ease;
    }

    .glitch-text:hover {
      color: #9a9e9e;
    }

    .glitch-text::before,
    .glitch-text::after {
      content: "Hello World";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .glitch-text::before {
      color: #ff0000;
      clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
    }

    .glitch-text::after {
      color: #00fff0;
      clip-path: polygon(0 66%, 100% 66%, 100% 100%, 0 100%);
    }

    .glitch-text:hover::before {
      animation: glitch 0.3s infinite;
    }

    .glitch-text:hover::after {
      animation: glitch 0.3s infinite reverse;
    }

    @keyframes glitch {
      0% { transform: translate(0); }
      20% { transform: translate(-2px, 2px); }
      40% { transform: translate(-2px, -2px); }
      60% { transform: translate(2px, 2px); }
      80% { transform: translate(2px, -2px); }
      100% { transform: translate(0); }
    }`,
        js: "// No JavaScript required for this animation",
        preview: `
            <style>
                .glitch-text {
      font-size: 42px;
      font-weight: bold;
      position: relative;
      color: #1f2937;
      transition: color 0.3s ease;
    }

    .glitch-text:hover {
      color: #9a9e9e;
    }

    .glitch-text::before,
    .glitch-text::after {
      content: "Hello World";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .glitch-text::before {
      color: #ff0000;
      clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
    }

    .glitch-text::after {
      color: #00fff0;
      clip-path: polygon(0 66%, 100% 66%, 100% 100%, 0 100%);
    }

    .glitch-text:hover::before {
      animation: glitch 0.3s infinite;
    }

    .glitch-text:hover::after {
      animation: glitch 0.3s infinite reverse;
    }

    @keyframes glitch {
      0% { transform: translate(0); }
      20% { transform: translate(-2px, 2px); }
      40% { transform: translate(-2px, -2px); }
      60% { transform: translate(2px, 2px); }
      80% { transform: translate(2px, -2px); }
      100% { transform: translate(0); }
    }
            </style>
            <div class="glitch-text">Hello World</div>
        `
    },
    
    "gradient-wave":{
        name: "Gradient Wave Text Effect",
        html: '<div class="gradient-wave">Hello World</div>',
        css: `.gradient-wave {
    font-size: 42px;
    font-weight: bold;
    background: linear-gradient(
        45deg,
        #ff0066,
        #6366f1,
        #00ccff,
        #6366f1,
        #ff0066
    );
    background-size: 400% 400%;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: gradient-wave 8s ease infinite;
    }
    
    @keyframes gradient-wave {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
    }`,
        js: "// No JavaScript required for this animation",
        preview: `
        <style>
            .glitch-text {
                font-size: 42px;
                font-weight: bold;
                color: white;
                position: relative;
                text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
                            -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
                            0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
                animation: glitch 2s infinite;
            }
            .glitch-text::before,
            .glitch-text::after {
                content: "Hello World";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
            }
            .glitch-text::before {
                color: #ff00c1;
                animation: glitch-effect 2s infinite;
                clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
                transform: translate(-0.025em, -0.0125em);
                opacity: 0.8;
            }
            .glitch-text::after {
                color: #3498db;
                animation: glitch-effect 2s infinite reverse;
                clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%);
                transform: translate(0.025em, 0.0125em);
                opacity: 0.8;
            }
            @keyframes glitch-effect {
                0% { transform: translate(0); }
                20% { transform: translate(-5px, 5px); }
                40% { transform: translate(-5px, -5px); }
                60% { transform: translate(5px, 5px); }
                80% { transform: translate(5px, -5px); }
                100% { transform: translate(0); }
            }
            @keyframes glitch {
                0% { text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75), -0.025em -0.05em 0 rgba(0, 255, 0, 0.75), 0.025em 0.05em 0 rgba(0, 0, 255, 0.75); }
                14% { text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75), -0.025em -0.05em 0 rgba(0, 255, 0, 0.75), 0.025em 0.05em 0 rgba(0, 0, 255, 0.75); }
                15% { text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75), 0.025em 0.025em 0 rgba(0, 255, 0, 0.75), -0.05em -0.05em 0 rgba(0, 0, 255, 0.75); }
                49% { text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75), 0.025em 0.025em 0 rgba(0, 255, 0, 0.75), -0.05em -0.05em 0 rgba(0, 0, 255, 0.75); }
                50% { text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75), 0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75); }
                99% { text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75), 0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75); }
                100% { text-shadow: -0.025em 0 0 rgba(255, 0, 0, 0.75), -0.025em -0.025em 0 rgba(0, 255, 0, 0.75), -0.025em -0.05em 0 rgba(0, 0, 255, 0.75); }
            }
        </style>
        <div class="glitch-text">Hello World</div>
    `
    },
    
    "liquid-fill":{
        name: "Liquid Fill Text Effect",
        html: '<div class="liquid-fill">Hello World</div>',
        css: `.liquid-fill {
    font-size: 42px;
    font-weight: bold;
    position: relative;
    color: transparent;
    background-color: white;
    -webkit-background-clip: text;
    background-clip: text;
    }
    
    .liquid-fill::before {
    content: "Hello World";
    position: absolute;
    top: 0;
    left: 0;
    color: transparent;
    background-image: linear-gradient(to top, #6366f1 0%, #6366f1 50%, transparent 50%);
    background-size: 100% 200%;
    background-position: 0% 100%;
    -webkit-background-clip: text;
    background-clip: text;
    animation: fill-up 4s ease-in-out infinite;
    }
    
    @keyframes fill-up {
    0%, 100% {
        background-position: 0% 100%;
    }
    50% {
        background-position: 0% 0%;
    }
    }`,
        js: "// No JavaScript required for this animation",
        preview: `
        <style>
            .liquid-fill {
                font-size: 42px;
                font-weight: bold;
                position: relative;
                color: transparent;
                background-color: white;
                -webkit-background-clip: text;
                background-clip: text;
            }
            .liquid-fill::before {
                content: "Hello World";
                position: absolute;
                top: 0;
                left: 0;
                color: transparent;
                background-image: linear-gradient(to top, #6366f1 0%, #6366f1 50%, transparent 50%);
                background-size: 100% 200%;
                background-position: 0% 100%;
                -webkit-background-clip: text;
                background-clip: text;
                animation: fill-up 4s ease-in-out infinite;
            }
            @keyframes fill-up {
                0%, 100% { background-position: 0% 100%; }
                50% { background-position: 0% 0%; }
            }
        </style>
        <div class="liquid-fill">Hello World</div>
    `
    },
    
    "neon-glow":{
        name: "Neon Glow Text Effect",
        html: '<div class="neon-text">Hello World</div>',
        css: `.neon-text {
    font-size: 42px;
    font-weight: bold;
    color: #fff;
    text-shadow: 
        0 0 5px #6366f1,
        0 0 10px #6366f1,
        0 0 20px #6366f1,
        0 0 40px #6366f1,
        0 0 80px #6366f1;
    animation: neon-pulse 1.5s ease-in-out infinite alternate;
    }
    
    @keyframes neon-pulse {
    from {
        text-shadow: 
            0 0 5px #6366f1,
            0 0 10px #6366f1,
            0 0 15px #6366f1,
            0 0 20px #6366f1;
    }
    to {
        text-shadow: 
            0 0 10px #6366f1,
            0 0 20px #6366f1,
            0 0 30px #6366f1,
            0 0 40px #6366f1,
            0 0 70px #6366f1;
    }
    }`,
        js: "// No JavaScript required for this animation",
        preview:`
            <style>
                
            </style>
            <div class="glitch-text">Hello World</div>
        `
    },
    
    "focus-in":{
        name: "Text Focus In Effect",
        html: '<div class="focus-in-text">Hello World</div>',
        css: ` .focus-text {
      font-size: 42px;
      font-weight: bold;
      color: #08b92e;
      filter: blur(5px);
      opacity: 0.5;
      transition: filter 0.5s ease, opacity 0.5s ease;
    }

    .focus-text:hover {
      filter: blur(0);
      opacity: 1;
    }`,
        js: "// No JavaScript required for this animation",
        preview: `
            <style>
             .focus-text {
      font-size: 42px;
      font-weight: bold;
      color: #08b92e;
      filter: blur(5px);
      opacity: 0.5;
      transition: filter 0.5s ease, opacity 0.5s ease;
    }

    .focus-text:hover {
      filter: blur(0);
      opacity: 1;
    }
                
            </style>
<div class="focus-text">
        Hello World
      </div>        `
    },
    
    "perspective-rotation":{
        name: "Perspective Rotation Effect",
        html: '<div class="perspective-text">Hello World</div>',
        css: `.perspective-text {
      font-size: 42px;
      font-weight: bold;
      color: rgb(28, 0, 104);
      transform-style: preserve-3d;
      animation: rotate-text 8s ease-in-out infinite;
    }

    @keyframes rotate-text {
      0%, 100% {
        transform: rotateY(0deg) rotateX(0deg);
        text-shadow: 0 0 10px rgba(99, 102, 241, 0.8);
      }
      25% {
        transform: rotateY(20deg) rotateX(-10deg);
        text-shadow: -5px 5px 10px rgba(99, 102, 241, 0.8);
      }
      50% {
        transform: rotateY(0deg) rotateX(0deg);
        text-shadow: 0 0 10px rgba(99, 102, 241, 0.8);
      }
      75% {
        transform: rotateY(-20deg) rotateX(10deg);
        text-shadow: 5px -5px 10px rgba(99, 102, 241, 0.8);
      }
    }`,
        js: "// No JavaScript required for this animation",
        preview:`
            <style>
            .perspective-text {
      font-size: 42px;
      font-weight: bold;
      color: rgb(28, 0, 104);
      transform-style: preserve-3d;
      animation: rotate-text 8s ease-in-out infinite;
    }

    @keyframes rotate-text {
      0%, 100% {
        transform: rotateY(0deg) rotateX(0deg);
        text-shadow: 0 0 10px rgba(99, 102, 241, 0.8);
      }
      25% {
        transform: rotateY(20deg) rotateX(-10deg);
        text-shadow: -5px 5px 10px rgba(99, 102, 241, 0.8);
      }
      50% {
        transform: rotateY(0deg) rotateX(0deg);
        text-shadow: 0 0 10px rgba(99, 102, 241, 0.8);
      }
      75% {
        transform: rotateY(-20deg) rotateX(10deg);
        text-shadow: 5px -5px 10px rgba(99, 102, 241, 0.8);
      }
    }
                
            </style>
<div class="perspective-text">
        Hello World
      </div>        `
    },
    "text-shadow-wave":{
        name: "Text Shadow Wave Effect",
        html: '<div class="text-shadow-wave">Hello World</div>',
        css: `.shadow-wave {
      font-size: 42px;
      font-weight: bold;
      color: rgb(228, 59, 59);
      position: relative;
      animation: shadow-wave 3s ease-in-out infinite;
    }

    @keyframes shadow-wave {
      0%, 100% {
        text-shadow: 
          0 0 0 rgba(99, 102, 241, 0),
          0 0 0 rgba(99, 102, 241, 0),
          0 0 0 rgba(99, 102, 241, 0),
          0 0 0 rgba(99, 102, 241, 0);
      }
      20% {
        text-shadow: 
          0 0.125em 0 rgba(99, 102, 241, 1),
          0 0.25em 0 rgba(99, 102, 241, 0.6),
          0 0.375em 0 rgba(99, 102, 241, 0.4),
          0 0.5em 0 rgba(99, 102, 241, 0.2);
      }
      40% {
        text-shadow: 
          0.125em 0 0 rgba(99, 102, 241, 1),
          0.25em 0 0 rgba(99, 102, 241, 0.6),
          0.375em 0 0 rgba(99, 102, 241, 0.4),
          0.5em 0 0 rgba(99, 102, 241, 0.2);
      }
      60% {
        text-shadow: 
          0 -0.125em 0 rgba(99, 102, 241, 1),
          0 -0.25em 0 rgba(99, 102, 241, 0.6),
          0 -0.375em 0 rgba(99, 102, 241, 0.4),
          0 -0.5em 0 rgba(99, 102, 241, 0.2);
      }
      80% {
        text-shadow: 
          -0.125em 0 0 rgba(99, 102, 241, 1),
          -0.25em 0 0 rgba(99, 102, 241, 0.6),
          -0.375em 0 0 rgba(99, 102, 241, 0.4),
          -0.5em 0 0 rgba(99, 102, 241, 0.2);
      }
    }`,
        js: "// No JavaScript required for this animation",
        preview: `
            <style>
                .shadow-wave {
      font-size: 42px;
      font-weight: bold;
      color: rgb(228, 59, 59);
      position: relative;
      animation: shadow-wave 3s ease-in-out infinite;
    }

    @keyframes shadow-wave {
      0%, 100% {
        text-shadow: 
          0 0 0 rgba(99, 102, 241, 0),
          0 0 0 rgba(99, 102, 241, 0),
          0 0 0 rgba(99, 102, 241, 0),
          0 0 0 rgba(99, 102, 241, 0);
      }
      20% {
        text-shadow: 
          0 0.125em 0 rgba(99, 102, 241, 1),
          0 0.25em 0 rgba(99, 102, 241, 0.6),
          0 0.375em 0 rgba(99, 102, 241, 0.4),
          0 0.5em 0 rgba(99, 102, 241, 0.2);
      }
      40% {
        text-shadow: 
          0.125em 0 0 rgba(99, 102, 241, 1),
          0.25em 0 0 rgba(99, 102, 241, 0.6),
          0.375em 0 0 rgba(99, 102, 241, 0.4),
          0.5em 0 0 rgba(99, 102, 241, 0.2);
      }
      60% {
        text-shadow: 
          0 -0.125em 0 rgba(99, 102, 241, 1),
          0 -0.25em 0 rgba(99, 102, 241, 0.6),
          0 -0.375em 0 rgba(99, 102, 241, 0.4),
          0 -0.5em 0 rgba(99, 102, 241, 0.2);
      }
      80% {
        text-shadow: 
          -0.125em 0 0 rgba(99, 102, 241, 1),
          -0.25em 0 0 rgba(99, 102, 241, 0.6),
          -0.375em 0 0 rgba(99, 102, 241, 0.4),
          -0.5em 0 0 rgba(99, 102, 241, 0.2);
      }
    }
            </style>
            <div class="text-shadow-wave">Hello World</div>
        `
    },
        "typewriter-text":{
        name: "Typewriter Effect",
        html: '<div class="typewriter-text">Hello World</div>',
        css: `.typewriter h1 {
      font-size: 42px;
      font-weight: bold;
      color: rgb(167, 117, 117);
      overflow: hidden;
      border-right: .15em solid #6366f1;
      white-space: nowrap;
      margin: 0 auto;
      letter-spacing: .15em;
      animation: 
        typing 1s steps(40, end),
        blink-caret .75s step-end infinite;
    }
    
    @keyframes typing {
      from { width: 0 }
      to { width: 100% }
    }
    
    @keyframes blink-caret {
      from, to { border-color: transparent }
      50% { border-color: #6366f1; }
    }`,
        js: "// No JavaScript required for this animation",
        preview: `
            <style>
                .typewriter h1 {
      font-size: 42px;
      font-weight: bold;
      color: rgb(167, 117, 117);
      overflow: hidden;
      border-right: .15em solid #6366f1;
      white-space: nowrap;
      margin: 0 auto;
      letter-spacing: .15em;
      animation: 
        typing 1s steps(40, end),
        blink-caret .75s step-end infinite;
    }
    
    @keyframes typing {
      from { width: 0 }
      to { width: 100% }
    }
    
    @keyframes blink-caret {
      from, to { border-color: transparent }
      50% { border-color: #6366f1; }
    }
            </style>
<div class="typewriter">
        <h1>Hello World</h1>
    </div>        `
    },


    
     "glitch-text":{
    name: "Glitch Text Effect",
    html: '<h1 class="glitch" data-animation="glitch">Hello World</h1>',
    css: `.glitch-text {
      font-size: 42px;
      font-weight: bold;
      position: relative;
      color: #1f2937;
      transition: color 0.3s ease;
    }

    .glitch-text:hover {
      color: transparent;
    }

    .glitch-text::before,
    .glitch-text::after {
      content: "Hello World";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .glitch-text::before {
      color: #ff0000;
      clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
    }

    .glitch-text::after {
      color: #00fff0;
      clip-path: polygon(0 66%, 100% 66%, 100% 100%, 0 100%);
    }

    .glitch-text:hover::before {
      animation: glitch 0.3s infinite;
    }

    .glitch-text:hover::after {
      animation: glitch 0.3s infinite reverse;
    }

    @keyframes glitch {
      0% { transform: translate(0); }
      20% { transform: translate(-2px, 2px); }
      40% { transform: translate(-2px, -2px); }
      60% { transform: translate(2px, 2px); }
      80% { transform: translate(2px, -2px); }
      100% { transform: translate(0); }
    }`,
    js: "// No JavaScript required for this animation",
    preview: `<style>
.glitch-text {
      font-size: 42px;
      font-weight: bold;
      position: relative;
      color: #1f2937;
      transition: color 0.3s ease;
    }

    .glitch-text:hover {
      color: transparent;
    }

    .glitch-text::before,
    .glitch-text::after {
      content: "Hello World";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .glitch-text::before {
      color: #ff0000;
      clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
    }

    .glitch-text::after {
      color: #00fff0;
      clip-path: polygon(0 66%, 100% 66%, 100% 100%, 0 100%);
    }

    .glitch-text:hover::before {
      animation: glitch 0.3s infinite;
    }

    .glitch-text:hover::after {
      animation: glitch 0.3s infinite reverse;
    }

    @keyframes glitch {
      0% { transform: translate(0); }
      20% { transform: translate(-2px, 2px); }
      40% { transform: translate(-2px, -2px); }
      60% { transform: translate(2px, 2px); }
      80% { transform: translate(2px, -2px); }
      100% { transform: translate(0); }
    }
</style>
<div class="glitch-text">
        Hello World
      </div>`
  },
  "shadow-wave":{
    name: "Text Shadow Wave Effect",
    html: '<h1 class="text-shadow-wave" data-animation="text-shadow-wave">Hello World</h1>',
    css: `.shadow-wave {
      font-size: 42px;
      font-weight: bold;
      color: rgb(228, 59, 59);
      position: relative;
      animation: shadow-wave 3s ease-in-out infinite;
    }

    @keyframes shadow-wave {
      0%, 100% {
        text-shadow: 
          0 0 0 rgba(99, 102, 241, 0),
          0 0 0 rgba(99, 102, 241, 0),
          0 0 0 rgba(99, 102, 241, 0),
          0 0 0 rgba(99, 102, 241, 0);
      }
      20% {
        text-shadow: 
          0 0.125em 0 rgba(99, 102, 241, 1),
          0 0.25em 0 rgba(99, 102, 241, 0.6),
          0 0.375em 0 rgba(99, 102, 241, 0.4),
          0 0.5em 0 rgba(99, 102, 241, 0.2);
      }
      40% {
        text-shadow: 
          0.125em 0 0 rgba(99, 102, 241, 1),
          0.25em 0 0 rgba(99, 102, 241, 0.6),
          0.375em 0 0 rgba(99, 102, 241, 0.4),
          0.5em 0 0 rgba(99, 102, 241, 0.2);
      }
      60% {
        text-shadow: 
          0 -0.125em 0 rgba(99, 102, 241, 1),
          0 -0.25em 0 rgba(99, 102, 241, 0.6),
          0 -0.375em 0 rgba(99, 102, 241, 0.4),
          0 -0.5em 0 rgba(99, 102, 241, 0.2);
      }
      80% {
        text-shadow: 
          -0.125em 0 0 rgba(99, 102, 241, 1),
          -0.25em 0 0 rgba(99, 102, 241, 0.6),
          -0.375em 0 0 rgba(99, 102, 241, 0.4),
          -0.5em 0 0 rgba(99, 102, 241, 0.2);
      }
    }`,
    js: "// No JavaScript required for this animation",
    preview: `<style>
.shadow-wave {
      font-size: 42px;
      font-weight: bold;
      color: rgb(228, 59, 59);
      position: relative;
      animation: shadow-wave 3s ease-in-out infinite;
    }

    @keyframes shadow-wave {
      0%, 100% {
        text-shadow: 
          0 0 0 rgba(99, 102, 241, 0),
          0 0 0 rgba(99, 102, 241, 0),
          0 0 0 rgba(99, 102, 241, 0),
          0 0 0 rgba(99, 102, 241, 0);
      }
      20% {
        text-shadow: 
          0 0.125em 0 rgba(99, 102, 241, 1),
          0 0.25em 0 rgba(99, 102, 241, 0.6),
          0 0.375em 0 rgba(99, 102, 241, 0.4),
          0 0.5em 0 rgba(99, 102, 241, 0.2);
      }
      40% {
        text-shadow: 
          0.125em 0 0 rgba(99, 102, 241, 1),
          0.25em 0 0 rgba(99, 102, 241, 0.6),
          0.375em 0 0 rgba(99, 102, 241, 0.4),
          0.5em 0 0 rgba(99, 102, 241, 0.2);
      }
      60% {
        text-shadow: 
          0 -0.125em 0 rgba(99, 102, 241, 1),
          0 -0.25em 0 rgba(99, 102, 241, 0.6),
          0 -0.375em 0 rgba(99, 102, 241, 0.4),
          0 -0.5em 0 rgba(99, 102, 241, 0.2);
      }
      80% {
        text-shadow: 
          -0.125em 0 0 rgba(99, 102, 241, 1),
          -0.25em 0 0 rgba(99, 102, 241, 0.6),
          -0.375em 0 0 rgba(99, 102, 241, 0.4),
          -0.5em 0 0 rgba(99, 102, 241, 0.2);
      }
    }
</style>
<div class="shadow-wave">
        Hello World
      </div>`
  },
  "focus-text":{
    name: "Text Focus In Effect",
    html: '<h1 class="text-focus-in" data-animation="text-focus-in">Hello World</h1>',
    css: `.focus-text {
      font-size: 42px;
      font-weight: bold;
      color: #08b92e;
      filter: blur(5px);
      opacity: 0.5;
      transition: filter 0.5s ease, opacity 0.5s ease;
    }

    .focus-text:hover {
      filter: blur(0);
      opacity: 1;
    }
`,
    js: "// No JavaScript required for this animation",
    preview: `<style>
.focus-text {
      font-size: 42px;
      font-weight: bold;
      color: #08b92e;
      filter: blur(5px);
      opacity: 0.5;
      transition: filter 0.5s ease, opacity 0.5s ease;
    }

    .focus-text:hover {
      filter: blur(0);
      opacity: 1;
    }
</style>
<div class="focus-text">
        Hello World
      </div>`
  },
  
  "neon-text":{
    name: "Neon Glow Text Effect",
    html: '<h1 class="neon-glow" data-animation="neon-glow">Hello World</h1>',
    css: ` .neon-text {
      font-size: 42px;
      font-weight: bold;
      color: #fff;
      text-shadow: 
        0 0 5px #6366f1,
        0 0 10px #6366f1,
        0 0 20px #6366f1,
        0 0 40px #6366f1,
        0 0 80px #6366f1;
      animation: neon-pulse 1.5s ease-in-out infinite alternate;
    }

    @keyframes neon-pulse {
      from {
        text-shadow: 
          0 0 5px #6366f1,
          0 0 10px #6366f1,
          0 0 15px #6366f1,
          0 0 20px #6366f1;
      }
      to {
        text-shadow: 
          0 0 10px #6366f1,
          0 0 20px #6366f1,
          0 0 30px #6366f1,
          0 0 40px #6366f1,
          0 0 70px #6366f1;
      }
    }`,
    js: "// No JavaScript required for this animation",
    preview: `<style>
 .neon-text {
      font-size: 42px;
      font-weight: bold;
      color: #fff;
      text-shadow: 
        0 0 5px #6366f1,
        0 0 10px #6366f1,
        0 0 20px #6366f1,
        0 0 40px #6366f1,
        0 0 80px #6366f1;
      animation: neon-pulse 1.5s ease-in-out infinite alternate;
    }

    @keyframes neon-pulse {
      from {
        text-shadow: 
          0 0 5px #6366f1,
          0 0 10px #6366f1,
          0 0 15px #6366f1,
          0 0 20px #6366f1;
      }
      to {
        text-shadow: 
          0 0 10px #6366f1,
          0 0 20px #6366f1,
          0 0 30px #6366f1,
          0 0 40px #6366f1,
          0 0 70px #6366f1;
      }
    }
</style>
<div class="neon-text">
        Hello World
      </div>`
  },
  
  "liquid-fill":{
    name: "Interactive Liquid Fill Text Effect",
    html: '<h1 class="liquid-fill" data-animation="liquid-fill">Hello World</h1>',
    css: `    .liquid-fill {
      font-size: 42px;
      font-weight: bold;
      position: relative;
      color: #e7d910; /* Neutral gray when not active */
      background-color: #e7d910;
      -webkit-background-clip: text;
      background-clip: text;
      transition: color 0.3s ease;
    }

    .liquid-fill::before {
      content: "Hello World";
      position: absolute;
      top: 0;
      left: 0;
      color: transparent;
      background-image: linear-gradient(to top, #6366f1 0%, #6366f1 50%, transparent 50%);
      background-size: 100% 200%;
      background-position: 0% 100%;
      -webkit-background-clip: text;
      background-clip: text;
      transition: background-position 0.8s ease-in-out;
    }

    .liquid-fill:hover::before {
      background-position: 0% 0%;
    }

    .liquid-fill:hover {
      color: transparent;
    }
`,
    js: "// No JavaScript required for this animation",
    preview: `<style>
    .liquid-fill {
      font-size: 42px;
      font-weight: bold;
      position: relative;
      color: #e7d910; /* Neutral gray when not active */
      background-color: #e7d910;
      -webkit-background-clip: text;
      background-clip: text;
      transition: color 0.3s ease;
    }

    .liquid-fill::before {
      content: "Hello World";
      position: absolute;
      top: 0;
      left: 0;
      color: transparent;
      background-image: linear-gradient(to top, #6366f1 0%, #6366f1 50%, transparent 50%);
      background-size: 100% 200%;
      background-position: 0% 100%;
      -webkit-background-clip: text;
      background-clip: text;
      transition: background-position 0.8s ease-in-out;
    }

    .liquid-fill:hover::before {
      background-position: 0% 0%;
    }

    .liquid-fill:hover {
      color: transparent;
    }

</style>
<div class="liquid-fill">
        Hello World
      </div>`
  },
  "perspective-rotation":{
    name: "Perspective Rotation Effect",
    html: '<h1 class="perspective-rotation" data-animation="perspective-rotation">Hello World</h1>',
    css: ` .perspective-text {
      font-size: 42px;
      font-weight: bold;
      color: rgb(28, 0, 104);
      transform-style: preserve-3d;
      animation: rotate-text 8s ease-in-out infinite;
    }

    @keyframes rotate-text {
      0%, 100% {
        transform: rotateY(0deg) rotateX(0deg);
        text-shadow: 0 0 10px rgba(99, 102, 241, 0.8);
      }
      25% {
        transform: rotateY(20deg) rotateX(-10deg);
        text-shadow: -5px 5px 10px rgba(99, 102, 241, 0.8);
      }
      50% {
        transform: rotateY(0deg) rotateX(0deg);
        text-shadow: 0 0 10px rgba(99, 102, 241, 0.8);
      }
      75% {
        transform: rotateY(-20deg) rotateX(10deg);
        text-shadow: 5px -5px 10px rgba(99, 102, 241, 0.8);
      }
    }`,
    js: "// No JavaScript required for this animation",
    preview: `<style>
 .perspective-text {
      font-size: 42px;
      font-weight: bold;
      color: rgb(28, 0, 104);
      transform-style: preserve-3d;
      animation: rotate-text 8s ease-in-out infinite;
    }

    @keyframes rotate-text {
      0%, 100% {
        transform: rotateY(0deg) rotateX(0deg);
        text-shadow: 0 0 10px rgba(99, 102, 241, 0.8);
      }
      25% {
        transform: rotateY(20deg) rotateX(-10deg);
        text-shadow: -5px 5px 10px rgba(99, 102, 241, 0.8);
      }
      50% {
        transform: rotateY(0deg) rotateX(0deg);
        text-shadow: 0 0 10px rgba(99, 102, 241, 0.8);
      }
      75% {
        transform: rotateY(-20deg) rotateX(10deg);
        text-shadow: 5px -5px 10px rgba(99, 102, 241, 0.8);
      }
    }
</style>
<div class="perspective-text">
        Hello World
      </div>`
  }
  
  
}