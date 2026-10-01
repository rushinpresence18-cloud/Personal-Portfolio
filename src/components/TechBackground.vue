<template>
  <div class="tech-scene">
    <div class="gadget laptop">💻</div>
    <div class="gadget phone">📱</div>
    <div class="gadget code">&lt;/&gt;</div>
    <div class="gadget chip">🤖</div>
    <div class="gadget gear">⚙️</div>

    <div class="circuit circuit1"></div>
    <div class="circuit circuit2"></div>
    <div class="circuit circuit3"></div>
  </div>
</template>

<style scoped>
.tech-scene {
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background: radial-gradient(circle at center, #112240 0%, #0a192f 40%, #020c1b 100%);
  overflow: hidden;
  z-index: -1;
}

.gadget {
  position: absolute;
  font-size: 60px;
  color: cyan;
  text-shadow: 0 0 10px cyan, 0 0 20px cyan, 0 0 40px cyan;
}

.laptop { top: 15%; left: 10%; animation: float1 12s infinite ease-in-out; }
.phone  { top: 70%; left: 75%; animation: float2 15s infinite ease-in-out; }
.code   { top: 35%; left: 85%; animation: rotateCode 18s infinite linear; font-weight: bold; }
.chip   { top: 65%; left: 25%; animation: float3 14s infinite ease-in-out; }
.gear   { top: 25%; left: 50%; animation: spinGear 10s infinite linear; }

@keyframes float1 {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50%      { transform: translateY(-40px) rotate(10deg); }
}
@keyframes float2 {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-60px); }
}
@keyframes float3 {
  0%, 100% { transform: translateX(0); }
  50%      { transform: translateX(50px); }
}
@keyframes rotateCode {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
@keyframes spinGear {
  from { transform: rotate(0deg); }
  to   { transform: rotate(-360deg); }
}

.circuit {
  position: absolute;
  background: cyan;
  box-shadow: 0 0 15px cyan;
}
.circuit1 { width: 3px; height: 300px; left: 20%; animation: pulse 2s infinite; }
.circuit2 { width: 300px; height: 3px; top: 40%; left: 30%; animation: pulse 3s infinite; }
.circuit3 { width: 3px; height: 250px; right: 20%; animation: pulse 4s infinite; }

@keyframes pulse {
  0%, 100% { opacity: 0.3; }
  50%      { opacity: 1; }
}
</style>