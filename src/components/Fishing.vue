<template>
  <div class="Fishing">
    <h1>Fuel the Addiction.</h1>

    <div class="games-container">
      <!-- Fishing Mini-Game -->
      <div class="fishing-game-container">
        <h2>Fishing Mini-Game 🎣</h2>
        <div class="fishing-area">
          <img
            v-if="fishCaught && fishCaught !== 'nothing'"
            :src="`/src/assets/${fishCaught}.png`"
            alt="fish"
            class="fish-image"
          />
          <p v-if="!fishing" class="fishing-status">
            {{ fishCaught === "nothing" 
              ? "You didn't catch anything... 😞 Try again!" 
              : fishCaught 
                ? `You caught a ${fishCaught}! 🎉` 
                : "Ready to fish!" 
            }}
          </p>
          <p v-if="fishing" class="fishing-status">Waiting for a bite... 🐟</p>
        </div>
        <button class="cast-button" @click="castRod" :disabled="fishing || autoFishing">CAST</button>
        <button class="auto-fish-button" @click="startAutoFishing" :disabled="autoFishing">Auto Fish</button>
        <button class="stop-auto-fish-button" @click="stopAutoFishing" :disabled="!autoFishing">Stop Auto Fish</button>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store";

export default {
  data() {
    return {
      fishing: false,
      fishCaught: null,
      autoFishing: false, // To track if auto fishing is active
      allFish: [
  { name: "goldfish", value: 10 },
  { name: "bass", value: 20 },
  { name: "catfish", value: 30 },
  { name: "shark", value: 50 },
  { name: "boot", value: 5 },
  { name: "nothing", value: 0 },
  { name: "Gun", value: 100 },
  { name: "Weed", value: 30 },
  { name: "treasure", value: 80 },
  { name: "jellyfish", value: 15 },
  
  // Additional fish items
  { name: "salmon", value: 40 },
  { name: "tuna", value: 60 },
  { name: "trout", value: 25 },
  { name: "piranha", value: 35 },
  { name: "anglerfish", value: 55 },
  { name: "whale", value: 200 },
  { name: "dolphin", value: 120 },
  { name: "octopus", value: 70 },
  { name: "squid", value: 45 },
  { name: "crab", value: 30 },
  { name: "lobster", value: 50 },
  
  // Rare/Unique fish and items
  { name: "mermaid", value: 300 },
  { name: "goldenfish", value: 150 },
  { name: "hydra", value: 250 },
  { name: "dragonfish", value: 500 },
  { name: "phoenix feather", value: 600 },
  { name: "vampire fish", value: 80 },
  { name: "sea serpent", value: 400 },
  { name: "fishing rod (rare)", value: 1000 },
  { name: "enchanted fish", value: 350 },
  { name: "black pearl", value: 450 },
  
  // More regular fish
  { name: "perch", value: 10 },
  { name: "tilapia", value: 15 },
  { name: "cod", value: 20 },
  { name: "bluegill", value: 18 },
  { name: "swordfish", value: 70 },
  { name: "marlin", value: 100 },
  { name: "stingray", value: 85 },
  { name: "ray", value: 40 },
  { name: "herring", value: 15 },
  { name: "flounder", value: 20 },
  
  // Miscellaneous items
  { name: "old boot", value: 3 },
  { name: "rusty key", value: 5 },
  { name: "treasure chest", value: 200 },
  { name: "fishing lure", value: 12 },
  { name: "shark fin", value: 90 },
  { name: "fishbone", value: 2 },
  { name: "message in a bottle", value: 40 },
  { name: "clamshell", value: 10 },
  { name: "starfish", value: 15 },
  { name: "coral", value: 30 }
],

    };
  },
  methods: {
    // Regular cast rod method
    castRod() {
      if (this.fishing || this.autoFishing) return;

      this.fishing = true;
      this.fishCaught = null;

      setTimeout(() => {
        const catchChance = Math.random();
        if (catchChance < 0.75) {
          const index = Math.floor(Math.random() * (this.allFish.length - 1));
          this.fishCaught = this.allFish[index].name;
          const fishValue = this.allFish[index].value;

          if (this.fishCaught !== "nothing") {
            store.addItem(this.fishCaught);
          }
        } else {
          this.fishCaught = "nothing";
        }

        this.fishing = false;
      }, 1000);
    },

    // Auto-fish method with random time delay
    startAutoFishing() {
      if (this.fishing || this.autoFishing) return;

      this.autoFishing = true;
      this.fishing = false;
      this.fishCaught = null;

      this.autoFishLoop(); // Start the continuous auto-fishing loop
    },

    // The loop that keeps auto fishing continuously
    autoFishLoop() {
      if (!this.autoFishing) return; // Stop if auto fishing is disabled

      // Random time between 4 and 12 seconds
      const delay = Math.floor(Math.random() * (12000 - 4000) + 4000);

      setTimeout(() => {
        const catchChance = Math.random();
        if (catchChance < 0.75) {
          const index = Math.floor(Math.random() * (this.allFish.length - 1));
          this.fishCaught = this.allFish[index].name;

          if (this.fishCaught !== "nothing") {
            store.addItem(this.fishCaught);
          }
        } else {
          this.fishCaught = "nothing";
        }

        // Continue fishing if autoFishing is still active
        if (this.autoFishing) {
          this.autoFishLoop();
        }
      }, delay);
    },

    // Stop the auto-fishing process
    stopAutoFishing() {
      this.autoFishing = false;
    },
  },
};
</script>

<style scoped>
/* Fishing Game Container */
.fishing-game-container {
  margin-top: 50px;
  text-align: center;
}

.fishing-area {
  margin: 20px 0;
  height: 300px;
  width: 420px;
  border: 3px dashed #4caf50;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('/src/assets/fishing.gif') center/cover no-repeat; /* Background GIF */
}

.fishing-status {
  font-size: 18px;
  font-weight: bold;
  color: #000000;
}

.fish-image {
  width: 100px;
  height: auto;
}

.cast-button, .auto-fish-button, .stop-auto-fish-button {
  padding: 10px 20px;
  background-color: #0073e6;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  transition: background-color 0.3s ease;
  cursor: pointer;
  margin-top: 10px;
}

.cast-button:hover, .auto-fish-button:hover, .stop-auto-fish-button:hover {
  background-color: #005bb5;
}

.cast-button:disabled, .auto-fish-button:disabled, .stop-auto-fish-button:disabled {
  background-color: #999;
  cursor: not-allowed;
}

/* Inventory Styles */
.inventory {
  margin-top: 20px;
  text-align: left;
}

.inventory h3 {
  font-size: 20px;
  color: #333;
}

.inventory-item {
  font-size: 16px;
  color: #555;
  list-style: circle inside;
}
</style>
