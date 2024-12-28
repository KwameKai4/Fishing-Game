import { reactive } from 'vue';

export const store = reactive({
  // Inventory and gold (loaded from localStorage if available)
  inventory: JSON.parse(localStorage.getItem('inventory')) || [],
  gold: JSON.parse(localStorage.getItem('gold')) || 0,

  // Add an item to the inventory
  addItem(itemName) {
    const existingItem = this.inventory.find((item) => item.name === itemName);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.inventory.push({ name: itemName, quantity: 1, value: Math.floor(Math.random() * 10) + 1 }); // Random resale value
    }
    this.saveState();
  },

  // Deduct gold and purchase an item
  purchaseItem(item) {
    if (this.gold >= item.price) {
      this.gold -= item.price;
      this.addItem(item.name); // Add the purchased item to the inventory
      alert(`You bought a ${item.name}!`);
    } else {
      alert('Not enough gold to purchase this item.');
    }
    this.saveState();
  },

  // Save inventory and gold to localStorage
  saveState() {
    localStorage.setItem('inventory', JSON.stringify(this.inventory));
    localStorage.setItem('gold', JSON.stringify(this.gold));
  },

  // Clear inventory
  resetInventory() {
    this.inventory = [];
    this.saveState();
  },

  // Add earned gold
  addGold(amount) {
    this.gold += amount;
    this.saveState();
  },
});
