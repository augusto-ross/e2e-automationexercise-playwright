export interface UserData {
  name: string;
  email: string;
  password: string;
}

export function generateUser(): UserData {
  const timestamp = Date.now();

  return {
    name: `Test User ${timestamp}`,
    email: `test.user.${timestamp}@example.com`,
    password: `Password@${timestamp}`,
  };
}
