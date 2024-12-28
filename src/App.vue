<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div id="app" class="app-wrapper">
    <header>
      <div class="header-wrapper">
        <div class="header-left">
          <HelloWorld msg="Vengince." />
        </div>
        <nav>
          <RouterLink to="/">Home</RouterLink>  <!-- Link to Home -->
          <RouterLink to="/fishing">Fishing</RouterLink>
          <RouterLink to="/inventory">Inventory</RouterLink>
          <RouterLink to="/market">Market</RouterLink>
        </nav>
      </div>
    </header>
    <main>
      <RouterView />  <!-- This will render the Home or other components -->
    </main>
  </div>
</template>

<style scoped>
/* Wrapper for the App */
.app-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: #121212;
  color: #e0e0e0;
  overflow: hidden;
}

/* Header Styles */
header {
  width: 100%;
  background: #1e1e1e;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 10;
}

/* Header Wrapper to Limit Max Width */
.header-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem; /* Adjust padding for proper space */
  max-width: 1200px; /* Set a max-width to prevent stretching on larger screens */
  margin: 0 auto; /* Center content horizontally */
  width: 100%;
}

/* Header Left Section */
.header-left {
  font-size: 1.2rem; /* Adjust font size for better fit */
  color: #e0e0e0;
}

/* Navigation Styles */
nav {
  display: flex;
  gap: 1rem; /* Larger gap for readability */
}

nav a {
  text-decoration: none;
  color: #ffffff;
  font-weight: bold;
  font-size: 1rem; /* Adjusted font size */
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  transition: 0.3s;
  white-space: nowrap;
}

/* Active Link and Hover Styles */
nav a.router-link-exact-active {
  color: #1e1e1e;
  background: #4caf50;
}

nav a:hover {
  color: #121212;
  background: #81c784;
}

/* Main Content Area */
main {
  flex: 1;  /* Take up remaining space */
  padding: 1rem; /* Padding for content spacing */
  background: #121212;
  overflow-y: auto;
  width: 100%; /* Ensure the main container takes full width */
  min-height: calc(100vh - 60px); /* Ensure main container has a minimum height of the viewport minus header */
  display: flex;
  justify-content: center; /* Center content horizontally */
  align-items: center; /* Center content vertically */
  flex-direction: column; /* Allow content to stack if needed */
}

/* Hide scrollbar while allowing scrolling */
main::-webkit-scrollbar {
  display: none;
}

/* Global Body Styles */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #121212;
  overflow: hidden;
}

/* Responsive Adjustments */

/* Medium Screens */
@media (max-width: 1024px) {
  .header-left {
    font-size: 1.1rem; /* Adjust font size for medium screens */
  }
}

/* Small Screens */
@media (max-width: 768px) {
  .header-left {
    font-size: 1rem; /* Reduced font size for small screens */
  }
}
</style>
