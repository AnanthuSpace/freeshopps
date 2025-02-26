// Table 1: Activity History
export const activityColumns = [
    { accessorKey: "user", header: "User" },
    { accessorKey: "action", header: "Action" },
    { accessorKey: "dateTime", header: "Date & Time" },
    {
        id: "actions",
        header: "Actions",
        cell: () => <MoreHorizontal className="w-4 h-4" />,
    },
];

export const activityData = [
    { id: 1, user: "Yeray Rosalos", action: "Login", dateTime: "July 3, 2023" },
    { id: 2, user: "Alan Robert", action: "Booked Product", dateTime: "July 3, 2023" },
];

// Table 2: Orders
export const ordersColumns = [
    { accessorKey: "orderId", header: "Order ID" },
    { accessorKey: "customer", header: "Customer" },
    { accessorKey: "status", header: "Status" },
];

export const ordersData = [
    { id: 1, orderId: "#001", customer: "John Doe", status: "Shipped" },
    { id: 2, orderId: "#002", customer: "Jane Smith", status: "Pending" },
];

// Table 3: Users
export const usersColumns = [
    { accessorKey: "name", header: "Name" },
    { accessorKey: "email", header: "Email" },
    { accessorKey: "role", header: "Role" },
];

export const usersData = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin" },
    { id: 2, name: "Bob Brown", email: "bob@example.com", role: "User" },
];

// Table 4: Transactions
export const transactionsColumns = [
    { accessorKey: "transactionId", header: "Transaction ID" },
    { accessorKey: "amount", header: "Amount" },
    { accessorKey: "date", header: "Date" },
];

export const transactionsData = [
    { id: 1, transactionId: "T-123", amount: "$500", date: "Feb 15, 2024" },
    { id: 2, transactionId: "T-124", amount: "$200", date: "Feb 16, 2024" },
];

// Table 5: Inventory
export const inventoryColumns = [
    { accessorKey: "product", header: "Product" },
    { accessorKey: "quantity", header: "Quantity" },
    { accessorKey: "status", header: "Status" },
];

export const inventoryData = [
    { id: 1, product: "Laptop", quantity: 10, status: "In Stock" },
    { id: 2, product: "Mouse", quantity: 5, status: "Low Stock" },
];
