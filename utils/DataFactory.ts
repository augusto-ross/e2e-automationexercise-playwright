export interface UserData {
  name: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  address: string;
  state: string;
  city: string;
  zipcode: string;
  mobileNumber: string;
}

export function generateUser(): UserData {
  const timestamp = Date.now();

  return {
    name: `Test User ${timestamp}`,
    email: `test.user.${timestamp}@example.com`,
    password: `Password@${timestamp}`,
    firstName: 'John',
    lastName: 'Doe',
    address: '123 Test Street',
    state: 'California',
    city: 'Los Angeles',
    zipcode: '90001',
    mobileNumber: '5551234567',
  };
}
