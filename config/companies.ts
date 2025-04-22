export interface Company {
  id: string;
  name: string;
  logo: string;
}

export interface Order {
  orderId: number;
  customerName: string;
  amount: string;
  status: 'Delivered' | 'Pending' | 'Cancelled' | 'In Transit' | 'Shipped' | 'Preparing';
}

export const companies: Record<string, Company> = {
  daraz: {
    id: 'daraz',
    name: 'Daraz',
    logo: '/logos/daraz.svg'
  },
  foodpanda: {
    id: 'foodpanda',
    name: 'FoodPanda',
    logo: '/logos/foodpanda.svg'
  }
};

export const sampleOrders: Record<string, Order[]> = {
  daraz: [
    { orderId: 101, customerName: "Alice", amount: "$120", status: "Delivered" },
    { orderId: 102, customerName: "Bob", amount: "$85", status: "Shipped" },
    { orderId: 103, customerName: "Cathy", amount: "$150", status: "Pending" },
    { orderId: 104, customerName: "Daniel", amount: "$200", status: "Cancelled" },
    { orderId: 105, customerName: "Eva", amount: "$95", status: "Delivered" },
    { orderId: 106, customerName: "Frank", amount: "$50", status: "In Transit" },
    { orderId: 107, customerName: "Grace", amount: "$120", status: "Shipped" },
    { orderId: 108, customerName: "Hank", amount: "$300", status: "Delivered" },
    { orderId: 109, customerName: "Ivy", amount: "$130", status: "Pending" },
    { orderId: 110, customerName: "Jack", amount: "$180", status: "Delivered" },
    { orderId: 111, customerName: "Ken", amount: "$140", status: "In Transit" },
    { orderId: 112, customerName: "Lily", amount: "$160", status: "Shipped" },
    { orderId: 113, customerName: "Mia", amount: "$90", status: "Delivered" },
    { orderId: 114, customerName: "Nina", amount: "$110", status: "Cancelled" },
    { orderId: 115, customerName: "Oscar", amount: "$220", status: "Shipped" },
    { orderId: 116, customerName: "Paul", amount: "$210", status: "In Transit" },
    { orderId: 117, customerName: "Quincy", amount: "$100", status: "Delivered" },
    { orderId: 118, customerName: "Rachel", amount: "$80", status: "Pending" },
    { orderId: 119, customerName: "Sam", amount: "$75", status: "Delivered" },
    { orderId: 120, customerName: "Tom", amount: "$250", status: "Shipped" },
    { orderId: 121, customerName: "Uma", amount: "$120", status: "Delivered" },
    { orderId: 122, customerName: "Vera", amount: "$145", status: "Pending" },
    { orderId: 123, customerName: "Will", amount: "$230", status: "Cancelled" },
    { orderId: 124, customerName: "Xander", amount: "$260", status: "In Transit" },
    { orderId: 125, customerName: "Yara", amount: "$160", status: "Shipped" },
    { orderId: 126, customerName: "Zoe", amount: "$200", status: "Delivered" },
    { orderId: 127, customerName: "Ava", amount: "$95", status: "Pending" },
    { orderId: 128, customerName: "Ben", amount: "$55", status: "Delivered" },
    { orderId: 129, customerName: "Clara", amount: "$220", status: "Shipped" },
    { orderId: 130, customerName: "David", amount: "$180", status: "In Transit" }
  ],
  foodpanda: [
    { orderId: 201, customerName: "Charlie", amount: "$50", status: "Delivered" },
    { orderId: 202, customerName: "David", amount: "$25", status: "Preparing" },
    { orderId: 203, customerName: "Irene", amount: "$45", status: "Cancelled" },
    { orderId: 204, customerName: "James", amount: "$70", status: "Shipped" },
    { orderId: 205, customerName: "Kim", amount: "$30", status: "Delivered" },
    { orderId: 206, customerName: "Larry", amount: "$85", status: "Pending" },
    { orderId: 207, customerName: "Mona", amount: "$60", status: "Delivered" },
    { orderId: 208, customerName: "Nate", amount: "$90", status: "In Transit" },
    { orderId: 209, customerName: "Olivia", amount: "$110", status: "Delivered" },
    { orderId: 210, customerName: "Paul", amount: "$135", status: "Cancelled" },
    { orderId: 211, customerName: "Quincy", amount: "$100", status: "Shipped" },
    { orderId: 212, customerName: "Rachel", amount: "$65", status: "Delivered" },
    { orderId: 213, customerName: "Steve", amount: "$180", status: "Pending" },
    { orderId: 214, customerName: "Tom", amount: "$50", status: "Delivered" },
    { orderId: 215, customerName: "Uma", amount: "$70", status: "Shipped" },
    { orderId: 216, customerName: "Vera", amount: "$40", status: "Delivered" },
    { orderId: 217, customerName: "Will", amount: "$85", status: "In Transit" },
    { orderId: 218, customerName: "Xander", amount: "$95", status: "Cancelled" },
    { orderId: 219, customerName: "Yara", amount: "$75", status: "Shipped" },
    { orderId: 220, customerName: "Zoe", amount: "$110", status: "Delivered" },
    { orderId: 221, customerName: "Alex", amount: "$50", status: "Pending" },
    { orderId: 222, customerName: "Beth", amount: "$125", status: "In Transit" },
    { orderId: 223, customerName: "Carl", amount: "$135", status: "Delivered" },
    { orderId: 224, customerName: "Dana", amount: "$60", status: "Shipped" },
    { orderId: 225, customerName: "Eve", amount: "$150", status: "Cancelled" },
    { orderId: 226, customerName: "Fay", amount: "$75", status: "Delivered" },
    { orderId: 227, customerName: "Gil", amount: "$60", status: "In Transit" },
    { orderId: 228, customerName: "Holly", amount: "$90", status: "Pending" }
  ]
}; 