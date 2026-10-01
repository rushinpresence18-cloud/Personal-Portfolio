<script setup>
import { RouterLink } from 'vue-router'
import portrait from '@/assets/portrait.jpg'
</script>

<template>
  <section class="hero">
    <div class="hero-bg"></div>
    <div class="hero-overlay"></div>

    <div class="hero-inner">
      <div class="hero-text">
        <p class="hero-eyebrow">Hello, I'm</p>
        <h1 class="hero-title">
          Rushin Presence
          <span class="hero-title-sub">Front-End Developer</span>
        </h1>
        <p class="hero-desc">
          I build exceptional digital experiences for businesses and individuals
          in South Africa and around the world.
        </p>

        <div class="hero-buttons">
          <RouterLink to="/contact" class="btn btn-primary">
            Hire Me
            <i class="fa-solid fa-arrow-right"></i>
          </RouterLink>
          <RouterLink to="/about" class="btn btn-outline">
            View My Work
          </RouterLink>
        </div>

        <div class="hero-trusted">
          <p class="trusted-label">Technologies I work with</p>
          <div class="trusted-logos">
            <span><i class="fa-brands fa-html5"></i> HTML</span>
            <span><i class="fa-brands fa-css3-alt"></i> CSS</span>
            <span><i class="fa-brands fa-js"></i> JavaScript</span>
            <span><i class="fa-brands fa-vuejs"></i> Vue</span>
            <span><i class="fa-brands fa-python"></i> Python</span>
          </div>
        </div>
      </div>

      <div class="hero-image">
        <img :src="portrait" alt="Rushin Presence" class="portrait-img" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  padding: 140px 24px 80px;
  display: flex;
  align-items: center;
  overflow: hidden;
}

/* ===== Background image ===== */
.hero-bg {
  position: absolute;
  inset: 0;
  background-image: url('https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=2000&q=80');
  background-size: cover;
  background-position: center;
  filter: brightness(0.75) saturate(1.25) contrast(1.1);
  z-index: 0;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(6, 15, 28, 0.75) 0%,
    rgba(10, 22, 40, 0.55) 50%,
    rgba(10, 22, 40, 0.25) 100%
  );
  z-index: 1;
}

.hero-inner {
  position: relative;
  z-index: 2;
  max-width: var(--content-width);
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 60px;
  align-items: center;
}

/* ===== Text side ===== */
.hero-eyebrow {
  font-family: var(--font-body);
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: var(--accent-blue);
  margin-bottom: 20px;
}

.hero-title {
  font-size: clamp(2.4rem, 5vw, 4rem);
  font-weight: 800;
  letter-spacing: -1.5px;
  margin-bottom: 24px;
  line-height: 1.05;
  color: #ffffff;
  text-shadow: 0 4px 30px rgba(0, 0, 0, 0.6);
}

.hero-title-sub {
  display: block;
  color: var(--accent-blue);
  font-weight: 700;
  font-size: 0.55em;
  letter-spacing: -0.5px;
  margin-top: 8px;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.7);
}

.hero-desc {
  font-size: 1.1rem;
  color: #e3ebf5;
  max-width: 520px;
  margin-bottom: 40px;
  line-height: 1.7;
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.6);
}

.hero-buttons {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 60px;
}

/* ===== Trusted strip ===== */
.hero-trusted {
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  padding-top: 28px;
}

.trusted-label {
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #c5d0e0;
  margin-bottom: 16px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.6);
}

.trusted-logos {
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  align-items: center;
}

.trusted-logos span {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 1.05rem;
  color: #e3ebf5;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.7);
  transition: color 0.25s, transform 0.25s;
}

.trusted-logos span i {
  font-size: 1.4rem;
  color: var(--accent-blue);
  filter: drop-shadow(0 0 8px rgba(47, 125, 246, 0.5));
}

.trusted-logos span:hover {
  color: #ffffff;
  transform: translateY(-2px);
}

/* ===== Portrait side ===== */
.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.hero-image::before {
  content: "";
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(47, 125, 246, 0.45), transparent 70%);
  filter: blur(40px);
  z-index: -1;
}

.portrait-img {
  width: 340px;
  height: 420px;
  object-fit: cover;
  object-position: center top;
  border-radius: var(--radius-card);
  border: 2px solid rgba(47, 125, 246, 0.5);
  box-shadow:
    0 20px 60px rgba(0, 0, 0, 0.5),
    0 0 60px rgba(47, 125, 246, 0.3);
}

/* ===== Responsive ===== */
@media (max-width: 900px) {
  .hero {
    padding: 120px 20px 60px;
  }

  .hero-inner {
    grid-template-columns: 1fr;
    gap: 40px;
    text-align: center;
  }

  .hero-desc {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-buttons {
    justify-content: center;
  }

  .trusted-logos {
    justify-content: center;
  }

  .portrait-img {
    width: 260px;
    height: 320px;
  }
}
</style>