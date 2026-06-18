const fs = require('fs');

let html = fs.readFileSync('c:/Users/ASUS/Documents/WebSites/nostop/index.html', 'utf8');

const oldHTML = `<div class="services-grid">
                
                <div class="service-card reveal tilt-card">
                    <div class="service-icon">🌐</div>
                    <h3 class="service-title">Desarrollo Web</h3>
                    <p class="service-desc">
                        Sitios web rápidos, responsivos y escalables diseñados a medida. Usamos tecnologías modernas para experiencias digitales fluidas que convierten visitantes en clientes.
                    </p>
                    <ul class="service-list">
                        <li>Landing Pages & E-commerce</li>
                        <li>Aplicaciones Web</li>
                        <li>Optimización de Performance</li>
                    </ul>
                </div>

                <div class="service-card reveal tilt-card" style="transition-delay: 0.1s">
                    <div class="service-icon">📈</div>
                    <h3 class="service-title">Marketing Digital</h3>
                    <p class="service-desc">
                        Estrategias de posicionamiento y contenido que capturan la atención. Construimos audiencias leales y campañas que generan impacto real.
                    </p>
                    <ul class="service-list">
                        <li>Estrategia de Marca & Branding</li>
                        <li>Gestión de Redes Sociales</li>
                        <li>Campañas SEO & SEM</li>
                    </ul>
                </div>

            </div>`;

const newHTML = `<div class="split-domains-container reveal">
                
                <div class="domain-panel panel-web">
                    <div class="panel-content">
                        <div class="service-icon">🌐</div>
                        <h3 class="service-title">Desarrollo Web</h3>
                        <div class="panel-details">
                            <p class="service-desc">
                                Sitios web rápidos, responsivos y escalables diseñados a medida. Usamos tecnologías modernas para experiencias digitales fluidas que convierten visitantes en clientes.
                            </p>
                            <ul class="service-list">
                                <li>Landing Pages & E-commerce</li>
                                <li>Aplicaciones Web</li>
                                <li>Optimización de Performance</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="domain-panel panel-marketing">
                    <div class="panel-content">
                        <div class="service-icon">📈</div>
                        <h3 class="service-title">Marketing Digital</h3>
                        <div class="panel-details">
                            <p class="service-desc">
                                Estrategias de posicionamiento y contenido que capturan la atención. Construimos audiencias leales y campañas que generan impacto real.
                            </p>
                            <ul class="service-list">
                                <li>Estrategia de Marca & Branding</li>
                                <li>Gestión de Redes Sociales</li>
                                <li>Campañas SEO & SEM</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>`;

html = html.replace(oldHTML, newHTML);
fs.writeFileSync('c:/Users/ASUS/Documents/WebSites/nostop/index.html', html);
