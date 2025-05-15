interface User {
    id: number;
    email: string;
    username: string;
    name: {
      firstname: string;
      lastname: string;
    };
    address: {
      city: string;
      street: string;
      number: string;
      zipcode: string;
    };
    phone: string;
  }