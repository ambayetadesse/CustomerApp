
export class Restaurant {
    id: number;
    name: string;
    location: any;
    type: string;
    startWorkingHour: string;
    endWorkingHour: string;
    areaSpace: number;
    phoneNumber: string;
    gm: string;
    contactPerson: string;
    email: string;
    photo: string;
    accountId: number;
    status: string;
    categoryId: any;
    resId: string;
}
export class RestMenu {
    id: string;
    restaurantId: string; // Restaurant
    name: string; //
    price: number;
    cookingTime: string;
    deliveryTime: string;
    avaliable: string;
    favourite: string;
}
export class Driver {
    id: number;
    fullName: string;
    address: string;
    phoneNumber: string;
    vehicleId: string; // Restaurant
    photo: string;
    initialLocationofDay: string;
}
export class DriverHistory {
    id: number;
    driverId: string;
    location: string;
    type: string; // acceptannce,pickup,on rest deliv,drop to customer,waiting on rest,waiting on delivery,
    timestamp: string;
}
export class Food {
    id: number;
    name: string;
    price: number;
    description: string;
    cookingTime: string;  // cooctime lrft 15min
    deliveryTime: string;
    picture: string;
    type: string; // food or drink or other
    categoryId: number;
    restaurantId: string;
    foodId: string;
}
export class FoodContent {
    id: number;
    foodId: string; // Restaurant
    fontentName: string;
    fontentDescription: string;
    qty: number;
}
export class Vehicle {
    id: number;
    plate: string;
    type: string;
    model: string;
    motorNumber: number;
}
export class Location {
    id: number;
    latitude: number;
    longitude: number;
    description: string;
}
export class Account {
    id: number;
    email: string;
    phonenumber: string;
    password: string;
    fullName: string;
    locationId: number; // Restaurant
    active: string;
    type: string;
    photo: string;
}
export class Order {
    id: number;
    restaurantId: string; // Restaurant
    dateTime: string;
    deliveryTime: string;
    customer: string; //
    location: any; // Restaurant
    orderStatuses: any; // picked,start moving, delivered(finished)
    total: number;
    driver: string; // Restaurant
    vehicle: string; // Restaurant
    orderLocation: string; // or droupLocation
    restaurantStatuses: any; // order recived, start cooking, cooked, ready to service
    customerStatus: string; // order cancelled,
    statuses: any;
}
export class OrderDetail {
    id: number;
    orderId: number;
    foodId: number; // Restaurant
    qty: number;
    price: number;
}
export class userRole {
    id: number;
    funId: string;
    userId: string;
    remark: string;
}
export class functionality {
    id: number;
    compName: string;
    description: string;
    remark: string;
}
export class Category {
    id: number;
    categoryName: string;
    description: string;
    image: string;
}
export class message {
    id: string
    sessionId: string
    msgcontent: string
    date: number
    userId: string
    driverId: string
}
export class Cart {
    id: string;
    userId: string
    restaurantId: string; // Restaurant
    token: string;//payment gateway
    status: any //(New , Cart ,checkout , paid , complete and Abandoned(canceled))
    createdAt: Date
    updatedAt: Date;
    content: string;
}
export class Cart_Item {
    id: string;
    foodId: string;//foreign key from product table
    cartId: string;//foriegn key from cart table
    price: number;
    discount: number;
    quantity: number;
    createdAt: Date;
    updatedAt: Date;
    content: string
}