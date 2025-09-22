// script.js
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter span[data-count]");
  const section = document.querySelector(".counters");

  if (!section || counters.length === 0) return;

  function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function animateSpan(span, duration = 1500) {
    const target = parseInt(span.dataset.count, 10) || 0;
    const startTime = performance.now();

    function tick(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutCubic(progress);
      const value = Math.floor(eased * target);
      span.textContent = value;

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        span.textContent = target;
      }
    }
    requestAnimationFrame(tick);
  }

  function startCounting() {
    counters.forEach(span => {
      const target = +span.dataset.count;
      const duration = Math.min(2200, Math.max(800, target * 8));
      animateSpan(span, duration);
    });
  }

  function resetCounting() {
    counters.forEach(span => {
      span.textContent = "0";
    });
  }

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startCounting();
        } else {
          resetCounting();
        }
      });
    },
    { threshold: 0.25 }
  );

  observer.observe(section);
});





gsap.to(".nav", {
  backgroundColor: "#6a6a77c7",
  duration: 2,
  opacity: 1,
  delay: 1,
  scrollTrigger: {
    trigger: ".main",
    scroller: "body",
    start: "top -10%",
    end: "bottom -11%",
    scrub: 1
  }
})

gsap.from(".nav a", {
  stagger: 0.3,
  y: -80,
  duration: 0.3,
  delay: 0.5
})

gsap.from(".nav img", {
  stagger: -0.7,
  x: -270,
  duration: 0.4,
  delay: 0.2
})


gsap.to(".about", {
  backgroundColor: "#6a6a77c7",
  opacity: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".main",
    start: "top -10%",
    end: "bottom -11%",
    scrub: 1
  }
})


gsap.from(".about-txt h1", {
  x: -1600,
  duration: 0.01,
  stagger: -0.1,
  scrollTrigger: {
    trigger: "about",
    scroller: "body",
    start: "top -10%",
    end: "top -10%",
    scrub: 1,

  }
})

gsap.from(".about-txt h3", {
  x: -1400,
  duration: 0.01,
  stagger: -0.1,
  scrollTrigger: {
    trigger: "about",
    scroller: "body",
    start: "top -10%",
    end: "top -10%",
    scrub: 1
  }
})

gsap.from(".about-img", {
  x: -500,
  scale:0.8,
  duration: 0.1,
  stagger: -0.1,
  delay: 1,
  scrollTrigger: {
    trigger: "about",
    scroller: "body",
    start: "top -10%",
    end: "top -10%",
    scrub: 1

  }
})

gsap.to(".about-txt h4 ", {
  duration: 60,
  delay: 25,
  text: "Even Better with Friends!",
  scrollTrigger: {
    trigger: ".about",
    scroller: "body",
    start: " top 10%",
    end: " top 16%",
    scrub: 1,

  }
})

gsap.from(".menu-heading", {
  x: -1400,
  delay: 0.2,
  duration: 1,
  scrollTrigger: {
    trigger: "#menu",
    scroller: "body",
    start: "top 80%",   
    end: "top 50%",     
    scrub: 1,
   
  }
});

gsap.from(".menu-grid", {
  x: -1400,
  delay: 0.3,
  duration: 1,
  scrollTrigger: {
    trigger: "#menu",
    scroller: "body",
    start: "top 80%",   
    end: "top 50%",     
    scrub: 1,
   
  }
});

const myText = new SplitType('#my-text')

gsap.from('.char',{
x:-2000,
stagger:0.05,
delay:0.1,
duration:0.01,
scrub:1
})


gsap.from(".review-txt", {
  x: -1400,
  delay: 0.2,
  duration: 1,
  scrollTrigger: {
    trigger: ".reviews",
    scroller: "body",
    start: "top 80%",   
    end: "top 50%",     
    scrub: 1,
   
  }
});


gsap.from(".review-grid", {
  x: -1400,
  delay: 0.3,
  duration: 1,
  scrollTrigger: {
    trigger: ".reviews",
    scroller: "body",
    start: "top 80%",   
    end: "top 50%",     
    scrub: 1,
   
  }
});


gsap.from(".contact-container ", {
  x: -1400,
  delay: 0.2,
  duration: 1,
  scrollTrigger: {
    trigger: ".contact",
    scroller: "body",
    start: "top 80%",   
    end: "top 50%",     
    scrub: 1,
   
  }
});




gsap.set(".nav img", { transformOrigin: "center center" });

document.querySelector(".nav img").addEventListener("mouseenter", () => {
  gsap.to(".nav img", { scale: 0.95, duration: 0.3 });
});

document.querySelector(".nav img").addEventListener("mouseleave", () => {
  gsap.to(".nav img", { scale: 1, duration: 0.3 });
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("mouseenter", () => {
    gsap.to(link, { scale: 1.1, duration: 0.2 });
  });
  link.addEventListener("mouseleave", () => {
    gsap.to(link, { scale: 1, duration: 0.2 });
  });
});

document.querySelectorAll(".about-img img").forEach((img) => {
  img.addEventListener("mouseenter", () => {
    gsap.to(img, { scale: 1.05, duration: 0.3 });
  });
  img.addEventListener("mouseleave", () => {
    gsap.to(img, { scale: 1, duration: 0.3 });
  });
});
