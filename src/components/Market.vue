<template>
  <div class="market">
    <h1>Market</h1>
    <p class="gold-display">Your Total Gold: {{ store.gold }} 💰</p>
    <div class="market-items">
      <div v-for="item in marketItems" :key="item.name" class="market-item">
        <h3>{{ item.name }}</h3>
        <p>{{ item.description }}</p>
        <p>Price: {{ item.price }} Gold</p>
        <button @click="purchase(item)">Buy</button>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store";

export default {
  setup() {
    return {
      store,
      purchase(item) {
        store.purchaseItem(item);
      },
    };
  },
  data() {
    return {
      marketItems: [
        { name: "Fishing Rod", price: 50, description: "Increases fishing success." },
        { name: "Bait", price: 10, description: "Attracts rare fish." },
        { name: "Treasure Map", price: 100, description: "Find hidden treasures!" },
        { name: "Boat", price: 200, description: "Catch more fish at sea." },
        { name: "Fishing Net", price: 150, description: "Catch multiple fish at once." },
        { name: "Tackle Box", price: 75, description: "Organize your fishing gear efficiently." },
        { name: "Sonar Device", price: 300, description: "Locate the best fishing spots easily." },
        { name: "Ice Cooler", price: 120, description: "Keep your fish fresh for longer." },
        { name: "Life Vest", price: 50, description: "Ensure your safety while fishing at sea." },
        { name: "Spearfishing Kit", price: 180, description: "Catch larger fish with precision." },
        { name: "Fishing Gloves", price: 25, description: "Protect your hands while handling fish." },
        { name: "Portable Stove", price: 90, description: "Cook your catch right on the spot!" },
        { name: "Fishing License", price: 50, description: "Legal authorization to fish in new areas." },
        { name: "Advanced Lures", price: 80, description: "Attract the rarest fish with ease." },
        { name: "Underwater Camera", price: 250, description: "Record your underwater fishing adventures." },
        { name: "Luxury Boat", price: 1000, description: "Fish in style with this high-end vessel." },
        { name: "Fishing Journal", price: 15, description: "Keep track of your fishing experiences." },
        { name: "Crab Trap", price: 200, description: "Catch crabs in addition to fish." },
        { name: "Fishing Chair", price: 35, description: "Relax while waiting for a bite." },
        { name: "Lantern", price: 40, description: "Light up your night fishing trips." },
        { name: "Mini Fridge", price: 300, description: "Store your catch or drinks during long trips." },
        { name: "Fishing Tournament Ticket", price: 500, description: "Enter a competition to win big rewards!" },
      ],
    };
  },
};
</script>

<style scoped>
.market {
  text-align: center;
}

.gold-display {
  font-size: 18px;
  margin-bottom: 20px;
  color: #ffd700;
  font-weight: bold;
}

.market-items {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  max-height: 600px;
  overflow-y: auto;
  padding: 10px;
  border: 1px solid #098d10;
  border-radius: 8px;
  background-color: #2e2c2c;
}

.market-item {
  border: 1px solid #3015c9;
  border-radius: 8px;
  padding: 10px;
  width: 200px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.market-item h3 {
  margin: 0;
  font-size: 18px;
}

.market-item p {
  margin: 5px 0;
}

.market-item button {
  padding: 8px 12px;
  background-color: #4caf50;
  color: rgb(255, 255, 255);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.market-item button:hover {
  background-color: #45a049;
}

.market-items::-webkit-scrollbar {
  width: 10px;
}

.market-items::-webkit-scrollbar-thumb {
  background-color: #aaa2a2;
  border-radius: 8px;
}

.market-items::-webkit-scrollbar-thumb:hover {
  background-color: #888181;
}
</style>
