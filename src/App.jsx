function App() {
  return (
    <div className="app">
      <header className="header">
        <nav className="navbar">
          <a href="#inicio" className="logo">
            Mateo.dev
          </a>

          <div className="nav-links">
            <a href="#sobre-mi">Sobre mí</a>
            <a href="#experiencia">Experiencia</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#tecnologias">Tecnologías</a>
            <a href="#contacto">Contacto</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-content">
            <p className="hero-tag">Desarrollador Web Trainee </p>

            <h1>
              Hola, soy Mateo Borrero Kinen. Desarrollo sitios y aplicaciones
              web modernas.
            </h1>

            <p className="hero-description">
              Desarrollador web trainee enfocado en crear aplicaciones modernas,
              funcionales y orientadas a resolver necesidades reales. Trabajo con frontend,
              backend, bases de datos, autenticación y despliegue online.
            </p>

            <div className="hero-info">
              <span>Disponible para proyectos freelance</span>
              <span>Desarrollador Web Trainee </span>
              <span>Concordia, Entre Ríos</span>
            </div>

            <div className="hero-buttons">
              <a href="#proyectos" className="btn btn-primary">
                Ver proyectos
              </a>

              <a href="#contacto" className="btn btn-secondary">
                Contactarme
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="sobre-mi">
          <div className="section-header">
            <p className="section-tag">Sobre mí</p>
            <h2>Perfil profesional</h2>
          </div>

          <p className="about-text">
            Soy Mateo Borrero Kinen, graduado de la Tecnicatura Universitaria en
            Programación en UTN Concordia y actualmente estudiante de la Licenciatura en
            Sistemas en UNER. Me interesa desarrollar soluciones web claras, funcionales
            y bien organizadas, combinando lógica de negocio, diseño responsive y buenas
            prácticas de desarrollo. Me considero una persona responsable, curiosa y con
            facilidad para aprender nuevas tecnologías.
          </p>

          <div className="stats-grid">
            <div>
              <strong>3+</strong>
              <span>Proyectos publicados</span>
            </div>

            <div>
              <strong>2</strong>
              <span>Proyectos fullstack</span>
            </div>

            <div>
              <strong>UNER</strong>
              <span>Lic. en Sistemas en curso</span>
            </div>
          </div>
        </section>

        <section className="section" id="experiencia">
          <div className="section-header">
            <p className="section-tag">Trayectoria</p>
            <h2>Experiencia y formación</h2>
          </div>

          <div className="experience-grid">
            <article className="experience-card">
              <p className="experience-date">Actualidad</p>

              <h3>Licenciatura en Sistemas</h3>

              <p className="experience-place">
                Universidad Nacional de Entre Ríos - UNER
              </p>

              <p>
                Formación universitaria orientada al análisis, diseño,
                desarrollo y gestión de sistemas de información, complementando
                mi perfil técnico con una visión más amplia del desarrollo de
                software.
              </p>
            </article>

            <article className="experience-card">
              <p className="experience-date">2023 - 2025</p>

              <h3>Tecnicatura Universitaria en Programación</h3>

              <p className="experience-place">
                Universidad Tecnológica Nacional - Concordia
              </p>

              <p>
                Formación en programación, desarrollo web, bases de datos, APIs,
                metodologías ágiles y herramientas utilizadas en proyectos de
                software.
              </p>
            </article>

            <article className="experience-card">
              <p className="experience-date">Mar 2023 - Mar 2024</p>

              <h3>Desarrollador web / Comunicación digital</h3>

              <p className="experience-place">
                EMAPI - Parque Industrial Concordia
              </p>

              <p>
                Diseño y desarrollo de la página web institucional, organización
                de contenido, estructura visual, secciones principales y
                aplicación de diseño responsive para mejorar la presentación
                online de la entidad.
              </p>
            </article>
          </div>
        </section>

        <section className="section" id="proyectos">
          <div className="section-header">
            <p className="section-tag">Portfolio</p>
            <h2>Proyectos destacados</h2>
          </div>

          <div className="projects-grid">
            <article className="project-card">
              <div>
                <div className="project-status">Deploy activo</div>

                <p className="project-type">Fullstack App</p>

                <h3>Borkin Dashboard</h3>

                <p>
                  Sistema web para gestión de productos e inventario. Incluye
                  login, registro, roles de usuario, CRUD completo de productos,
                  rutas protegidas, búsqueda, control de stock bajo y cálculo
                  del valor total del inventario.
                </p>
              </div>

              <div className="tech-list">
                <span>React</span>
                <span>Vite</span>
                <span>Node.js</span>
                <span>Express</span>
                <span>PostgreSQL</span>
                <span>JWT</span>
                <span>bcrypt</span>
                <span>Render</span>
                <span>Neon</span>
              </div>

              <div className="project-links">
                <a
                  href="https://borkin-dashboard.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver demo
                </a>

                <a
                  href="https://github.com/MateoBorrero12/borkin-dashboard"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </article>

            <article className="project-card">
              <div>
                <div className="project-status">Deploy activo</div>

                <p className="project-type">Landing Page</p>

                <h3>Borkin Landing</h3>

                <p>
                  Landing page profesional responsive para presentar servicios
                  digitales. Incluye hero principal, secciones informativas,
                  llamados a la acción, formulario visual, diseño adaptable a
                  celular e identidad de marca.
                </p>
              </div>

              <div className="tech-list">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>Responsive</span>
                <span>Vercel</span>
              </div>

              <div className="project-links">
                <a
                  href="https://landing-borkin.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver demo
                </a>

                <a
                  href="https://github.com/MateoBorrero12/landing-Borkin"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </article>

            <article className="project-card">
              <div>
                <div className="project-status">Deploy activo</div>

                <p className="project-type">Fullstack app</p>

                <h3>Borkin Turnos</h3>

                <p>
                  Aplicación fullstack para gestión de turnos y reservas online. Incluye
                  registro, login, roles de cliente y administrador, gestión de servicios,
                  creación de reservas, filtros por fecha y estado, validación de horarios
                  y bloqueo de turnos duplicados.
                </p>
              </div>

              <div className="tech-list">
                <span>React</span>
                <span>Vite</span>
                <span>Node.js</span>
                <span>Express</span>
                <span>pg</span>
                <span>JWT</span>
                <span>bcrypt</span>
                <span>Render</span>
                <span>Neon</span>
                <span>Vercel</span>
              </div>

              <div className="project-links">
                <a
                  href="https://borkin-turnos.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver demo
                </a>

                <a
                  href="https://github.com/MateoBorrero12/borkin-turnos"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </article>
            
          </div>
        </section>

        <section className="section" id="tecnologias">
          <div className="section-header">
            <p className="section-tag">Stack</p>
            <h2>Tecnologías y herramientas</h2>
          </div>

          <div className="skills-grid">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Vite</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>PostgreSQL</span>
            <span>MySQL</span>
            <span>PHP</span>
            <span>Python</span>
            <span>Laravel básico</span>
            <span>Sequelize ORM</span>
            <span>APIs REST</span>
            <span>JWT Auth</span>
            <span>bcrypt</span>
            <span>Postman</span>
            <span>Swagger</span>
            <span>Git</span>
            <span>GitHub</span>
            <span>Vercel</span>
            <span>Render</span>
            <span>Neon</span>
            <span>Jira</span>
            <span>pg / node-postgres</span>
            <span>Dotenv</span>
            <span>Axios</span>
          </div>
        </section>

        <section className="section languages-section">
          <div className="section-header">
            <p className="section-tag">Idiomas</p>
            <h2>Comunicación</h2>
          </div>

          <div className="languages-grid">
            <article className="language-card">
              <h3>Español</h3>
              <p>Nativo</p>
            </article>

            <article className="language-card">
              <h3>Inglés</h3>
              <p>Nivel B2</p>
            </article>
          </div>
        </section>

        <section className="section contact-section" id="contacto">
          <div className="section-header">
            <p className="section-tag">Contacto</p>
            <h2>Trabajemos juntos</h2>
          </div>

          <p>
            Estoy disponible para colaborar en proyectos web, crear landing
            pages profesionales o desarrollar sistemas simples para negocios que
            necesiten mejorar su presencia digital.
          </p>

          <p className="contact-email">Email: mateoborrero.dev@gmail.com</p>

          <div className="contact-buttons">
            <a
              href="https://wa.me/543454244078"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Contactá conmigo
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mateoborrero.dev@gmail.com&su=Consulta%20desde%20tu%20portfolio&body=Hola%20Mateo,%20vi%20tu%20portfolio%20y%20quiero%20consultarte%20por..."
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              Enviar email
            </a>

            <a
              href="https://github.com/MateoBorrero12"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          © 2026 Mateo Borrero Kinen. Portfolio desarrollado con React + Vite.
        </p>
      </footer>
    </div>
  );
}

export default App;