<template>
  <section class="section about-section">
    <div class="section-inner about-grid">
      <div class="about-text">
        <p class="eyebrow">About Me</p>
        <h2 class="section-title">Building Solutions That Make an Impact</h2>

        <p class="about-desc">
          I'm a passionate Front-End Developer based in Cape Town, South Africa.
          I specialize in building scalable, user-friendly web applications using
          modern technologies. With a strong eye for design and a love for clean
          code, I help businesses and individuals bring their ideas to life.
        </p>

        <ul class="about-stats">
          <li><i class="fa-regular fa-circle-check"></i> Front-End Focus</li>
          <li><i class="fa-regular fa-circle-check"></i> Available for Freelance</li>
          <li><i class="fa-regular fa-circle-check"></i> 10+ Projects Completed</li>
          <li><i class="fa-regular fa-circle-check"></i> Clients Worldwide</li>
        </ul>

        <a
          href="mailto:rushinpresence18@gmail.com"
          class="btn btn-primary about-cv-btn"
        >
          <i class="fa-regular fa-envelope"></i> Get In Touch
        </a>
      </div>

      <aside class="info-card">
        <div class="info-item">
          <i class="fa-solid fa-location-dot"></i>
          <div>
            <strong>Location</strong>
            <span>Cape Town, South Africa</span>
          </div>
        </div>
        <div class="info-item">
          <i class="fa-regular fa-envelope"></i>
          <div>
            <strong>Email</strong>
            <span>rushinpresence18@gmail.com</span>
          </div>
        </div>
        <div class="info-item">
          <i class="fa-solid fa-code"></i>
          <div>
            <strong>Role</strong>
            <span>Front-End Developer</span>
          </div>
        </div>
        <div class="info-item">
          <i class="fa-solid fa-language"></i>
          <div>
            <strong>Languages</strong>
            <span>English</span>
          </div>
        </div>
      </aside>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  background: var(--bg-dark);
}

.about-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 60px;
  align-items: start;
}

.about-desc {
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--text-body);
  margin-bottom: 32px;
  max-width: 560px;
}

.about-stats {
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px 24px;
  margin-bottom: 40px;
  padding: 0;
}

.about-stats li {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--text-body);
  font-size: 0.95rem;
}

.about-stats i {
  color: var(--accent-blue);
  font-size: 1.05rem;
}

.about-cv-btn {
  align-self: flex-start;
}

/* Info card */
.info-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-card);
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 26px;
}

.info-item {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.info-item i {
  color: var(--accent-blue);
  font-size: 1.3rem;
  margin-top: 4px;
  flex-shrink: 0;
}

.info-item strong {
  display: block;
  color: var(--text-primary);
  font-family: var(--font-heading);
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 4px;
}

.info-item span {
  color: var(--text-body);
  font-size: 0.9rem;
  line-height: 1.5;
  word-break: break-word;
}

@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .about-stats {
    grid-template-columns: 1fr;
  }
}
</style>