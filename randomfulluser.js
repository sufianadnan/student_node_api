
import { faker } from '@faker-js/faker/locale/en_CA';
import axios from "axios";

const apiUrl = 'http://localhost:5001/api/fullstudent/';

const generateRandomUser = () => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  return {
    id: Math.floor(Math.random() * 10000),
    name: `${firstName} ${lastName}`,
    address: `${faker.location.streetAddress()}`,
    mobile: faker.phone.number(),
    city:  faker.location.city(),
    province: faker.location.state(),
    country: faker.location.country(),
    postal: faker.location.zipCode(),
    email: faker.internet.email()
  };
};

const addUsers = async () => {
  try {
    for (let i = 0; i < 2; i++) {
      const user = generateRandomUser();
      await axios.post(apiUrl, user);
      console.log(`User added: ${user.name}`);
    }
    console.log('All users added successfully.');
  } catch (error) {
    console.error('Error adding users:', error.message);
  }
};

addUsers();
