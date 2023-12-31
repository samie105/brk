const UserModel = require("../mongodbConnectMigration");

// Define the migration logic
const runMigration = async () => {
  try {
    // Find all documents in the 'users' collection
    const users = await UserModel.find();

    // Update each user document according to the new schema
    for (const user of users) {
      user.planBonus = 0;
      await user.save();
    }

    console.log("Migration completed successfully");
  } catch (error) {
    console.error("Error during migration:", error);
  }
};
runMigration();
