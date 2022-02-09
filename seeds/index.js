const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('-------Database synced-------');
  
  await seedUsers();
  console.log('-------Users seeded--------');

  await seedPosts();
  console.log('--------Posts seeded-------');

  process.exit(0);
};

seedAll();
