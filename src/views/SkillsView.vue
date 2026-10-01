<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="page">
    <section class="section page-header">
      <div class="section-inner">
        <p class="eyebrow">Skills & Services</p>
        <h1 class="section-title">What I Bring to the Table</h1>
        <p class="page-subtitle">
          From semantic HTML to interactive Vue applications — here's what I
          work with every day.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="section-inner">
        <h2 class="block-title">Core Technologies</h2>

        <div class="skills-list">
          <div
            class="skill-row"
            v-for="(skill, index) in skills"
            :key="index"
          >
            <div class="skill-icon">
              <i :class="skill.icon"></i>
            </div>
            <div class="skill-info">
              <h3 class="skill-name">{{ skill.name }}</h3>
              <p class="skill-desc">{{ skill.desc }}</p>
            </div>
            <div class="skill-bar">
              <div
                class="skill-bar-fill"
                :style="{ width: skill.level + '%' }"
              ></div>
            </div>
          </div>
        </div>

        <div class="nav-buttons">
          <RouterLink to="/about" class="btn btn-outline">
            <i class="fa-solid fa-arrow-left"></i> Back to About
          </RouterLink>
          <RouterLink to="/contact" class="btn btn-primary">
            Get In Touch <i class="fa-solid fa-arrow-right"></i>
          </RouterLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        {
          name: 'HTML5',
          icon: 'fa-brands fa-html5',
          desc: 'Semantic markup, accessibility, document outline',
          level: 90,
        },
        {
          name: 'CSS3',
          icon: 'fa-brands fa-css3-alt',
          desc: 'Flexbox, Grid, responsive design, animations',
          level: 85,
        },
        {
          name: 'JavaScript',
          icon: 'fa-brands fa-js',
          desc: 'DOM manipulation, ES6+, async patterns',
          level: 75,
        },
        {
          name: 'Vue.js',
          icon: 'fa-brands fa-vuejs',
          desc: 'Components, reactivity, Vue Router, Pinia',
          level: 70,
        },
        {
          name: 'Python',
          icon: 'fa-brands fa-python',
          desc: 'Core programming, scripting, backend logic',
          level: 65,
        },
        {
          name: 'Git & GitHub',
          icon: 'fa-brands fa-git-alt',
          desc: 'Version control, branching, collaboration',
          level: 70,
        },
      ],
    }
  },
}
</script>

<style scoped>
.page {
  padding-top: 80px;
}

.page-header {
  background: linear-gradient(180deg, var(--bg-dark), var(--bg-darker));
  border-bottom: 1px solid var(--border);
  padding-bottom: 70px;
}

.page-subtitle {
  color: var(--text-body);
  font-size: 1.05rem;
  max-width: 620px;
}

.block-title {
  font-size: 1.5rem;
  margin-bottom: 30px;
}

/* Skill rows */
.skills-list {
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 50px;
}

.skill-row {
  display: grid;
  grid-template-columns: 60px 1fr 200px;
  gap: 24px;
  align-items: center;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-card);
  padding: 22px 26px;
  transition: all 0.3s ease;
}

.skill-row:hover {
  border-color: var(--border-hover);
  transform: translateX(4px);
}

.skill-icon {
  width: 52px;
  height: 52px;
  border-radius: 10px;
  background: var(--accent-blue-dim);
  border: 1px solid var(--border-hover);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-blue);
  font-size: 1.5rem;
}

.skill-name {
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 4px;
}

.skill-desc {
  font-size: 0.88rem;
  color: var(--text-body);
}

/* Progress bar */
.skill-bar {
  height: 6px;
  border-radius: 3px;
  background: var(--bg-darker);
  overflow: hidden;
  position: relative;
}

.skill-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--accent-blue), var(--accent-blue-2));
  border-radius: 3px;
  transition: width 1s ease;
}

/* Buttons */
.nav-buttons {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
}

@media (max-width: 800px) {
  .skill-row {
    grid-template-columns: 60px 1fr;
  }

  .skill-bar {
    grid-column: 1 / -1;
  }
}
</style>