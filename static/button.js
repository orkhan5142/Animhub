const animations_button = {
    "button-shine": {
        name: "Button Shine Effect",
        html: `<button class="button-shine">Shine</button>`,
        css: `/* Shine Button Effect */
.button-shine {
  position: relative;
  padding: 16px 32px;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  background: linear-gradient(to right, #6366f1, #8b5cf6);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
}
.button-shine:hover {
  box-shadow: 0 5px 15px rgba(139, 92, 246, 0.4);
}
.button-shine::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 50%;
  height: 100%;
  background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0) 100%);
  transform: skewX(-25deg);
  transition: left 0.6s ease;
}
.button-shine:hover::before {
  left: 125%;
}`,
        js: `// No JavaScript required for this animation`,
        preview: `<style>
.button-shine {
  position: relative;
  padding: 16px 32px;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  background: linear-gradient(to right, #6366f1, #8b5cf6);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
}
.button-shine:hover {
  box-shadow: 0 5px 15px rgba(139, 92, 246, 0.4);
}
.button-shine::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 50%;
  height: 100%;
  background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0) 100%);
  transform: skewX(-25deg);
  transition: left 0.6s ease;
}
.button-shine:hover::before {
  left: 125%;
}
</style>
<button class="button-shine">Shine</button>`
    },
    "button-fill": {
        name: "Button Fill Effect",
        html: `<button class="button-fill">Fill In</button>`,
        css: `/* Fill Button Effect */
.button-fill {
  position: relative;
  padding: 16px 32px;
  font-size: 1rem;
  font-weight: 600;
  color: #6366f1;
  background-color: transparent;
  border: 2px solid #6366f1;
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;
  transition: color 0.4s ease-in-out;
  z-index: 1;
}
.button-fill::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #6366f1;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease-in-out;
  z-index: -1;
}
.button-fill:hover {
  color: white;
}
.button-fill:hover::before {
  transform: scaleX(1);
}`,
        js: `// No JavaScript required for this animation`,
        preview: `<style>
.button-fill {
  position: relative;
  padding: 16px 32px;
  font-size: 1rem;
  font-weight: 600;
  color: #6366f1;
  background-color: transparent;
  border: 2px solid #6366f1;
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;
  transition: color 0.4s ease-in-out;
  z-index: 1;
}
.button-fill::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #6366f1;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease-in-out;
  z-index: -1;
}
.button-fill:hover {
  color: white;
}
.button-fill:hover::before {
  transform: scaleX(1);
}
</style>
<button class="button-fill">Fill In</button>`
    },
    "button-border-trace": {
        name: "Button Border Trace",
        html: `<button class="button-border-trace"><span>Trace Me</span><i></i></button>`,
        css: `/* Border Trace Button Effect */
.button-border-trace {
  position: relative;
  padding: 16px 32px;
  font-size: 1rem;
  font-weight: 600;
  color: #0d9488;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
.button-border-trace span {
    position: relative;
    z-index: 2;
}
.button-border-trace::before,
.button-border-trace::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  background-color: #0d9488;
  transition: width 0.3s ease-out;
}
.button-border-trace::before {
  top: 0;
  left: 0;
}
.button-border-trace::after {
  bottom: 0;
  right: 0;
}
.button-border-trace:hover::before,
.button-border-trace:hover::after {
  width: 100%;
}
.button-border-trace i::before,
.button-border-trace i::after {
  content: '';
  position: absolute;
  width: 2px;
  height: 0;
  background-color: #0d9488;
  transition: height 0.3s 0.3s ease-out;
}
.button-border-trace i::before {
  bottom: 0;
  left: 0;
}
.button-border-trace i::after {
  top: 0;
  right: 0;
}
.button-border-trace:hover i::before,
.button-border-trace:hover i::after {
  height: 100%;
}`,
        js: `// No JavaScript required for this animation`,
        preview: `<style>
.button-border-trace {
  position: relative;
  padding: 16px 32px;
  font-size: 1rem;
  font-weight: 600;
  color: #0d9488;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
.button-border-trace span {
    position: relative;
    z-index: 2;
}
.button-border-trace::before,
.button-border-trace::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  background-color: #0d9488;
  transition: width 0.3s ease-out;
}
.button-border-trace::before {
  top: 0;
  left: 0;
}
.button-border-trace::after {
  bottom: 0;
  right: 0;
}
.button-border-trace:hover::before,
.button-border-trace:hover::after {
  width: 100%;
}
.button-border-trace i::before,
.button-border-trace i::after {
  content: '';
  position: absolute;
  width: 2px;
  height: 0;
  background-color: #0d9488;
  transition: height 0.3s 0.3s ease-out;
}
.button-border-trace i::before {
  bottom: 0;
  left: 0;
}
.button-border-trace i::after {
  top: 0;
  right: 0;
}
.button-border-trace:hover i::before,
.button-border-trace:hover i::after {
  height: 100%;
}
</style>
<button class="button-border-trace"><span>Trace Me</span><i></i></button>`
    },
    "button-icon-slide": {
        name: "Button Icon Slide",
        html: `<button class="button-icon-slide">Submit <span class="icon">→</span></button>`,
        css: `/* Icon Slide Button Effect */
.button-icon-slide {
  display: inline-flex;
  align-items: center;
  padding: 16px 32px;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  background-color: #db2777;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.button-icon-slide:hover {
    background-color: #be185d;
}
.button-icon-slide .icon {
  margin-left: 8px;
  width: 0;
  opacity: 0;
  transform: translateX(-10px);
  transition: width 0.3s, opacity 0.3s, transform 0.3s ease;
}
.button-icon-slide:hover .icon {
  width: 1.2em;
  opacity: 1;
  transform: translateX(0);
}`,
        js: `// No JavaScript required for this animation`,
        preview: `<style>
.button-icon-slide {
  display: inline-flex;
  align-items: center;
  padding: 16px 32px;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  background-color: #db2777;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.button-icon-slide:hover {
    background-color: #be185d;
}
.button-icon-slide .icon {
  margin-left: 8px;
  width: 0;
  opacity: 0;
  transform: translateX(-10px);
  transition: width 0.3s, opacity 0.3s, transform 0.3s ease;
}
.button-icon-slide:hover .icon {
  width: 1.2em;
  opacity: 1;
  transform: translateX(0);
}
</style>
<button class="button-icon-slide">Submit <span class="icon">→</span></button>`
    },
    "button-3d-push": {
        name: "3D Push Button",
        html: `<div class="button-3d-push-wrapper"><button class="button-3d-push">Push Me</button></div>`,
        css: `/* 3D Push Button Effect */
.button-3d-push-wrapper {
    background: #e2e8f0;
    padding: 10px;
    border-radius: 12px;
    display: inline-block;
}
.button-3d-push {
  padding: 16px 32px;
  font-size: 1rem;
  font-weight: 700;
  color: #475569;
  background-color: #f1f5f9;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 4px #cbd5e1;
  transition: transform 0.1s ease-in-out, box-shadow 0.1s ease-in-out;
}
.button-3d-push:hover {
    background-color: #e2e8f0;
}
.button-3d-push:active {
  transform: translateY(4px);
  box-shadow: 0 0 #cbd5e1;
}`,
        js: `// No JavaScript required for this animation`,
        preview: `<style>
.button-3d-push-wrapper {
    background: #e2e8f0;
    padding: 10px;
    border-radius: 12px;
    display: inline-block;
}
.button-3d-push {
  padding: 16px 32px;
  font-size: 1rem;
  font-weight: 700;
  color: #475569;
  background-color: #f1f5f9;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 4px #cbd5e1;
  transition: transform 0.1s ease-in-out, box-shadow 0.1s ease-in-out;
}
.button-3d-push:hover {
    background-color: #e2e8f0;
}
.button-3d-push:active {
  transform: translateY(4px);
  box-shadow: 0 0 #cbd5e1;
}
</style>
<div class="button-3d-push-wrapper">
    <button class="button-3d-push">Push Me</button>
</div>`
    },
    "button-spotlight": {
        name: "Spotlight Button",
        html: `<button class="button-spotlight"><span>Spotlight</span></button>`,
        css: `/* Spotlight Button Effect */
.button-spotlight {
  position: relative;
  padding: 16px 32px;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  background-color: #1e293b;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;
}
.button-spotlight span {
  position: relative;
  z-index: 2;
  pointer-events: none;
}
.button-spotlight::before {
  content: '';
  position: absolute;
  left: var(--x, 50%);
  top: var(--y, 50%);
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  background: radial-gradient(circle closest-side, #d946ef, transparent);
  border-radius: 50%;
  transition: width 0.4s, height 0.4s;
  z-index: 1;
}
.button-spotlight:hover::before {
  width: 200px;
  height: 200px;
}`,
        js: `// This code should be run for each spotlight button on the page.
// It's best to run this after the preview is added to the DOM.
const spotlightBtn = document.querySelector('.button-spotlight');
if (spotlightBtn) {
    spotlightBtn.onmousemove = function(e) {
        const x = e.pageX - e.target.offsetLeft;
        const y = e.pageY - e.target.offsetTop;
        e.target.style.setProperty('--x', x + 'px');
        e.target.style.setProperty('--y', y + 'px');
    }
}`,
        preview: `<style>
.button-spotlight {
  position: relative;
  padding: 16px 32px;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  background-color: #1e293b;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;
}
.button-spotlight span {
  position: relative;
  z-index: 2;
  pointer-events: none;
}
.button-spotlight::before {
  content: '';
  position: absolute;
  left: var(--x, 50%);
  top: var(--y, 50%);
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  background: radial-gradient(circle closest-side, #d946ef, transparent);
  border-radius: 50%;
  transition: width 0.4s, height 0.4s;
  z-index: 1;
}
.button-spotlight:hover::before {
  width: 200px;
  height: 200px;
}
</style>
<button class="button-spotlight"><span>Spotlight</span></button>
<script>
  const previewSpotlightBtn = document.querySelector('#modalPreview .button-spotlight');
  if (previewSpotlightBtn) {
    previewSpotlightBtn.onmousemove = function(e) {
      // Get position relative to the preview area, not the whole page
      const rect = e.target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      e.target.style.setProperty('--x', x + 'px');
      e.target.style.setProperty('--y', y + 'px');
    }
  }
<\/script>`
    },
    "button-shutter-in": {
        name: "Shutter In Button",
        html: `<button class="button-shutter-in">Shutter</button>`,
        css: `/* Shutter In Button Effect */
.button-shutter-in {
  position: relative;
  padding: 16px 32px;
  font-size: 1rem;
  font-weight: 600;
  color: #ca8a04;
  background-color: transparent;
  border: 2px solid #ca8a04;
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;
  transition: color 0.4s ease;
  z-index: 1;
}
.button-shutter-in::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ca8a04;
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  z-index: -1;
}
.button-shutter-in:hover {
  color: white;
}
.button-shutter-in:hover::before {
  transform: scaleY(1);
  transform-origin: bottom;
}`,
        js: `// No JavaScript required for this animation`,
        preview: `<style>
.button-shutter-in {
  position: relative;
  padding: 16px 32px;
  font-size: 1rem;
  font-weight: 600;
  color: #ca8a04;
  background-color: transparent;
  border: 2px solid #ca8a04;
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;
  transition: color 0.4s ease;
  z-index: 1;
}
.button-shutter-in::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #ca8a04;
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86);
  z-index: -1;
}
.button-shutter-in:hover {
  color: white;
}
.button-shutter-in:hover::before {
  transform: scaleY(1);
  transform-origin: bottom;
}
</style>
<button class="button-shutter-in">Shutter</button>`
    ,
    },
};