class VendingMachine {
    constructor(items) {
        this.items = items;
        this.sales = 0;
    }

    //methods
    // If the money given to the machine is less than the item cost return "Not enough money!"
    // If the quantity is 0  return "Item Name: Out of stock!". Where "Item Name" is the name of the item selected.
    // If an item is correctly selected return "Vending Item Name with 9.40 change.". 
    // Where "Item Name" is the name of the item and change if any given.
    // If an item is correctly selected and there is no change needed then return "Vending Item Name". 
    // If an invalid item is selected return "Invalid selection! : Money in vending machine = 11.20". Where 11.20 is the machines money float.
    // If a selection is successful then the quantity of the item in the vending machine should be updated, as well as the float.
    // Change is always given to 2 decimal places ie 7.00
    vend(inputCode, inputMoney) {
        let currentIndex;
        if (this.sales === 10) {
            console.log('fnkfl38s!ERROR@893infk');
            return;
        } else {
            //pick the item
            this.items.some(function(item, index) {
                currentIndex = index;
                return item.code === inputCode.toUpperCase();
            });

            //find if it's enough money or out of stock
            if (this.items[currentIndex].quantity === 0) {
                console.log(`${this.items[currentIndex].name}: Out of stock!`);
                return;
            } else if (inputMoney < this.items[currentIndex].price) {
                console.log("Not enough money!");
                return;
            } else if (inputMoney === this.items[currentIndex].price) {
                console.log(`Vending ${this.items[currentIndex].name}.`);
            } else {
                let change = inputMoney - this.items[currentIndex].price
                console.log(`${this.items[currentIndex].name} with ${change.toFixed(2)} change.`);
            }

        }

    };
    // //Every 10th sale, print "fnkfl38s!ERROR@893infk"
    //  every time vend() or addItem() is called. Calling repair() should fix this.   
    repair() {
        this.sales = 0;
    };
    // add individual new items to the vending machine, and if successful it should print out the message:
    //  "New product available: ITEM NAME for only ITEM COST" 
    //  however we have to make sure that our new items does not use the same code as an existing item 
    //  Otherwise we should print out a message
    //  "Sorry, but the item ITEM NAME is already using that code, please pick another";
    addItems(itemNew) {
        if (this.sales === 10) {
            console.log('fnkfl38s!ERROR@893infk');
            return;
        } else {
            const usedItem = this.items.some(function(item) {
                return item.code === itemNew.code.toUpperCase();
            });
            if (usedItem) {
                console.log(`Sorry, but the item ${itemNew.name} is already using that code, please pick another`);
            } else {
                this.items.push(usedItem);
                console.log(`New product available: ${itemNew.name} for only $ ${itemNew.price}.`);
            }
        }
    }

}
const vendingMachine1 = new VendingMachine([
    { name: "Smarties", code: "A01", quantity: 10, price: 1.6 },
    { name: "Caramilk Bar", code: "A02", quantity: 5, price: 1.3 },
    { name: "Dairy Milk", code: "A03", quantity: 1, price: 1.35 },
    { name: "Aero", code: "A04", quantity: 1, price: 0.25 },
    { name: "Protein Bar", code: "B01", quantity: 6, price: 2.25 },
    { name: "Salt & Vinager Chips", code: "B02", quantity: 10, price: 1.45 },
    { name: "Ketchup Chips", code: "B03", quantity: 3, price: 1.45 },
    { name: "Chocolate Cookies", code: "B04", quantity: 1, price: 0.45 },
    { name: "Gummy Bears", code: "C02", quantity: 300, price: 0.01 },
    { name: "Caramels", code: "C01", quantity: 0, price: 3.25 },
]);
vendingMachine1.vend("A01", 0.9);