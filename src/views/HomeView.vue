<script setup>
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ServicesSection from '@/components/ServicesSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import CtaSection from '@/components/CtaSection.vue'
</script>

<template>
  <main>
    <HeroSection />

    <div
      v-motion
      :initial="{ opacity: 0, y: 60 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 700, delay: 100 } }"
    >
      <AboutSection />
    </div>

    <div
      v-motion
      :initial="{ opacity: 0, y: 60 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 700, delay: 100 } }"
    >
      <ServicesSection />
    </div>

    <div
      v-motion
      :initial="{ opacity: 0, y: 60 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 700, delay: 100 } }"
    >
      <ProjectsSection />
    </div>

    <div
      v-motion
      :initial="{ opacity: 0, y: 60 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 700, delay: 100 } }"
    >
      <CtaSection />
    </div>
  </main>
</template>