
/**
==================================================
 TypeScript Learning Notes
 Topic: Object, Type Alias & Interface
==================================================

Author: Your Name
File: object-type-alias-interface.ts

Conversation Reference: https://chatgpt.com/share/6ae826e9-e260-83e8-a049-33b72fbd96ce
*/

// ================================================
// 1. OBJECT
// ================================================

const userr: {
  name: string;
  age: number;
  email: string;
  isActive: boolean;
  phone?: string;
} = {
  name: "Rahim",
  age: 25,
  email: "rahim@gmail.com",
  isActive: true,
};

// Access Object Properties
console.log(userr.name);
console.log(userr.age);

// Optional Property
console.log(userr.phone);

// Readonly Object Property
const personn: {
  readonly id: number;
  name: string;
} = {
  id: 101,
  name: "Karim",
};

personn.name = "Hasan";
// personn.id = 102; // Error


// ================================================
// 2. TYPE ALIAS
// ================================================

// Basic Type Alias
type User = {
  name: string;
  age: number;
  email: string;
};

const user11: User = {
  name: "Rahim",
  age: 25,
  email: "rahim@gmail.com",
};

const user22: User = {
  name: "Karim",
  age: 30,
  email: "karim@gmail.com",
};


// Primitive Type Alias
type UserName = string;
type UserAge = number;

const myName: UserName = "Rahim";
const myAge: UserAge = 25;


// Union Type
type Status = "success" | "error" | "loading";

let currentStatus: Status = "success";

currentStatus = "loading";
// currentStatus = "pending"; // Error


// Intersection Type
type Person = {
  name: string;
};

type Employee = {
  salary: number;
};

type EmployeeDetails = Person & Employee;

const employeee: EmployeeDetails = {
  name: "Rahim",
  salary: 30000,
};


// ================================================
// 3. INTERFACE
// ================================================

// Basic Interface
interface IUser {
  name: string;
  age: number;
  email: string;
}

const myUser: IUser = {
  name: "Rahim",
  age: 25,
  email: "rahim@gmail.com",
};


// Optional Property
interface Student {
  name: string;
  age: number;
  phone?: string;
}

const studentt: Student = {
  name: "Karim",
  age: 22,
};


// Readonly Property
interface Account {
  readonly id: number;
  username: string;
}

const account: Account = {
  id: 101,
  username: "rahim123",
};

account.username = "karim123";
// account.id = 102; // Error


// ================================================
// 4. INTERFACE EXTENDS
// ================================================

interface IPerson {
  name: string;
  age: number;
}

interface IEmployee extends IPerson {
  salary: number;
  position: string;
}

const developer: IEmployee = {
  name: "Rahim",
  age: 25,
  salary: 50000,
  position: "Frontend Developer",
};


// ================================================
// 5. INTERFACE DECLARATION MERGING
// ================================================

interface Customer {
  name: string;
}

interface Customer {
  age: number;
  email: string;
}

const customerr: Customer = {
  name: "Hasan",
  age: 28,
  email: "hasan@gmail.com",
};


// ================================================
// 6. FUNCTION TYPE ALIAS
// ================================================

type AddFunction = (a: number, b: number) => number;

const add: AddFunction = (a, b) => {
  return a + b;
};

console.log(add(10, 20));


// ================================================
// 7. REAL-LIFE E-COMMERCE EXAMPLE
// ================================================

interface EUser {
  id: number;
  name: string;
  email: string;
}

type Productt = {
  id: number;
  title: string;
  price: number;
};

type OrderStatus = "pending" | "success" | "cancelled";

interface Order {
  user: EUser;
  product: Productt;
  status: OrderStatus;
}

const order: Order = {
  user: {
    id: 1,
    name: "Rahim",
    email: "rahim@gmail.com",
  },

  product: {
    id: 101,
    title: "Laptop",
    price: 75000,
  },

  status: "success",
};

console.log(order);


// ================================================
// 8. TYPE ALIAS VS INTERFACE
// ================================================

/*
TYPE ALIAS:
- Uses type keyword.
- Supports primitive types.
- Supports Union Types.
- Supports Intersection Types.
- Cannot use Declaration Merging.

INTERFACE:
- Uses interface keyword.
- Mainly describes object structures.
- Supports extends.
- Supports Declaration Merging.
- Can be implemented by classes.

NOTE:
Both Type Alias and Interface can describe
object structures.
*/


// ================================================
// 9. QUICK SUMMARY
// ================================================

/*
OBJECT:
Stores data using key-value pairs.

TYPE ALIAS:
Creates a custom name for a type using type.

INTERFACE:
Defines the structure of an object using interface.

OPTIONAL PROPERTY:
Uses ? to make a property optional.

READONLY:
Prevents reassignment of a property.

UNION:
Uses | to allow multiple possible types.

INTERSECTION:
Uses & to combine multiple types.

EXTENDS:
Allows an interface to inherit another interface.
*/


// ================================================
// 10. CONVERSATION LINK
// ================================================

/*
To add this conversation to GitHub:

1. Open this ChatGPT conversation.
2. Click the Share button.
3. Copy the conversation link.
4. Paste the link below.
*/

const CONVERSATION_URL = "PASTE_YOUR_CHATGPT_SHARE_LINK_HERE";

console.log("Learning Notes:", CONVERSATION_URL);


// ================================================
// OBJECT WITH FUNCTION (METHOD)
// ================================================

const studentttt: {
  name: string;
  age: number;
  greet: () => void;
  getAge: () => number;
} = {
  name: "Rahim",
  age: 22,

  greet: function () {
    console.log(`Hello, I am ${this.name}`);
  },

  getAge: function () {
    return this.age;
  },
};

studentttt.greet();

console.log("My Age:", studentttt.getAge());


// ================================================
// OBJECT METHOD WITH PARAMETERS
// ================================================

const calculator: {
  add: (a: number, b: number) => number;
} = {
  add: function (a, b) {
    return a + b;
  },
};

console.log("Addition:", calculator.add(10, 20));


// ================================================
// NESTED OBJECT TYPE / NESTED TYPE ALIAS
// ================================================

// Address Type
type Address = {
  holdingNumber: number;
  street: string;
  city: string;
};

// Person Type
type Personnn = {
  name: string;
  age: number;
  address: Address;
};

// Person Object
const personnn: Personnn = {
  name: "Rahim",
  age: 25,

  address: {
    holdingNumber: 101,
    street: "Dhanmondi Road",
    city: "Dhaka",
  },
};

// Access Nested Object Properties
console.log(personnn.name);
console.log(personnn.address.holdingNumber);
console.log(personnn.address.street);
console.log(personnn.address.city);


// ================================================
// NESTED OBJECT WITH MULTIPLE TYPES
// ================================================

type Country = {
  name: string;
  code: string;
};

type Locationnn = {
  city: string;
  country: Country;
};

type Userrr = {
  name: string;
  location: Locationnn;
};

const userrr: Userrr = {
  name: "Karim",

  location: {
    city: "Dhaka",

    country: {
      name: "Bangladesh",
      code: "BD",
    },
  },
};

console.log(userrr.location.country.name);


// ================================================
// NESTED OBJECT WITH OPTIONAL PROPERTY
// ================================================

type StudentAddress = {
  street: string;
  postalCode?: number;
};

type Studenttt = {
  name: string;
  address: StudentAddress;
};

const studenttt: Studenttt = {
  name: "Hasan",

  address: {
    street: "Mirpur",
  },
};




// ================================================
// END OF NOTES
// Happy Learning TypeScript!
// ================================================
