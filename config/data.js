const companies = {
  daraz: {
    id: "daraz",
    name: "Daraz",
    logo: "/logos/daraz.svg",
  },
  foodpanda: {
    id: "foodpanda",
    name: "FoodPanda",
    logo: "/logos/foodpanda.svg",
  },
};

const orders = {
  daraz: [
    {
      orderId: 101,
      customerName: "Alice",
      amount: "$120",
      status: "Delivered",
    },
    { orderId: 102, customerName: "Bob", amount: "$85", status: "Shipped" },
    { orderId: 103, customerName: "Cathy", amount: "$150", status: "Pending" },
    {
      orderId: 104,
      customerName: "Daniel",
      amount: "$200",
      status: "Cancelled",
    },
    { orderId: 105, customerName: "Eva", amount: "$95", status: "Delivered" },
    {
      orderId: 106,
      customerName: "Frank",
      amount: "$50",
      status: "In Transit",
    },
    { orderId: 107, customerName: "Grace", amount: "$120", status: "Shipped" },
    { orderId: 108, customerName: "Hank", amount: "$300", status: "Delivered" },
    { orderId: 109, customerName: "Ivy", amount: "$130", status: "Pending" },
    { orderId: 110, customerName: "Jack", amount: "$180", status: "Delivered" },
  ],
  foodpanda: [
    {
      orderId: 201,
      customerName: "Charlie",
      amount: "$50",
      status: "Delivered",
    },
    { orderId: 202, customerName: "David", amount: "$25", status: "Preparing" },
    { orderId: 203, customerName: "Irene", amount: "$45", status: "Cancelled" },
    { orderId: 204, customerName: "James", amount: "$70", status: "Shipped" },
    { orderId: 205, customerName: "Kim", amount: "$30", status: "Delivered" },
    { orderId: 206, customerName: "Larry", amount: "$85", status: "Pending" },
    { orderId: 207, customerName: "Mona", amount: "$60", status: "Delivered" },
    { orderId: 208, customerName: "Nate", amount: "$90", status: "In Transit" },
    {
      orderId: 209,
      customerName: "Olivia",
      amount: "$110",
      status: "Delivered",
    },
    { orderId: 210, customerName: "Paul", amount: "$135", status: "Cancelled" },
  ],
};

module.exports = { companies, orders };
