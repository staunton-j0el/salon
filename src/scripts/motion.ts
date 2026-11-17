/**
 * Scroll fallback and a desktop scissors cursor.
 * Scroll-driven CSS handles the motion where animation-timeline is supported.
 */

/**
 * True when the browser can scrub CSS to the scroll position.
 */
function supportsScrollTimeline(): boolean {
  return typeof CSS !== 'undefined' && CSS.supports('animation-timeline: view()');
}

/**
 * Map scroll position to a 0–1 progress variable for snips and cut-rules.
 * Does nothing when scroll timelines exist or the reader prefers less motion.
 */
function initScrollFallback(): void {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || supportsScrollTimeline()) return;

  const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-motion]'));
  if (nodes.length === 0) return;

  let ticking = false;

  const update = (): void => {
    ticking = false;
    const height = window.innerHeight || 1;
    for (const el of nodes) {
      let progress = 0;
      if (el.dataset.motion === 'scroll') {
        const end = Number(el.dataset.endpx || '420');
        progress = window.scrollY / (end > 0 ? end : 420);
      } else {
        const top = el.getBoundingClientRect().top;
        progress = (height - top) / (height * 0.72);
      }
      const clamped = Math.min(1, Math.max(0, progress));
      el.style.setProperty('--p', clamped.toFixed(3));
    }
  };

  const requestUpdate = (): void => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  };

  update();
  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate, { passive: true });
}

/**
 * Trail a decorative scissors just off the mouse on fine pointers.
 * Touch, reduced motion, and idle time do not keep the loop running.
 */
function initCursor(): void {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = window.matchMedia('(pointer: fine)').matches;
  const el = document.querySelector<HTMLElement>('.cursor-scissors');
  if (!el || reduce || !fine) return;

  el.hidden = false;
  let x = -80;
  let y = -80;
  let currentX = -80;
  let currentY = -80;
  let running = false;
  let stillFrames = 0;

  const step = (): void => {
    currentX += (x - currentX) * 0.2;
    currentY += (y - currentY) * 0.2;
    const angle = -28 + Math.max(-10, Math.min(10, x - currentX));
    el.style.transform = `translate3d(${currentX + 16}px, ${currentY + 18}px, 0) rotate(${angle}deg)`;
    if (Math.abs(x - currentX) < 0.4 && Math.abs(y - currentY) < 0.4) {
      stillFrames += 1;
      if (stillFrames > 14) {
        running = false;
        return;
      }
    } else {
      stillFrames = 0;
    }
    requestAnimationFrame(step);
  };

  window.addEventListener(
    'pointermove',
    (event) => {
      if (event.pointerType !== 'mouse') return;
      x = event.clientX;
      y = event.clientY;
      el.classList.add('is-on');
      if (!running) {
        running = true;
        stillFrames = 0;
        requestAnimationFrame(step);
      }
    },
    { passive: true },
  );
}

initScrollFallback();
initCursor();
