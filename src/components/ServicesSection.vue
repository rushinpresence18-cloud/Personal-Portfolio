<script setup>
const services = [
  {
    icon: 'fa-solid fa-code',
    title: 'Front-End Development',
    desc: 'Custom, responsive interfaces built with modern HTML, CSS, JavaScript, and Vue.js.',
  },
  {
    icon: 'fa-solid fa-server',
    title: 'Back-End Development',
    desc: 'Clean, functional server-side logic with Python and API integration.',
  },
  {
    icon: 'fa-solid fa-mobile-screen',
    title: 'Responsive Design',
    desc: 'Mobile-first layouts that look great on every screen size and device.',
  },
  {
    icon: 'fa-solid fa-gauge-high',
    title: 'Performance Optimization',
    desc: 'Faster load times and smoother interactions for a better user experience.',
  },
]
</script>

<template>
  <section id="services" class="section services-section">
    <div class="section-inner">
      <div class="services-header">
        <p class="eyebrow">My Services</p>
        <h2 class="section-title">What I Can Do For You</h2>
      </div>

      <div class="services-grid">
        <article
          v-for="(service, index) in services"
          :key="index"
          class="service-card"
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :visible-once="{
            opacity: 1,
            y: 0,
            transition: { duration: 600, delay: index * 120 },
          }"
        >
          <div class="service-icon">
            <i :class="service.icon"></i>
          </div>
          <h3 class="service-title">{{ service.title }}</h3>
          <p class="service-desc">{{ service.desc }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-section {
  background: var(--bg-darker);
}

.services-header {
  text-align: center;
  margin-bottom: 60px;
}

.services-header .section-title {
  margin: 0 auto;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.service-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-card);
  padding: 32px 26px;
  transition: all 0.3s ease;
}

.service-card:hover {
  background: var(--bg-card-hover);
  border-color: var(--border-hover);
  transform: translateY(-4px);
}

.service-icon {
  width: 52px;
  height: 52px;
  border-radius: 10px;
  background: var(--accent-blue-dim);
  border: 1px solid var(--border-hover);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-blue);
  font-size: 1.4rem;
  margin-bottom: 22px;
}

.service-title {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 12px;
}

.service-desc {
  font-size: 0.92rem;
  line-height: 1.65;
  color: var(--text-body);
}

@media (max-width: 1000px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>