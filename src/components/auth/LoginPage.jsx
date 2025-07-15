import React, { useState, useEffect, useRef } from 'react';

const LoginPage = ({ onLoginSuccess }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Refs for animation targets
  const logoRef = useRef(null);
  const formRef = useRef(null);
  const backgroundRef = useRef(null);
  const particlesRef = useRef([]);
  const networkLinesRef = useRef([]);
  const energyWavesRef = useRef([]);
  const orbitRef = useRef([]);
  const morphingShapesRef = useRef([]);

  // Enhanced Anime.js implementation with more easing functions
  const anime = (config) => {
    const { targets, ...props } = config;
    
    if (!targets) return;
    
    const elements = Array.isArray(targets) ? targets : [targets];
    
    elements.forEach(element => {
      if (!element) return;
      
      const startTime = Date.now();
      const duration = props.duration || 1000;
      const delay = props.delay || 0;
      const easing = props.easing || 'easeOutQuad';
      
      const easingFunctions = {
        easeOutQuad: t => t * (2 - t),
        easeInOutQuad: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
        easeInOutCubic: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
        easeInOutQuart: t => t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t,
        easeInOutElastic: t => {
          const c5 = (2 * Math.PI) / 4.5;
          return t === 0 ? 0 : t === 1 ? 1 : t < 0.5 
            ? -(Math.pow(2, 20 * t - 10) * Math.sin((20 * t - 11.125) * c5)) / 2
            : (Math.pow(2, -20 * t + 10) * Math.sin((20 * t - 11.125) * c5)) / 2 + 1;
        },
        easeInOutBack: t => {
          const c1 = 1.70158;
          const c2 = c1 * 1.525;
          return t < 0.5
            ? (Math.pow(2 * t, 2) * ((c2 + 1) * 2 * t - c2)) / 2
            : (Math.pow(2 * t - 2, 2) * ((c2 + 1) * (t * 2 - 2) + c2) + 2) / 2;
        },
        linear: t => t
      };
      
      const easingFunc = easingFunctions[easing] || easingFunctions.easeOutQuad;
      
      const animate = () => {
        const elapsed = Date.now() - startTime - delay;
        if (elapsed < 0) {
          requestAnimationFrame(animate);
          return;
        }
        
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easingFunc(progress);
        
        // Handle different animation properties
        Object.keys(props).forEach(prop => {
          if (prop === 'duration' || prop === 'delay' || prop === 'easing') return;
          
          const value = props[prop];
          
          if (Array.isArray(value) && value.length === 2) {
            const [from, to] = value;
            const current = from + (to - from) * easedProgress;
            
            switch (prop) {
              case 'opacity':
                element.style.opacity = current;
                break;
              case 'translateX':
                element.style.transform = `translateX(${current}px)`;
                break;
              case 'translateY':
                element.style.transform = `translateY(${current}px)`;
                break;
              case 'rotate':
                element.style.transform = `rotate(${current}deg)`;
                break;
              case 'scale':
                element.style.transform = `scale(${current})`;
                break;
              case 'scaleX':
                element.style.transform = `scaleX(${current})`;
                break;
              case 'scaleY':
                element.style.transform = `scaleY(${current})`;
                break;
              case 'blur':
                element.style.filter = `blur(${current}px)`;
                break;
            }
          }
        });
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    });
  };

  // Create advanced animated background elements
  useEffect(() => {
    const container = backgroundRef.current;
    if (!container) return;

    // Create interconnected network lines
    const createNetworkLines = () => {
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("class", "absolute inset-0 w-full h-full");
      svg.setAttribute("viewBox", "0 0 100 100");
      svg.setAttribute("preserveAspectRatio", "none");
      
      // Create network nodes
      const nodes = [];
      for (let i = 0; i < 12; i++) {
        const node = {
          x: Math.random() * 100,
          y: Math.random() * 100,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5
        };
        nodes.push(node);
        
        // Create visual node
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", node.x);
        circle.setAttribute("cy", node.y);
        circle.setAttribute("r", "0.3");
        circle.setAttribute("fill", "#22c55e");
        circle.setAttribute("opacity", "0.6");
        svg.appendChild(circle);
      }
      
      // Create connecting lines
      const updateNetwork = () => {
        // Clear existing lines
        const lines = svg.querySelectorAll('line');
        lines.forEach(line => line.remove());
        
        // Update node positions
        nodes.forEach(node => {
          node.x += node.vx;
          node.y += node.vy;
          
          // Bounce off edges
          if (node.x <= 0 || node.x >= 100) node.vx *= -1;
          if (node.y <= 0 || node.y >= 100) node.vy *= -1;
          
          // Keep within bounds
          node.x = Math.max(0, Math.min(100, node.x));
          node.y = Math.max(0, Math.min(100, node.y));
        });
        
        // Draw connections between nearby nodes
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const dx = nodes[i].x - nodes[j].x;
            const dy = nodes[i].y - nodes[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 30) {
              const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
              line.setAttribute("x1", nodes[i].x);
              line.setAttribute("y1", nodes[i].y);
              line.setAttribute("x2", nodes[j].x);
              line.setAttribute("y2", nodes[j].y);
              line.setAttribute("stroke", "#22c55e");
              line.setAttribute("stroke-width", "0.1");
              line.setAttribute("opacity", Math.max(0, 0.8 - distance / 30));
              svg.appendChild(line);
            }
          }
        }
        
        // Update node positions visually
        const circles = svg.querySelectorAll('circle');
        circles.forEach((circle, index) => {
          if (nodes[index]) {
            circle.setAttribute("cx", nodes[index].x);
            circle.setAttribute("cy", nodes[index].y);
          }
        });
        
        requestAnimationFrame(updateNetwork);
      };
      
      container.appendChild(svg);
      networkLinesRef.current.push(svg);
      updateNetwork();
    };

    // Create energy waves
    const createEnergyWaves = () => {
      for (let i = 0; i < 4; i++) {
        const wave = document.createElement('div');
        wave.className = 'absolute rounded-full border-2 border-green-400 pointer-events-none';
        wave.style.width = '20px';
        wave.style.height = '20px';
        wave.style.left = Math.random() * 90 + '%';
        wave.style.top = Math.random() * 90 + '%';
        wave.style.opacity = '0';
        container.appendChild(wave);
        energyWavesRef.current.push(wave);
        
        const animateWave = () => {
          anime({
            targets: wave,
            scale: [0.5, 6],
            opacity: [0.6, 0],
            duration: 3000 + Math.random() * 2000,
            delay: Math.random() * 2000,
            easing: 'easeInOutQuart'
          });
          
          setTimeout(animateWave, 3000 + Math.random() * 2000);
        };
        
        animateWave();
      }
    };

    // Create morphing shapes
    const createMorphingShapes = () => {
      for (let i = 0; i < 3; i++) {
        const shape = document.createElement('div');
        shape.className = 'absolute bg-gradient-to-br from-green-300 to-emerald-300 opacity-5 rounded-full';
        shape.style.width = '100px';
        shape.style.height = '100px';
        shape.style.left = Math.random() * 80 + '%';
        shape.style.top = Math.random() * 80 + '%';
        container.appendChild(shape);
        morphingShapesRef.current.push(shape);
        
        const animateShape = () => {
          const morphTo = Math.random() > 0.5 ? 'rounded-none' : 'rounded-full';
          const scaleTo = 0.5 + Math.random() * 2;
          
          anime({
            targets: shape,
            scale: [shape.style.transform ? 1 : 1, scaleTo],
            rotate: [0, 360],
            duration: 4000 + Math.random() * 2000,
            easing: 'easeInOutCubic'
          });
          
          // Change border radius
          setTimeout(() => {
            shape.className = shape.className.replace(/rounded-\w+/, morphTo);
          }, 2000);
          
          setTimeout(animateShape, 4000 + Math.random() * 2000);
        };
        
        animateShape();
      }
    };

    // Create reactive particles
    const createReactiveParticles = () => {
      for (let i = 0; i < 80; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute w-1 h-1 bg-green-400 rounded-full opacity-20';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        container.appendChild(particle);
        particlesRef.current.push(particle);
        
        const animateParticle = () => {
          const moveX = (Math.random() - 0.5) * 100;
          const moveY = (Math.random() - 0.5) * 100;
          
          anime({
            targets: particle,
            translateX: [0, moveX],
            translateY: [0, moveY],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
            duration: 3000 + Math.random() * 2000,
            delay: Math.random() * 1000,
            easing: 'easeInOutQuad'
          });
          
          setTimeout(animateParticle, 3000 + Math.random() * 2000);
        };
        
        animateParticle();
      }
    };

    // Create orbital system
    const createOrbitalSystem = () => {
      const orbitalCenter = document.createElement('div');
      orbitalCenter.className = 'absolute w-8 h-8 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2';
      container.appendChild(orbitalCenter);
      
      for (let i = 0; i < 5; i++) {
        const orbit = document.createElement('div');
        orbit.className = 'absolute w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 opacity-40';
        orbit.style.left = '50%';
        orbit.style.top = '50%';
        orbitalCenter.appendChild(orbit);
        orbitRef.current.push(orbit);
        
        const animateOrbit = () => {
          const radius = 60 + i * 25;
          const duration = 6000 + i * 1500;
          let startTime = Date.now();
          
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = (elapsed % duration) / duration;
            const angle = progress * 2 * Math.PI + (i * Math.PI / 3);
            
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            
            orbit.style.transform = `translate(${x}px, ${y}px) scale(${1 + Math.sin(progress * 4 * Math.PI) * 0.3})`;
            orbit.style.opacity = 0.3 + Math.sin(progress * 2 * Math.PI) * 0.2;
            
            requestAnimationFrame(animate);
          };
          
          animate();
        };
        
        animateOrbit();
      }
    };

    // Initialize all animations
    createNetworkLines();
    createEnergyWaves();
    createMorphingShapes();
    createReactiveParticles();
    createOrbitalSystem();
    
    // Enhanced logo animation with floating effect
    anime({
      targets: logoRef.current,
      opacity: [0, 1],
      translateY: [-50, 0],
      scale: [0.6, 1],
      duration: 1500,
      delay: 200,
      easing: 'easeInOutElastic'
    });

    // Continuous logo float animation
    const logoFloat = () => {
      anime({
        targets: logoRef.current,
        translateY: [-8, 8],
        duration: 2000,
        easing: 'easeInOutQuad'
      });
      
      setTimeout(() => {
        anime({
          targets: logoRef.current,
          translateY: [8, -8],
          duration: 2000,
          easing: 'easeInOutQuad'
        });
      }, 2000);
      
      setTimeout(logoFloat, 4000);
    };
    
    setTimeout(logoFloat, 2000);

    // Enhanced form animation
    anime({
      targets: formRef.current,
      opacity: [0, 1],
      translateY: [60, 0],
      scale: [0.95, 1],
      duration: 1200,
      delay: 600,
      easing: 'easeInOutBack'
    });
    
    // Cleanup
    return () => {
      particlesRef.current.forEach(particle => {
        if (particle.parentNode) particle.parentNode.removeChild(particle);
      });
      networkLinesRef.current.forEach(svg => {
        if (svg.parentNode) svg.parentNode.removeChild(svg);
      });
      energyWavesRef.current.forEach(wave => {
        if (wave.parentNode) wave.parentNode.removeChild(wave);
      });
      orbitRef.current.forEach(orbit => {
        if (orbit.parentNode) orbit.parentNode.removeChild(orbit);
      });
      morphingShapesRef.current.forEach(shape => {
        if (shape.parentNode) shape.parentNode.removeChild(shape);
      });
      
      // Clear arrays
      particlesRef.current = [];
      networkLinesRef.current = [];
      energyWavesRef.current = [];
      orbitRef.current = [];
      morphingShapesRef.current = [];
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      anime({
        targets: formRef.current,
        translateX: [-15, 15, -15, 15, 0],
        duration: 500,
        easing: 'easeInOutQuad'
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Login attempt:', formData);
      
      if (onLoginSuccess) {
        onLoginSuccess();
      }
    } catch (error) {
      setErrors({ general: 'Login failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-emerald-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div ref={backgroundRef} className="absolute inset-0 overflow-hidden">
        {/* Dynamic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-green-500/10 to-lime-500/10 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-emerald-400/5 to-transparent animate-pulse"></div>
        
        {/* Animated mesh background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #22c55e 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, #10b981 0%, transparent 50%),
                             linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)`,
            backgroundSize: '400px 400px, 400px 400px, 40px 40px, 40px 40px',
            animation: 'meshMove 20s ease-in-out infinite'
          }}></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-sm relative z-10">
        {/* Enhanced Logo and Title */}
        <div ref={logoRef} className="text-center mb-6 opacity-0">
          <div className="inline-flex items-center justify-center mb-4 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
            <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center relative z-10 filter drop-shadow-xl">
              <img 
                src="https://ptcl.com.pk/images/ptcl-logo-plain.svg" 
                alt="PTCL Logo" 
                className="h-10 w-10" 
              />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-1 bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-500 bg-clip-text text-transparent">
            PTCL Order Management
          </h1>
          <p className="text-emerald-200 text-sm opacity-80">Secure Access Portal</p>
        </div>

        {/* Compact Login Form */}
        <div ref={formRef} className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-6 opacity-0 border border-white/20 relative">
          {/* Form glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-emerald-500/20 rounded-2xl blur-xl opacity-50"></div>
          
          <div className="space-y-4 relative z-10">
            {errors.general && (
              <div className="bg-red-500/20 border border-red-400/50 text-red-300 px-4 py-3 rounded-xl text-sm backdrop-blur-sm">
                {errors.general}
              </div>
            )}

            {/* Username Field */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-white mb-1">
                Username
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-emerald-400 group-focus-within:text-emerald-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <input
                  id="username"
                  name="username"
                  type="text"
                  value={formData.username}
                  onChange={handleChange}
                  className={`block w-full pl-10 pr-3 py-3 border ${errors.username ? 'border-red-500/50' : 'border-white/20'} rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all bg-white/10 backdrop-blur-sm text-white placeholder-white/50 hover:bg-white/15`}
                  placeholder="Enter your username"
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400/20 to-emerald-500/20 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
              {errors.username && (
                <p className="mt-2 text-sm text-red-400">{errors.username}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white mb-1">
                Password
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-emerald-400 group-focus-within:text-emerald-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleChange}
                  className={`block w-full pl-10 pr-12 py-3 border ${errors.password ? 'border-red-500/50' : 'border-white/20'} rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all bg-white/10 backdrop-blur-sm text-white placeholder-white/50 hover:bg-white/15`}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center hover:bg-white/10 rounded-r-lg transition-colors"
                >
                  <svg className="h-5 w-5 text-emerald-400 hover:text-emerald-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {showPassword ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    )}
                  </svg>
                </button>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-400/20 to-emerald-500/20 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
              {errors.password && (
                <p className="mt-2 text-sm text-red-400">{errors.password}</p>
              )}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-emerald-400 focus:ring-emerald-400 border-white/20 rounded bg-white/10 backdrop-blur-sm"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-white/80">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors">
                Forgot password?
              </a>
            </div>

            {/* Enhanced Submit Button */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg text-white bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400 font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg backdrop-blur-sm relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-500 opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <span className="relative z-10">
                {isLoading ? (
                  <div className="flex items-center">
                    <svg className="animate-spin h-6 w-6 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 11.27 4.686C4.686 7.383 2 11.03 2 12s2.686 4.617 6.373 7.373L7.636 21.1c-3.687-2.756-6.373-6.403-6.373-9.1s2.686-6.344 6.373-9.1L8.364 2.9z"></path>
                    </svg>
                    Signing In...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <svg className="h-6 w-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                    Sign In
                  </div>
                )}
              </span>
            </button>

            {/* Additional Security Notice */}
            <div className="text-center">
              <p className="text-xs text-white/60">
                Protected by advanced security protocols
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-white/60 text-xs">
          <p>© 2024 PTCL. All rights reserved.</p>
          <p className="mt-1">
            <a href="#" className="hover:text-emerald-300 transition-colors">Terms of Service</a>
            {' • '}
            <a href="#" className="hover:text-emerald-300 transition-colors">Privacy Policy</a>
          </p>
        </div>
      </div>

      {/* Enhanced CSS animations */}
      <style jsx>{`
        @keyframes meshMove {
          0%, 100% { transform: translateX(0) translateY(0); }
          25% { transform: translateX(-20px) translateY(-10px); }
          50% { transform: translateX(20px) translateY(10px); }
          75% { transform: translateX(-10px) translateY(20px); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 15px rgba(16, 185, 129, 0.3); }
          50% { box-shadow: 0 0 25px rgba(16, 185, 129, 0.5); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        
        /* Enhanced focus effects */
        input:focus {
          box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
        }
        
        /* Button hover effects */
        button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: rgba(16, 185, 129, 0.5);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(16, 185, 129, 0.7);
        }
      `}</style>
    </div>
  );
};

export default LoginPage;