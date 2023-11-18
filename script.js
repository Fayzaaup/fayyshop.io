let totalAmount = 0;
let purchasedItems = [];

function addToTotal(itemName, amount) {
    totalAmount += amount;
    purchasedItems.push(itemName);
    updatePurchaseList();
    document.getElementById('totalAmount').textContent = 'Rp ' + totalAmount.toLocaleString();
}

function clearTotal() {
    totalAmount = 0;
    purchasedItems = [];
    updatePurchaseList();
    document.getElementById('totalAmount').textContent = 'Rp ' + totalAmount.toLocaleString();
}

function updatePurchaseList() {
    const purchaseList = document.getElementById('purchaseList');
    purchaseList.innerHTML = '';

    purchasedItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        listItem.className = 'purchase-list-item';
        purchaseList.appendChild(listItem);
    });
}