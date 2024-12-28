<template>
  <div class="inventory">
    <h1>Inventory 🧳</h1>
    <ul v-if="store.inventory.length > 0">
      <li v-for="item in store.inventory" :key="item.name">
        {{ item.name }}: {{ item.quantity }}
        <button @click="sellFish(item)">Sell</button>
      </li>
    </ul>
    <p v-else>Your inventory is empty! Start fishing or playing games to collect items.</p>
    <button v-if="store.inventory.length > 0" @click="sellAllFish">Sell All Fish</button>
    <p>Your Total Gold: {{ store.gold }} 💰</p>
  </div>
</template>

<script>
import { store } from "../store";

export default {
  setup() {
    return { 
      store,
      sellFish(item) {
        const totalValue = item.quantity * item.value;
        store.addGold(totalValue);
        store.inventory = store.inventory.filter((invItem) => invItem !== item); // Remove the sold item
        store.saveState();
        alert(`You sold ${item.name} for ${totalValue} gold!`);
      },
      sellAllFish() {
        let totalGold = 0;
        store.inventory.forEach((item) => {
          totalGold += item.quantity * item.value;
        });
        store.addGold(totalGold);
        store.resetInventory();
        alert(`You sold all fish for ${totalGold} gold!`);
      }
    };
  },
};
</script>

<style>
.inventory {
  padding: 1rem;
}

h1 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

button {
  margin-left: 10px;
  padding: 5px 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #45a049;
}

.sell-all-button {
  margin-top: 1rem;
  padding: 10px 20px;
  background-color: #ff5733;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.sell-all-button:hover {
  background-color: #e04a2c;
}
</style>
