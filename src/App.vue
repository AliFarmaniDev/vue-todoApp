<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/" class="nav-link">Home</RouterLink>
      <RouterLink to="/add" class="nav-link">New Todo</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<style lang="scss" scoped>
header {
  padding: 1rem 2rem;
  background-color: #1e40af;
  border-bottom: 1px solid #60a5fa;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
}
nav {
  .nav-link {
    color: #fff;
    padding: 5px 15px;
    border-radius: 5px;
    margin-right: 1rem;
  }
  a:hover {
    background: #60a5fa;
  }
}
</style>
