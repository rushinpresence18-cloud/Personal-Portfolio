<script setup>
import { ref, watch } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'

const menuOpen = ref(false)
const route = useRoute()
const router = useRouter()

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}

/**
 * Scrolls to a section by ID on the current page.
 * If we're not on the homepage, we first navigate there,
 * then scroll once the page is mounted.
 */
function scrollToSection(id) {
  closeMenu()

  const doScroll = () => {
    const el = document.getElementById(id)
    if (el) {
      const offset = 90 // navbar height offset
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  if (route.path !== '/') {
    router.push('/').then(() => {
      // Give the browser a tick to render the new page
      setTimeout(doScroll, 150)
    })
  } else {
    doScroll()
  }
}
</script>

<template>
  <header class="navbar">
    <div class="navbar-inner">
      <RouterLink to="/" class="logo" @click="closeMenu">
        <span class="logo-name">Rushin<span class="logo-accent">Presence</span></span>
        <span class="logo-tagline">FRONT-END DEVELOPER</span>
      </RouterLink>

      <nav class="nav-links" :class="{ open: menuOpen }">
        <RouterLink to="/" @click="closeMenu">Home</RouterLink>
        <RouterLink to="/about" @click="closeMenu">About</RouterLink>
        <RouterLink to="/skills" @click="closeMenu">Services</RouterLink>

        <!-- Projects: smooth-scrolls to the #projects section on homepage -->
        <a href="#" @click.prevent="scrollToSection('projects')">Projects</a>

        <RouterLink to="/contact" @click="closeMenu">Contact</RouterLink>

        <RouterLink to="/contact" class="hire-btn" @click="closeMenu">
          Hire Me
        </RouterLink>
      </nav>

      <button class="menu-toggle" @click="toggleMenu" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: rgba(10, 22, 40, 0.85);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--border);
}

.navbar-inner {
  max-width: var(--content-width);
  margin: 0 auto;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.logo {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
  flex-shrink: 0;
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
  margin-top: 2px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 30px;
}

.nav-links a {
  font-family: var(--font-body);
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-body);
  transition: color 0.2s ease;
  cursor: pointer;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: var(--accent-blue);
}

.hire-btn {
  background: var(--accent-blue);
  color: #ffffff !important;
  padding: 10px 22px;
  border-radius: var(--radius-btn);
  font-weight: 600 !important;
  transition: all 0.25s ease;
}

.hire-btn:hover {
  background: var(--accent-blue-2);
  transform: translateY(-2px);
  box-shadow: var(--shadow-blue);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
}

.menu-toggle span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text-primary);
  transition: 0.3s;
}

@media (max-width: 1000px) {
  .nav-links {
    gap: 22px;
  }
}

@media (max-width: 900px) {
  .menu-toggle {
    display: flex;
  }

  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
    padding: 16px 24px 24px;
    background: var(--bg-darker);
    border-bottom: 1px solid var(--border);
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
  }

  .nav-links.open {
    max-height: 500px;
  }

  .nav-links a {
    width: 100%;
    padding: 14px 0;
    border-bottom: 1px solid var(--border);
  }

  .hire-btn {
    margin-top: 16px;
    text-align: center;
    border-bottom: none !important;
  }
}
</style>