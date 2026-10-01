<script setup>
import { ref } from 'vue'

const form = ref({ name: '', email: '', subject: '', message: '' })

const status = ref('idle') // 'idle' | 'sending' | 'success' | 'error'

async function handleSubmit() {
  if (status.value === 'sending') return

  status.value = 'sending'

  try {
    const response = await fetch('https://formspree.io/f/xykagakr', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form.value),
    })

    if (response.ok) {
      status.value = 'success'
      form.value = { name: '', email: '', subject: '', message: '' }

      setTimeout(() => {
        status.value = 'idle'
      }, 4000)
    } else {
      status.value = 'error'
      setTimeout(() => {
        status.value = 'idle'
      }, 4000)
    }
  } catch (err) {
    status.value = 'error'
    setTimeout(() => {
      status.value = 'idle'
    }, 4000)
  }
}

function buttonLabel() {
  if (status.value === 'sending') return 'Sending...'
  if (status.value === 'success') return 'Message Sent'
  if (status.value === 'error') return 'Something went wrong'
  return 'Send Message'
}

const subjects = [
  'Project Inquiry',
  'Freelance / Contract Work',
  'Full-Time Opportunity',
  'Collaboration',
  'General Question',
  'Other',
]
</script>

<template>
  <main class="page">
    <section class="section page-header">
      <div class="section-inner">
        <p class="eyebrow">Get In Touch</p>
        <h1 class="section-title">Let's Build Something Together</h1>
        <p class="page-subtitle">
          Have a project in mind, a question, or just want to say hi?
          I'd love to hear from you.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="section-inner contact-layout">
        <!-- Info side -->
        <aside class="contact-info">
          <h2 class="info-title">Contact Information</h2>
          <p class="info-desc">
            I'm always open to opportunities, collaboration, and learning
            from fellow developers.
          </p>

          <div class="info-item">
            <i class="fa-regular fa-envelope"></i>
            <div>
              <strong>Email</strong>
              <a href="mailto:rushinpresence18@gmail.com">
                rushinpresence18@gmail.com
              </a>
            </div>
          </div>

          <div class="info-item">
            <i class="fa-solid fa-location-dot"></i>
            <div>
              <strong>Location</strong>
              <span>Cape Town, South Africa</span>
            </div>
          </div>

          <div class="info-item">
            <i class="fa-solid fa-briefcase"></i>
            <div>
              <strong>Status</strong>
              <span>Software Development Trainee</span>
            </div>
          </div>

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
        </aside>

        <!-- Form side -->
        <form class="contact-form" @submit.prevent="handleSubmit">
          <div class="form-row">
            <label>
              <span>Your Name</span>
              <input
                v-model="form.name"
                name="name"
                type="text"
                placeholder="John Doe"
                required
                :disabled="status === 'sending'"
              />
            </label>

            <label>
              <span>Your Email</span>
              <input
                v-model="form.email"
                name="email"
                type="email"
                placeholder="john@example.com"
                required
                :disabled="status === 'sending'"
              />
            </label>
          </div>

          <label>
            <span>Subject</span>
            <select
              v-model="form.subject"
              name="subject"
              required
              :disabled="status === 'sending'"
            >
              <option value="" disabled>— Select a topic —</option>
              <option
                v-for="option in subjects"
                :key="option"
                :value="option"
              >
                {{ option }}
              </option>
            </select>
          </label>

          <label>
            <span>Message</span>
            <textarea
              v-model="form.message"
              name="message"
              rows="6"
              placeholder="Tell me about your project..."
              required
              :disabled="status === 'sending'"
            ></textarea>
          </label>

          <button
            type="submit"
            class="btn submit-btn"
            :class="{
              'btn-primary': status === 'idle',
              'btn-sending': status === 'sending',
              'btn-success': status === 'success',
              'btn-error': status === 'error',
            }"
            :disabled="status === 'sending' || status === 'success'"
          >
            <span class="btn-content">
              <i
                v-if="status === 'idle'"
                class="fa-solid fa-paper-plane"
              ></i>
              <i
                v-else-if="status === 'sending'"
                class="fa-solid fa-circle-notch"
              ></i>
              <i
                v-else-if="status === 'success'"
                class="fa-solid fa-check"
              ></i>
              <i v-else class="fa-solid fa-circle-exclamation"></i>
              <span>{{ buttonLabel() }}</span>
            </span>
          </button>
        </form>
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

.contact-layout {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 60px;
  align-items: start;
}

/* ===== Info side ===== */
.contact-info {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-card);
  padding: 36px 32px;
}

.info-title {
  font-size: 1.3rem;
  margin-bottom: 14px;
}

.info-desc {
  color: var(--text-body);
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 30px;
}

.info-item {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  margin-bottom: 22px;
}

.info-item i {
  color: var(--accent-blue);
  font-size: 1.2rem;
  margin-top: 4px;
  flex-shrink: 0;
}

.info-item strong {
  display: block;
  color: var(--text-primary);
  font-family: var(--font-heading);
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 4px;
}

.info-item a,
.info-item span {
  color: var(--text-body);
  font-size: 0.9rem;
  word-break: break-word;
}

.info-item a:hover {
  color: var(--accent-blue);
}

.social-row {
  display: flex;
  gap: 12px;
  margin-top: 30px;
  padding-top: 24px;
  border-top: 1px solid var(--border);
}

.social-row a {
  width: 42px;
  height: 42px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-darker);
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

/* ===== Form ===== */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 22px;
}

.contact-form label {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.contact-form label > span {
  font-family: var(--font-heading);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: 0.3px;
}

.contact-form input,
.contact-form textarea,
.contact-form select {
  width: 100%;
  padding: 14px 16px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--text-primary);
  font-family: var(--font-body);
  font-size: 0.95rem;
  outline: none;
  transition: all 0.25s ease;
}

.contact-form textarea {
  resize: vertical;
}

.contact-form input::placeholder,
.contact-form textarea::placeholder {
  color: var(--text-dim);
}

.contact-form input:focus,
.contact-form textarea:focus,
.contact-form select:focus {
  border-color: var(--accent-blue);
  background-color: var(--bg-card-hover);
  box-shadow: 0 0 0 3px var(--accent-blue-dim);
}

.contact-form input:disabled,
.contact-form textarea:disabled,
.contact-form select:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* ===== Custom select styling ===== */
.contact-form select {
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding-right: 42px;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236e7e94' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 14px center;
  background-size: 16px;
}

.contact-form select:invalid,
.contact-form select option[value=""][disabled] {
  color: var(--text-dim);
}

.contact-form select option {
  background: var(--bg-card);
  color: var(--text-primary);
  padding: 10px;
}

/* ===== Submit button ===== */
.submit-btn {
  align-self: flex-start;
  margin-top: 6px;
  min-width: 180px;
  justify-content: center;
  transition: all 0.3s ease;
}

.btn-content {
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.btn-sending {
  background: var(--accent-blue-2);
  color: #ffffff;
  cursor: wait;
  opacity: 0.9;
}

.btn-sending .fa-circle-notch {
  animation: spin 1s linear infinite;
}

.btn-success {
  background: #16a34a;
  color: #ffffff;
  cursor: default;
  box-shadow: 0 0 20px rgba(22, 163, 74, 0.4);
}

.btn-error {
  background: #dc2626;
  color: #ffffff;
  cursor: default;
  box-shadow: 0 0 20px rgba(220, 38, 38, 0.4);
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

/* ===== Responsive ===== */
@media (max-width: 900px) {
  .contact-layout {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>