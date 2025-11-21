import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Package, Truck, CheckCircle, Clock } from "lucide-react";

const MyOrders = () => {
  const orders = [
    {
      id: "ORD-001",
      date: "2025-01-15",
      status: "delivered",
      total: 429.98,
      items: [
        { name: "Wireless Earbuds Pro", quantity: 1, price: 129.99 },
        { name: "Gaming Mouse Pro", quantity: 2, price: 89.99 },
      ],
    },
    {
      id: "ORD-002",
      date: "2025-01-18",
      status: "shipped",
      total: 549.99,
      items: [{ name: "Monitor 27\" 4K", quantity: 1, price: 549.99 }],
    },
    {
      id: "ORD-003",
      date: "2025-01-20",
      status: "processing",
      total: 229.98,
      items: [
        { name: "Portable SSD 2TB", quantity: 1, price: 249.99 },
        { name: "USB-C Hub 7-in-1", quantity: 1, price: 69.99 },
      ],
    },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case "delivered":
        return <CheckCircle className="h-5 w-5" />;
      case "shipped":
        return <Truck className="h-5 w-5" />;
      case "processing":
        return <Clock className="h-5 w-5" />;
      default:
        return <Package className="h-5 w-5" />;
    }
  };

  const getStatusVariant = (status) => {
    switch (status) {
      case "delivered":
        return "default";
      case "shipped":
        return "secondary";
      case "processing":
        return "outline";
      default:
        return "outline";
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">My Orders</h1>
          <p className="text-muted-foreground">Track and manage your orders</p>
        </div>

        {orders.length === 0 ? (
          <Card className="p-12 text-center">
            <Package className="h-24 w-24 mx-auto text-muted-foreground mb-4" />
            <h2 className="text-2xl font-bold mb-2">No orders yet</h2>
            <p className="text-muted-foreground mb-6">Start shopping to see your orders here</p>
            <Button>Browse Products</Button>
          </Card>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <Card key={order.id} className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6 gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold">Order {order.id}</h3>
                      <Badge variant={getStatusVariant(order.status)} className="gap-1">
                        {getStatusIcon(order.status)}
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">
                      Placed on {new Date(order.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                  <div className="text-left lg:text-right">
                    <p className="text-sm text-muted-foreground mb-1">Total Amount</p>
                    <p className="text-2xl font-bold text-primary">
                      ${order.total.toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  {order.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-t"
                    >
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-muted-foreground">
                          Quantity: {item.quantity}
                        </p>
                      </div>
                      <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1">
                    View Details
                  </Button>
                  {order.status === "delivered" && (
                    <Button variant="outline" className="flex-1">
                      Reorder
                    </Button>
                  )}
                  {order.status === "shipped" && (
                    <Button className="flex-1">Track Order</Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyOrders;
