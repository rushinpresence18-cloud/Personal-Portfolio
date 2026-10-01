<script setup>
import { RouterLink } from 'vue-router'
import portrait from '@/assets/portrait.jpg'
</script>

<template>
  <main class="page">
    <section class="section page-header">
      <div class="section-inner">
        <p class="eyebrow">About Me</p>
        <h1 class="section-title">Hi, I'm Rushin Presence</h1>
        <p class="page-subtitle">
          An emerging Front-End Developer on a mission to build clean,
          user-focused web experiences.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="section-inner about-layout">
        <div class="portrait-col">
          <img :src="portrait" alt="Rushin Presence" class="portrait-img" />
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
          </div>
        </div>

        <div class="about-content">
          <h2>My Story</h2>
          <p>
            I'm a Front-End Developer and software engineering trainee at Life
            Choices Academy, based in Cape Town, South Africa. My journey into
            tech is driven by a mix of logical problem-solving and creative design —
            I care just as much about clean, semantic code as I do about crafting
            flawless, responsive layouts.
          </p>
          <p>
            I thrive on taking concepts from tutorials and turning them into real,
            live projects. Every bug I troubleshoot and every layout I build is a
            step toward refining my craft.
          </p>

          <h2 class="sub-heading">Interests & Hobbies</h2>
          <div class="interests-grid">
            <span class="interest-tag"><i class="fa-solid fa-dumbbell"></i> Weight Training</span>
            <span class="interest-tag"><i class="fa-solid fa-gamepad"></i> Gaming</span>
            <span class="interest-tag"><i class="fa-solid fa-futbol"></i> Soccer</span>
            <span class="interest-tag"><i class="fa-solid fa-code"></i> Coding Projects</span>
            <span class="interest-tag"><i class="fa-solid fa-leaf"></i> Eating Healthy</span>
            <span class="interest-tag"><i class="fa-solid fa-music"></i> Piano</span>
          </div>

          <h2 class="sub-heading">Favourite Foods</h2>
          <ul class="foods-list">
            <li>Grilled Chicken Breast</li>
            <li>Eggs</li>
            <li>Brown Rice</li>
            <li>Oats</li>
            <li>Greek Yogurt</li>
          </ul>

          <div class="nav-buttons">
            <RouterLink to="/" class="btn btn-outline">
              <i class="fa-solid fa-arrow-left"></i> Back Home
            </RouterLink>
            <RouterLink to="/skills" class="btn btn-primary">
              View Skills <i class="fa-solid fa-arrow-right"></i>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

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

.about-layout {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 60px;
  align-items: start;
}

/* Portrait */
.portrait-img {
  width: 100%;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  object-position: center top;
  border-radius: var(--radius-card);
  border: 2px solid var(--border-hover);
  box-shadow: var(--shadow-blue);
  display: block;
}

.social-row {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 24px;
}

.social-row a {
  width: 42px;
  height: 42px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--text-body);
  font-size: 1.05rem;
  transition: all 0.25s ease;
}

.social-row a:hover {
  color: var(--accent-blue);
  border-color: var(--border-hover);
  transform: translateY(-3px);
}

/* Content */
.about-content h2 {
  font-size: 1.5rem;
  margin-bottom: 16px;
}

.about-content p {
  color: var(--text-body);
  line-height: 1.8;
  margin-bottom: 18px;
}

.sub-heading {
  margin-top: 40px !important;
  margin-bottom: 20px !important;
}

/* Interests */
.interests-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 40px;
}

.interest-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 50px;
  font-size: 0.9rem;
  color: var(--text-body);
  transition: all 0.25s ease;
}

.interest-tag i {
  color: var(--accent-blue);
}

.interest-tag:hover {
  border-color: var(--border-hover);
  color: var(--text-primary);
  transform: translateY(-2px);
}

/* Foods */
.foods-list {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 10px 24px;
  margin-bottom: 40px;
}

.foods-list li {
  color: var(--text-body);
  padding-left: 22px;
  position: relative;
  font-size: 0.95rem;
}

.foods-list li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 10px;
  width: 8px;
  height: 8px;
  background: var(--accent-blue);
  border-radius: 50%;
}

/* Buttons */
.nav-buttons {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 40px;
}

@media (max-width: 900px) {
  .about-layout {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .portrait-img {
    max-width: 280px;
    margin: 0 auto;
  }
}
</style>