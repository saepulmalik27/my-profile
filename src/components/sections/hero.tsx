"use client";

import { useEffect, useRef } from "react";
import { Ampersand } from "lucide-react";
import DevCode from "@/components/asset/code";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  // 1. Interactive Constellation Canvas Background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    }> = [];

    const particleCount = 35;
    // Determine color based on active theme
    const isDark = document.documentElement.classList.contains("dark");
    const particleColor = isDark ? "rgba(129, 178, 154, 0.35)" : "rgba(40, 85, 67, 0.25)";

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
        color: particleColor,
      });
    }

    const mouse = { x: -1000, y: -1000 };

    const handleMouseMoveGlobal = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeaveGlobal = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMoveGlobal);
    window.addEventListener("mouseleave", handleMouseLeaveGlobal);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Check current theme dynamically on draw loop
      const currentDark = document.documentElement.classList.contains("dark");

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = currentDark ? "rgba(129, 178, 154, 0.35)" : "rgba(40, 85, 67, 0.25)";
        ctx.fill();

        // Mouse connection
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = currentDark
            ? `rgba(129, 178, 154, ${1.1 * (1 - dist / 150)})`
            : `rgba(40, 85, 67, ${0.75 * (1 - dist / 150)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      });

      // Connections between particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = currentDark
              ? `rgba(129, 178, 154, ${0.2 * (1 - dist / 110)})`
              : `rgba(40, 85, 67, ${0.18 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMoveGlobal);
      window.removeEventListener("mouseleave", handleMouseLeaveGlobal);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // 2. GSAP Entrance Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-animate-title", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from(".hero-animate-desc", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.45,
        ease: "power3.out",
      });

      gsap.from(".hero-animate-btn", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        delay: 0.65,
        ease: "power3.out",
      });

      gsap.from(".hero-animate-ill", {
        scale: 0.93,
        opacity: 0,
        duration: 1.3,
        delay: 0.25,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // 3. GSAP 3D Hover Tilt & Glare Effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Maximum tilt angles in degrees
    const rotateX = -(y - centerY) / 8;
    const rotateY = (x - centerX) / 8;

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    gsap.to(card, {
      rotationX: rotateX,
      rotationY: rotateY,
      transformPerspective: 1200,
      ease: "power2.out",
      duration: 0.4,
    });

    gsap.to(glareRef.current, {
      background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0) 80%)`,
      duration: 0.1,
    });
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    gsap.to(card, {
      rotationX: 0,
      rotationY: 0,
      ease: "power2.out",
      duration: 0.8,
    });

    gsap.to(glareRef.current, {
      background: "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 100%)",
      duration: 0.4,
    });
  };

  return (
    <section 
      ref={containerRef}
      className="relative w-full py-10 lg:py-20 overflow-hidden select-none"
    >
      {/* Dynamic Constellation Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full -z-20 pointer-events-none" 
      />

      {/* Ambient glowing blobs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-primary-100/10 blur-[100px] -z-10 animate-ambient-1 pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-accent-100/10 blur-[120px] -z-10 animate-ambient-2 pointer-events-none" />

      {/* Grid background overlay */}
      <div className="absolute inset-0 grid-bg opacity-30 -z-30 pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left: Text Content */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <span className="hero-animate-title text-primary-100 font-semibold tracking-wider text-lg uppercase">
              Hi, my name is
            </span>
            <h1 className="hero-animate-title text-5xl md:text-7xl font-bold tracking-tight text-secondary-100">
              Saepul Malik
            </h1>
          </div>

          <h2 className="hero-animate-title text-4xl md:text-6xl font-bold text-accent-100 leading-tight tracking-tight max-w-2xl">
            Building Scalable <Ampersand className="inline-block w-10 h-10 md:w-12 md:h-12 text-primary-100 align-middle -mt-1.5 md:-mt-2.5 animate-pulse" /> Engaging Web Experiences
          </h2>

          <p className="hero-animate-desc text-xl text-secondary-200 max-w-xl leading-relaxed text-justify mt-2">
            I am <span className="text-accent-100 font-semibold">a Frontend Web Engineer</span>{" "}
            specializing in building highly performant, accessible, and responsive user interfaces using
            <strong> React</strong> and <strong>Next.js</strong> workflows. I focus on maintaining robust
            app-wide design systems, optimizing web interactivity, and collaborating closely with product teams
            and designers to translate sophisticated designs into seamless web experiences.
          </p>

          <div className="flex gap-4 mt-4">
            <div className="hero-animate-btn">
              <Button size="lg" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
            <div className="hero-animate-btn">
              <Button size="lg" variant="outline" asChild>
                <a href="#about" className="cursor-pointer">Learn More</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Right: Interactive 3D Illustration Card */}
        <div className="hero-animate-ill lg:col-span-5 flex justify-center lg:justify-end">
          <div 
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transformStyle: "preserve-3d" }}
            className="relative w-full max-w-md aspect-square rounded-3xl border border-background-300/80 bg-background-200/40 backdrop-blur-md shadow-lg flex items-center justify-center p-8 transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] cursor-grab active:cursor-grabbing"
          >
            {/* Shifting Glare Overlay */}
            <div 
              ref={glareRef}
              className="absolute inset-0 rounded-3xl pointer-events-none z-20 mix-blend-screen transition-opacity duration-300" 
            />

            {/* Parallax inner content */}
            <div 
              style={{ transform: "translateZ(60px)" }}
              className="relative w-full h-full flex items-center justify-center z-10"
            >
              <DevCode className="text-accent-100 w-full h-auto drop-shadow-md" />
            </div>

            {/* Background glowing frame inside card */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary-100/5 to-accent-100/5 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
