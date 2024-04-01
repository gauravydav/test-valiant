
function calculateTotal(transactions){
  const totalSpent=new Map();
  
  transactions.forEach(transaction=>{
    if(totalSpent.has(transaction.category)){
      totalSpent.set(
        transaction.category,
        totalSpent.get(transaction.category)+transaction.price)
    }else{
      totalSpent.set(transaction.category,transaction.price)
    }
  })
  
  const totalSpentByCategory=[];
  totalSpent.forEach((totalSpent,category)=>{
    totalSpentByCategory.push({category,totalSpent})
  })
  return totalSpentByCategory
}


const transactions=[
  { id: 1, timestamp: 1656076800000, price: 10, category: 'Food', itemName: 'Pizza' },
   { id: 2, timestamp: 1656076800000, price: 20, category: 'Food', itemName: 'Burger' },
   { id: 3, timestamp: 1656076800000, price: 15, category: 'Clothes', itemName: 'T-shirt' },
   { id: 4, timestamp: 1656076800000, price: 30, category: 'Food', itemName: 'Sushi' },
   { id: 5, timestamp: 1656076800000, price: 25, category: 'Clothes', itemName: 'Jeans' }

  ];
  
  const totalSpentByCategory=calculateTotal(transactions)
  console.log(totalSpentByCategory)
