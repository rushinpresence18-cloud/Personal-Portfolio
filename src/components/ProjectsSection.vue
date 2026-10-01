<script setup>
import projectHr from '@/assets/project-hr.png'
import projectCatering from '@/assets/project-catering.png'
import projectTutoring from '@/assets/project-tutoring.png'

const projects = [
  {
    title: 'ModernTech HR',
    tech: 'HTML / CSS / JavaScript',
    desc: 'A collaborative HR management system built as part of a group project — featuring employee records, dashboard layouts, and clean UI.',
    link: 'https://github.com/nikitamullerr/Group-4_HRSystem_Project2',
    image: projectHr,
    group: true,
  },
  {
    title: 'E-Commerce Catering Website',
    tech: 'Vue.js',
    desc: 'A dynamic catering site with menu browsing, cart functionality, and a responsive order flow for event bookings.',
    link: 'https://github.com/chefmanie27-pixel/Occasion-catering',
    image: projectCatering,
    group: true,
  },
  {
    title: 'Student Tutoring Platform',
    tech: 'HTML / CSS / JavaScript',
    desc: 'A tutoring platform connecting students with qualified tutors — includes featured projects, class showcases, and interactive JavaScript components.',
    link: 'https://github.com/nikitamullerr/HTML_CSS_JavaScript_Showcase',
    image: projectTutoring,
    group: true,
  },
]
</script>

<template>
  <section id="projects" class="section projects-section">
    <div class="section-inner">
      <div class="projects-header">
        <div>
          <p class="eyebrow">Featured Projects</p>
          <h2 class="section-title">Selected Work</h2>
        </div>
        <a
          href="https://github.com/rushinpresence18-cloud"
          target="_blank"
          rel="noopener"
          class="view-all"
        >
          View All Projects <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>

      <div class="projects-grid">
        <a
          v-for="(project, index) in projects"
          :key="index"
          :href="project.link"
          target="_blank"
          rel="noopener noreferrer"
          class="project-card"
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :visible-once="{
            opacity: 1,
            y: 0,
            transition: { duration: 600, delay: index * 150 },
          }"
        >
          <div class="project-thumb">
            <img :src="project.image" :alt="project.title" class="project-img" />
            <div class="project-thumb-overlay"></div>
            <span v-if="project.group" class="group-badge">Group Project</span>
            <span class="github-chip">
              <i class="fa-brands fa-github"></i> GitHub
            </span>
          </div>

          <div class="project-body">
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-tech">{{ project.tech }}</p>
            <p class="project-desc">{{ project.desc }}</p>

            <span class="project-cta">
              View on GitHub <i class="fa-solid fa-arrow-right"></i>
            </span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  background: var(--bg-dark);
}

.projects-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 50px;
  gap: 24px;
  flex-wrap: wrap;
}

.projects-header .section-title {
  margin: 0;
}

.view-all {
  color: var(--accent-blue);
  font-weight: 600;
  font-size: 0.95rem;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: gap 0.25s ease;
}

.view-all:hover {
  gap: 14px;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

/* ===== Card ===== */
.project-card {
  display: flex;
  flex-direction: column;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-card);
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  color: inherit;
  text-decoration: none;
}

.project-card:hover {
  border-color: var(--border-hover);
  transform: translateY(-6px);
  box-shadow: var(--shadow-blue);
}

/* ===== Thumbnail ===== */
.project-thumb {
  position: relative;
  height: 200px;
  overflow: hidden;
  border-bottom: 1px solid var(--border);
  background: var(--bg-darker);
}

.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  transition: transform 0.5s ease;
  display: block;
}

.project-card:hover .project-img {
  transform: scale(1.06);
}

.project-thumb-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(6, 15, 28, 0.1) 0%,
    rgba(6, 15, 28, 0) 40%,
    rgba(6, 15, 28, 0.55) 100%
  );
  pointer-events: none;
}

.group-badge {
  position: absolute;
  top: 14px;
  left: 14px;
  background: rgba(47, 125, 246, 0.9);
  color: #ffffff;
  font-family: var(--font-body);
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 5px 11px;
  border-radius: 50px;
  backdrop-filter: blur(8px);
}

.github-chip {
  position: absolute;
  bottom: 14px;
  right: 14px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(6, 15, 28, 0.85);
  backdrop-filter: blur(8px);
  color: #ffffff;
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: all 0.25s ease;
}

.project-card:hover .github-chip {
  background: var(--accent-blue);
  border-color: var(--accent-blue);
}

/* ===== Body ===== */
.project-body {
  padding: 26px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.project-title {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 8px;
  color: var(--text-primary);
  transition: color 0.25s ease;
}

.project-card:hover .project-title {
  color: var(--accent-blue);
}

.project-tech {
  font-size: 0.78rem;
  color: var(--accent-blue);
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.project-desc {
  font-size: 0.9rem;
  color: var(--text-body);
  line-height: 1.6;
  margin-bottom: 20px;
  flex-grow: 1;
}

.project-cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--accent-blue);
  transition: gap 0.25s ease;
}

.project-card:hover .project-cta {
  gap: 14px;
}

/* ===== Responsive ===== */
@media (max-width: 1000px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>