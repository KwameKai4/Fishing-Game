<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="app-wrapper">
    <div class="header-wrapper">
      <!-- Left Section of the Header -->
      <div class="header-left">
        <div class="app-title">Vengince</div>
      </div>

      <!-- Navigation Links -->
      <nav>
        <RouterLink to="/" class="nav-item">Home</RouterLink>
        <RouterLink to="/fishing" class="nav-item">Fishing</RouterLink>
        <RouterLink to="/inventory" class="nav-item">Inventory</RouterLink>
        <RouterLink to="/market" class="nav-item">Market</RouterLink>
      </nav>
    </div>
  </header>

  <main class="app-main">
    <RouterView /> <!-- Dynamically renders routed components -->
  </main>
</template>

<style scoped>
/* HEADER WRAPPER STYLING */
.app-wrapper {
  width: 100%;
  height: 60px; /* Fixed height for the header */
  background: #1e1e1e; /* Background color for the header */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Subtle shadow effect */
  z-index: 10;
  position: relative; /* Ensure proper stacking hierarchy */
}

/* Header Content Wrapper for Flex Layout */
.header-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem; /* Space around content */
  max-width: 1200px; /* Prevent over-stretching */
  margin: 0 auto; /* Center horizontally */
  width: 100%;
}

/* Header Left Section (Brand Title) */
.header-left .app-title {
  font-size: 1.5rem; /* Title size */
  font-weight: bold;
  color: #e0e0e0; /* Text color for the header section */
}

/* NAVIGATION */
nav {
  display: flex;
  gap: 1rem; /* Space between nav links */
}

.nav-item {
  text-decoration: none; /* No underline for links */
  color: #ffffff; /* Default link color */
  font-weight: bold; /* Make the link text bold */
  font-size: 1rem; /* Link font size */
  padding: 0.5rem 1rem; /* Add padding for click area */
  border-radius: 0.25rem; /* Rounded corners on links */
  transition: 0.3s; /* Smooth transition for hover/active states */
  white-space: nowrap; /* Prevent text from wrapping */
}

.nav-item.router-link-exact-active {
  color: #1e1e1e;
  background: #4caf50; /* Background color for active link */
}

.nav-item:hover {
  color: #121212; /* Darker link text color on hover */
  background: #81c784; /* Light green background on hover */
}

/* MAIN CONTENT AREA */
.app-main {
  flex: 1; /* Fill remaining space below the header */
  padding: 1rem; /* Add space inside the main content area */
  background: #121212; /* Main background color */
  overflow-y: auto; /* Scrollable if content overflows */
  display: flex; /* Flexbox for centering */
  justify-content: center; /* Center content vertically */
  align-items: center; /* Center content horizontally */
  text-align: center; /* Center text alignment */
  width: 100%;
}

/* Hide scrollbar while allowing content scrolling */
.app-main::-webkit-scrollbar {
  display: none;
}

/* RESPONSIVENESS */

/* Medium Screens (Tablets, Laptops) */
@media (max-width: 1024px) {
  .app-title {
    font-size: 1.3rem; /* Adjust title size for medium screens */
  }
}

/* Small Screens (Mobile Devices) */
@media (max-width: 768px) {
  .app-title {
    font-size: 1rem; /* Smaller title size for mobile screens */
  }
}
</style>