
// Configuración de tsParticles
document.addEventListener("DOMContentLoaded", function () {
    if (typeof tsParticles !== "undefined") {
        tsParticles.load("particles-js", {
            fpsLimit: 60,
            interactivity: {
                detectsOn: "window",
                events: {
                    onHover: {
                        enable: true,
                        mode: ["grab", "bubble", "attract"] // Efecto combinado: conecta, agranda y envuelve
                    },
                    onClick: {
                        enable: true,
                        mode: "push" // Clickeando se agregan más partículas temporalmente
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 180,
                        links: {
                            opacity: 0.6,
                            color: "#2C424C"
                        }
                    },
                    bubble: {
                        distance: 150,
                        size: 5,
                        duration: 2,
                        opacity: 0.8
                    },
                    push: {
                        quantity: 4
                    },
                    attract: {
                        distance: 150, // Rango de atracción mucho más reducido
                        duration: 2, // Más lento y sutil
                        factor: 1 // Muy poca fuerza para que no se aglomeren
                    }
                }
            },
            particles: {
                color: {
                    value: ["#5C808E", "#D3DEE3", "#2C424C", "#8CAAB7"] // Paleta extendida para más vistosidad
                },
                links: {
                    color: "#5C808E",
                    distance: 100,
                    enable: true,
                    opacity: 0.5,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1.5, // Movimiento un poco más dinámico
                    direction: "none",
                    random: true,
                    straight: false,
                    outModes: {
                        default: "bounce"
                    }
                },
                number: {
                    density: {
                        enable: true,
                        area: 800
                    },
                    value: 300 // Muchas más partículas
                },
                opacity: {
                    value: 0.8, // Nodos mucho más sólidos
                    random: true
                },
                shape: {
                    type: "circle"
                },
                size: {
                    value: 2, // Nodos más pequeños
                    random: true
                }
            },
            detectRetina: true
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    
    
    /* Flashlight effect for cards */
    const cards = document.querySelectorAll('.service-card, .testimonial-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });


    /* 1. Scroll Reveal Observer (Fade + Slide Up / Stagger) */
    const revealElements = document.querySelectorAll('.reveal, .reveal-text, .reveal-fade');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Solo animar la primera vez
            }
        });
    }, {
        root: null,
        threshold: 0.15, // Activar cuando el 15% del elemento sea visible
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // Activar hero anims al cargar
    setTimeout(() => {
        document.querySelector('.hero-title').classList.add('active');
        document.querySelectorAll('.hero .reveal-fade').forEach(el => el.classList.add('active'));
    }, 100);

    /* 2. Parallax de Auras (Hero) */
    const auras = document.querySelectorAll('.aura');
    let scrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        scrollY = window.scrollY;
        
        // Optimización simple para no animar si no estamos en el hero (aprox 1000px)
        if (scrollY > 1000) return; 

        requestAnimationFrame(() => {
            auras.forEach(aura => {
                const speed = parseFloat(aura.getAttribute('data-speed'));
                // Mover en el eje Y dependiendo del scroll y la velocidad
                const yPos = scrollY * speed;
                aura.style.transform = `translateY(${yPos}px)`;
            });
        });
    });

    /* 3. Parallax sutil en el CTA Final */
    const ctaAura = document.getElementById('cta-aura');
    const ctaSection = document.querySelector('.cta-section');
    
    window.addEventListener('scroll', () => {
        if (!ctaAura || !ctaSection) return;
        
        const rect = ctaSection.getBoundingClientRect();
        // Si el CTA está visible en pantalla
        if(rect.top < window.innerHeight && rect.bottom > 0) {
            const distance = window.innerHeight - rect.top;
            const yPos = distance * 0.1; // Velocidad suave
            ctaAura.style.transform = `translate(-50%, calc(-50% + ${yPos}px))`;
        }
    });

    /* 4. Efecto Tilt 3D en las Service Cards (Eliminado a petición del usuario) */

    /* 5. Manejo del formulario de contacto */
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            
            // Simular envío
            btn.textContent = 'Enviando...';
            btn.style.opacity = '0.7';
            
            setTimeout(() => {
                btn.textContent = '¡Mensaje Enviado!';
                btn.style.background = '#27c93f'; // Color de éxito
                contactForm.reset();
                
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.background = ''; // Restaurar color
                    btn.style.opacity = '1';
                }, 3000);
            }, 1500);
        });
    }

    /* 6. Efecto Scroll Astronauta y Línea Diagonal (Fondo estático) */
    const astronautWrapper = document.getElementById('astronaut-wrapper');
    const diagonalLine = document.getElementById('bg-diagonal-line');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        // A los 1000px de scroll ya debería estar transparente y gigante
        const maxScroll = 1000; 
        const progress = Math.min(scrollY / maxScroll, 1);
        
        if (astronautWrapper) {
            // Congelamos todas las variables de animación al llegar al centro (1500px)
            let effectiveScrollY = Math.min(scrollY, 1500);

            let scale = 1 + (effectiveScrollY * 0.0005);
            let opacity = Math.max(0.2, 1 - (effectiveScrollY * 0.001));
            let translateY = effectiveScrollY * -0.15;
            
            let maxMoveLeft = window.innerWidth * 0.35; 
            let translateX = -Math.min(maxMoveLeft, effectiveScrollY * (maxMoveLeft / 1500));
            
            astronautWrapper.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
            astronautWrapper.style.opacity = opacity;
        }

        if (diagonalLine) {
            // Opacidad mucho más alta según la petición (máximo 30%)
            const lineOpacity = progress * 0.30;
            // Sube desde abajo (100vh) hasta el centro (0vh)
            const lineTranslate = 100 - (progress * 100); 
            
            diagonalLine.style.transform = `rotate(-20deg) translateY(${lineTranslate}vh)`;
            diagonalLine.style.opacity = lineOpacity;
        }
    });

});

