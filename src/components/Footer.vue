<script setup>
import { RouterLink } from 'vue-router'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="footer-inner">

      <!-- Column 1 — Brand -->
      <div class="footer-col brand-col">
        <RouterLink to="/" class="logo">
          <span class="logo-name">Rushin<span class="logo-accent">Presence</span></span>
          <span class="logo-tagline">FRONT-END DEVELOPER</span>
        </RouterLink>
        <p class="brand-desc">
          Building clean, interactive, and user-focused web experiences
          from Cape Town, South Africa.
        </p>
        <div class="social-row">
          <a
            href="https://github.com/rushinpresence18-cloud"
            target="_blank"
            rel="noopener"
            aria-label="GitHub"
          >
            <i class="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/rushin-presence-84b076403"
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
          >
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            href="mailto:rushinpresence18@gmail.com"
            aria-label="Email"
          >
            <i class="fa-regular fa-envelope"></i>
          </a>
        </div>
      </div>

      <!-- Column 2 — Navigation -->
      <div class="footer-col">
        <h4 class="col-title">Navigation</h4>
        <ul class="col-list">
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/about">About</RouterLink></li>
          <li><RouterLink to="/skills">Services</RouterLink></li>
          <li><RouterLink to="/contact">Contact</RouterLink></li>
        </ul>
      </div>

      <!-- Column 3 — Projects -->
      <div class="footer-col">
        <h4 class="col-title">Projects</h4>
        <ul class="col-list">
          <li>
            <a
              href="https://github.com/nikitamullerr/Group-4_HRSystem_Project2"
              target="_blank"
              rel="noopener"
            >
              ModernTech HR
            </a>
          </li>
          <li>
            <a
              href="https://github.com/chefmanie27-pixel/Occasion-catering"
              target="_blank"
              rel="noopener"
            >
              E-Commerce Catering
            </a>
          </li>
          <li>
            <a
              href="https://github.com/nikitamullerr/HTML_CSS_JavaScript_Showcase"
              target="_blank"
              rel="noopener"
            >
              Student Tutoring Platform
            </a>
          </li>
          <li>
            <a
              href="https://github.com/rushinpresence18-cloud"
              target="_blank"
              rel="noopener"
            >
              View All Projects →
            </a>
          </li>
        </ul>
      </div>

      <!-- Column 4 — Contact -->
      <div class="footer-col">
        <h4 class="col-title">Get In Touch</h4>
        <ul class="col-list contact-list">
          <li>
            <i class="fa-regular fa-envelope"></i>
            <a href="mailto:rushinpresence18@gmail.com">
              rushinpresence18@gmail.com
            </a>
          </li>
          <li>
            <i class="fa-solid fa-location-dot"></i>
            <span>Cape Town, South Africa</span>
          </li>
          <li>
            <i class="fa-solid fa-briefcase"></i>
            <span>Available for Freelance</span>
          </li>
        </ul>
      </div>

    </div>

    <!-- Bottom bar -->
    <div class="footer-bottom">
      <div class="footer-bottom-inner">
        <p class="copyright">
          © {{ year }} Rushin Presence. All rights reserved.
        </p>
        <p class="built-with">
          Built with <i class="fa-solid fa-heart"></i> using Vue.js
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* ===== Container ===== */
.site-footer {
  background: var(--bg-darker);
  border-top: 1px solid var(--border);
  margin-top: auto;
  position: relative;
  overflow: hidden;
}

/* Subtle blue glow at the top of the footer */
.site-footer::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--accent-blue),
    transparent
  );
  opacity: 0.6;
}

.footer-inner {
  max-width: var(--content-width);
  margin: 0 auto;
  padding: 70px 24px 50px;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
  gap: 50px;
}

/* ===== Column shared ===== */
.footer-col {
  min-width: 0;
}

.col-title {
  font-family: var(--font-heading);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--text-primary);
  margin-bottom: 22px;
  position: relative;
  padding-bottom: 12px;
}

.col-title::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 30px;
  height: 2px;
  background: var(--accent-blue);
  border-radius: 2px;
}

.col-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.col-list li a,
.col-list li span {
  color: var(--text-body);
  font-size: 0.9rem;
  transition: color 0.25s ease, padding-left 0.25s ease;
  display: inline-block;
}

.col-list li a:hover {
  color: var(--accent-blue);
  padding-left: 6px;
}

/* ===== Brand column ===== */
.brand-col {
  padding-right: 20px;
}

.logo {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
  margin-bottom: 18px;
}

.logo-name {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 1.4rem;
  color: var(--text-primary);
  letter-spacing: -0.5px;
}

.logo-accent {
  color: var(--accent-blue);
  margin-left: 4px;
}

.logo-tagline {
  font-family: var(--font-body);
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 2px;
  color: var(--text-dim);
  margin-top: 4px;
}

.brand-desc {
  font-size: 0.9rem;
  line-height: 1.7;
  color: var(--text-body);
  margin-bottom: 24px;
  max-width: 320px;
}

/* ===== Socials ===== */
.social-row {
  display: flex;
  gap: 10px;
}

.social-row a {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--text-body);
  font-size: 1rem;
  transition: all 0.25s ease;
}

.social-row a:hover {
  color: var(--accent-blue);
  border-color: var(--border-hover);
  background: var(--bg-card-hover);
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(47, 125, 246, 0.25);
}

/* ===== Contact column ===== */
.contact-list li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  color: var(--text-body);
  font-size: 0.9rem;
  line-height: 1.5;
}

.contact-list li i {
  color: var(--accent-blue);
  font-size: 0.95rem;
  margin-top: 3px;
  flex-shrink: 0;
}

.contact-list li a {
  color: var(--text-body);
  word-break: break-word;
}

.contact-list li a:hover {
  color: var(--accent-blue);
}

/* ===== Bottom bar ===== */
.footer-bottom {
  border-top: 1px solid var(--border);
  background: rgba(0, 0, 0, 0.25);
}

.footer-bottom-inner {
  max-width: var(--content-width);
  margin: 0 auto;
  padding: 22px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.copyright,
.built-with {
  color: var(--text-dim);
  font-size: 0.85rem;
}

.built-with i {
  color: #ff4d6d;
  margin: 0 2px;
  animation: pulse 1.6s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50%      { transform: scale(1.2); }
}

/* ===== Responsive ===== */
@media (max-width: 900px) {
  .footer-inner {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
}

@media (max-width: 560px) {
  .footer-inner {
    grid-template-columns: 1fr;
    padding: 50px 20px 40px;
    gap: 36px;
  }

  .footer-bottom-inner {
    flex-direction: column;
    text-align: center;
    gap: 10px;
  }
}
</style>