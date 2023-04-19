import User from "src/models/user"

export const getProductsService = async () => {
    const users = await User.findAll();
    return users;
}