window.showNotification = function(card) { const notif = card.querySelector('.desktop-notification'); if (notif) { notif.classList.add('show'); setTimeout(() => notif.classList.remove('show'), 2000); } };




    /* Typing Effect for Code Window */
    const codeSnippet = [
        '<span class="comment">// Inicializando estrategia noSTOP</span>',
        '<span class="keyword">const</span> <span class="variable">brand</span> = <span class="keyword">new</span> <span class="function">Project</span>({',
        '  <span class="variable">name</span>: <span class="string">"Tu Visión"</span>,',
        '  <span class="variable">status</span>: <span class="string">"Scaling"</span>',
        '});\n',
        '<span class="keyword">function</span> <span class="function">optimizeROI</span>(brand) {',
        '  <span class="keyword">return</span> brand.<span class="function">elevate</span>({',
        '    <span class="variable">design</span>: <span class="keyword">true</span>,',
        '    <span class="variable">dev</span>: <span class="keyword">true</span>,',
        '    <span class="variable">marketing</span>: <span class="string">"100%"</span>',
        '  });',
        '}\n',
        '<span class="comment">/* Desplegando éxito... */</span>',
        '<span class="function">optimizeROI</span>(brand);'
    ];

    const codeContainer = document.getElementById('typing-code');
    if (codeContainer) {
        let lineIndex = 0;
        let charIndex = 0;
        let isTag = false;
        let currentHTML = '';
        
        function typeCode() {
            if (lineIndex < codeSnippet.length) {
                const currentLine = codeSnippet[lineIndex];
                
                if (charIndex < currentLine.length) {
                    const char = currentLine.charAt(charIndex);
                    currentHTML += char;
                    codeContainer.innerHTML = currentHTML;
                    
                    if (char === '<') isTag = true;
                    if (char === '>') isTag = false;
                    
                    charIndex++;
                    
                    // Si estamos escribiendo una etiqueta HTML, lo hacemos súper rápido
                    let speed = isTag ? 0 : Math.random() * 30 + 20;
                    setTimeout(typeCode, speed);
                } else {
                    // Fin de línea
                    currentHTML += '\n';
                    codeContainer.innerHTML = currentHTML;
                    lineIndex++;
                    charIndex = 0;
                    setTimeout(typeCode, 400); // Pausa entre líneas
                }
            } else {
                // Loop: Reiniciar después de un rato
                setTimeout(() => {
                    lineIndex = 0;
                    charIndex = 0;
                    currentHTML = '';
                    codeContainer.innerHTML = '';
                    typeCode();
                }, 5000);
            }
        }
        
        // Iniciar un poco después de cargar
        setTimeout(typeCode, 1500);
    }

    // =========================================
    // INFINITE VERTICAL MARQUEE (JS pixel-perfect)
    // Solución definitiva: trabaja con píxeles reales
    // medidos DESPUÉS de que las imágenes cargan.
    // =========================================
    function initMarquee() {
        const columns = document.querySelectorAll('.marquee-column');
        if (!columns.length) return;

        columns.forEach((col, i) => {
            const inner = col.querySelector('.marquee-inner');
            if (!inner) return;

            // Clonar el contenido y pegarlo justo debajo (loop infinito)
            const clone = inner.cloneNode(true);
            col.appendChild(clone);

            const speed = 0.5; // píxeles por frame (~30px/s a 60fps)
            const direction = col.classList.contains('down') ? -1 : 1;
            let pos = direction === -1 ? -inner.scrollHeight : 0;

            function tick() {
                pos -= speed * direction;

                // Cuando pos llega al final de un set, resetear sin salto
                if (direction === 1 && pos <= -inner.scrollHeight) {
                    pos += inner.scrollHeight;
                }
                if (direction === -1 && pos >= 0) {
                    pos -= inner.scrollHeight;
                }

                inner.style.transform = `translateY(${pos}px)`;
                clone.style.transform = `translateY(${pos}px)`;
                requestAnimationFrame(tick);
            }

            // Esperar a que todas las imágenes de la columna carguen
            const imgs = col.querySelectorAll('img');
            let loaded = 0;
            const onLoad = () => {
                loaded++;
                if (loaded >= imgs.length) requestAnimationFrame(tick);
            };
            imgs.forEach(img => {
                if (img.complete) onLoad();
                else img.addEventListener('load', onLoad);
            });
        });
    }

    // Llamar después de que el DOM esté listo
    initMarquee();
