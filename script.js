const calculateProfit = () => {
    const ItemBZBuyPrice = parseFloat(document.getElementById('bz-buy-price').value);
    const ItemNPCSellPrice = parseFloat(document.getElementById('npc-sell-price').value);
    
    if (isNaN(ItemBZBuyPrice) || isNaN(ItemNPCSellPrice)) {
        alert('Please enter valid numbers for both prices.');
        return;
    }

    const NPCCoinsSellLimit = 200000000; // Daily NPC sell limit
    const Quantity = NPCCoinsSellLimit / ItemNPCSellPrice; // How many times you can sell a certain item
    const CoinsProfitPerDay = Quantity * (ItemNPCSellPrice - ItemBZBuyPrice); // Profit per day
    const CoinsRequirementPerDay = Quantity * ItemBZBuyPrice; // Coins required to do the flip daily

    // Function to format large numbers into readable strings (e.g., 1,000,000 -> 1m)
    const formatNumber = (num) => {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(2).replace(/\.00$/, '') + 'm';
        }
        if (num >= 1000) {
            return (num / 1000).toFixed(2).replace(/\.00$/, '') + 'k';
        }
        return num.toString();
    };

    document.getElementById('profit').textContent = `Profit per day: ${formatNumber(CoinsProfitPerDay)}`;
    document.getElementById('coins-required').textContent = `Coins required per day: ${formatNumber(CoinsRequirementPerDay)}`;

    document.getElementById('result').classList.remove('hidden');
};

const resetCalculator = () => {
    document.getElementById('bz-buy-price').value = '';
    document.getElementById('npc-sell-price').value = '';
    document.getElementById('result').classList.add('hidden');
    document.getElementById('profit').textContent = '';
    document.getElementById('coins-required').textContent = '';
}
