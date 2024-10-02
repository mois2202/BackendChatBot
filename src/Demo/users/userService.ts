import User from './userModel'; // Example user model

class UserService {
    // Create a new user
    async createUser(data: any) {
        return await User.create(data);  // Assuming Sequelize/Mongoose
    }

    // Get all users
    async getAllUsers() {
        return await User.findAll();  // Get all users (using Sequelize ORM)
    }

    // Get a user by ID
    async getUserById(id: string) {
        return await User.findByPk(id);  // Find user by primary key
    }

    // Update a user by ID
    async updateUser(id: string, data: any) {
        const user = await User.findByPk(id);
        if (user) {
            return await user.update(data);
        }
        return null;
    }

    // Delete a user by ID
    async deleteUser(id: string) {
        const user = await User.findByPk(id);
        if (user) {
            await user.destroy();
            return user;
        }
        return null;
    }
}

export default new UserService();
