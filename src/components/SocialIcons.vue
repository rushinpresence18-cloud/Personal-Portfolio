<template>
  <div class="social_icons">
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
</template>

<style scoped>
.social_icons {
  display: flex;
  gap: 20px;
  margin-top: 25px;
}

.social_icons a {
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #ffffff;
  font-size: 1.6rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social_icons a:hover {
  color: #00d9ff;
  border-color: #00d9ff;
  transform: translateY(-5px);
  box-shadow: 0 0 15px rgba(0, 217, 255, 0.5), 0 0 30px rgba(0, 217, 255, 0.2);
}
</style>