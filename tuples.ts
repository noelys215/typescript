const stuff: (number | string)[] = ['a', 'b'];

const color: [number, number, number] = [1, 2, 3];

type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, 'Ok'];

type Car = [string];

const vehicle: Car = ['Toyota'];

// ENUM
enum OrderStatus {
	PENDING,
	SHIPPED,
	DELIVERED,
	RETURNED,
}

const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
	return status === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.RETURNED);
