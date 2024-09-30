import React from 'react'

const DeliveryOrder = () => {
    const [customers, setCustomers] = useState([
        {
          id: 1,
          firstName: "Juan",
          lastName: "Pérez",
          orders: [
            {
              id: 1,
              products: [
                { 
                  id: 1, 
                  product: { name: "Oklahoma", price: 8.99 }, 
                  quantity: 2 
                }, // 2 x Oklahoma
                { 
                  id: 2, 
                  product: { name: "Veggie Burger", price: 8.99 }, 
                  quantity: 1 
                }, // 1 x Veggie Burger
              ],
              total: 8.99 * 2 + 8.99 * 1,
              dateTime: "2024-09-29T12:30:00",
              status: "cooking",
              orderType: "delivery",
            },
          ,
            {
              id: 2,
              products: [
                { 
                  id: 1, 
                  product: { name: "Cheddar Bacon Fries", price: 5.99 }, 
                  quantity: 2 
                }, // 2 x Oklahoma
                { 
                  id: 2, 
                  product: { name: "Veggie Burger", price: 8.99 }, 
                  quantity: 1 
                }, // 1 x Veggie Burger
              ],
              total: 8.99 * 2 + 8.99 * 1,
              dateTime: "2024-09-29T12:30:00",
              status: "cooking",
              orderType: "delivery",
            },
          ],
        },
        {
          id: 2,
          firstName: "María",
          lastName: "Gómez",
          orders: [
            {
              id: 2,
              products: [
                { 
                  id: 3, 
                  product: { name: "American", price: 7.49 }, 
                  quantity: 1 
                }, // 1 x American
                { 
                  id: 4, 
                  product: { name: "Cheddar Bacon Fries", price: 5.99 }, 
                  quantity: 2 
                }, // 2 x Cheddar Bacon Fries
                { 
                  id: 5, 
                  product: { name: "Coca", price: 1.99 }, 
                  quantity: 1 
                }, // 1 x Coca
              ],
              total: 7.49 * 1 + 5.99 * 2 + 1.99 * 1,
              dateTime: "2024-09-29T12:45:00",
              status: "ready for delivery",
              orderType: "takeout",
            },
          ],
        },
        {
          id: 3,
          firstName: "Luis",
          lastName: "Martínez",
          orders: [
            {
              id: 3,
              products: [
                { 
                  id: 6, 
                  product: { name: "Voyager", price: 9.99 }, 
                  quantity: 1 
                }, // 1 x Voyager
                { 
                  id: 7, 
                  product: { name: "Cheeseburger", price: 10.49 }, 
                  quantity: 1 
                }, // 1 x Cheeseburger
                { 
                  id: 8, 
                  product: { name: "Coca", price: 1.99 }, 
                  quantity: 3 
                }, // 3 x Coca
              ],
              total: 9.99 * 1 + 10.49 * 1 + 1.99 * 3,
              dateTime: "2024-09-29T13:00:00",
              status: "ready for delivery",
              orderType: "dine-in",
            },
          ],
        },
        {
          id: 4,
          firstName: "Carlos",
          lastName: "Sánchez",
          orders: [
            {
              id: 4,
              products: [
                { 
                  id: 9, 
                  product: { name: "Oklahoma", price: 8.99 }, 
                  quantity: 1 
                }, // 1 x Oklahoma
                { 
                  id: 10, 
                  product: { name: "Coca", price: 1.99 }, 
                  quantity: 2 
                }, // 2 x Coca
              ],
              total: 8.99 * 1 + 1.99 * 2,
              dateTime: "2024-09-29T14:00:00",
              status: "delivered",
              orderType: "delivery",
            },
          ],
        },
        {
          id: 5,
          firstName: "Ana",
          lastName: "López",
          orders: [
            {
              id: 5,
              products: [
                { 
                  id: 11, 
                  product: { name: "American", price: 7.49 }, 
                  quantity: 2 
                }, // 2 x American
                { 
                  id: 12, 
                  product: { name: "Cheeseburger", price: 10.49 }, 
                  quantity: 1 
                }, // 1 x Cheeseburger
              ],
              total: 7.49 * 2 + 10.49 * 1,
              dateTime: "2024-09-29T15:30:00",
              status: "delivered",
              orderType: "dine-in",
            },
          ],
        },
        {
          id: 6,
          firstName: "Pedro",
          lastName: "Ramírez",
          orders: [
            {
              id: 6,
              products: [
                { 
                  id: 13, 
                  product: { name: "Oklahoma", price: 8.99 }, 
                  quantity: 1 
                }, // 1 x Oklahoma
                { 
                  id: 14, 
                  product: { name: "Voyager", price: 9.99 }, 
                  quantity: 1 
                }, // 1 x Voyager
                { 
                  id: 15, 
                  product: { name: "Pepsi", price: 1.99 }, 
                  quantity: 2 
                }, // 2 x Pepsi
              ],
              total: 8.99 * 1 + 9.99 * 1 + 1.99 * 2,
              dateTime: "2024-09-29T16:00:00",
              status: "delivered",
              orderType: "takeout",
            },
          ],
        },
      ]);
  return (
    <div className=''>
      
    </div>
  )
}

export default DeliveryOrder
