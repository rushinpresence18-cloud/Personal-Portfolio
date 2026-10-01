<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="cta-section">
    <div class="cta-bg"></div>
    <div class="cta-inner">
      <h2 class="cta-title">Let's Work Together</h2>
      <p class="cta-desc">
        Have a project in mind? I'd love to hear about it.<br />
        Let's create something amazing together.
      </p>
      <RouterLink to="/contact" class="btn btn-primary cta-btn">
        Get In Touch <i class="fa-solid fa-arrow-right"></i>
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
.cta-section {
  position: relative;
  padding: 110px 24px;
  text-align: center;
  overflow: hidden;
  background: var(--bg-darker);
}

.cta-bg {
  position: absolute;
  inset: 0;
  background-image: url('https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=2000&q=80');
  background-size: cover;
  background-position: center;
  filter: brightness(0.25);
  z-index: 0;
}

.cta-section::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(6, 15, 28, 0.9),
    rgba(10, 22, 40, 0.75)
  );
  z-index: 1;
}

.cta-inner {
  position: relative;
  z-index: 2;
  max-width: 720px;
  margin: 0 auto;
}

.cta-title {
  font-size: clamp(1.8rem, 3.5vw, 2.6rem);
  font-weight: 800;
  margin-bottom: 20px;
  letter-spacing: -1px;
}

.cta-desc {
  color: var(--text-body);
  font-size: 1.05rem;
  line-height: 1.7;
  margin-bottom: 36px;
}

.cta-btn {
  margin: 0 auto;
}
</style>