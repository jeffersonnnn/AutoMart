import queryDB from "./dbQuery";
import Password from "../utils/password";

class User {
    static async findByEmail(email) {
        const sql = "SELECT * FROM users WHERE email = $1;";
        const params = [email];

        const query = queryDB(sql, params);

        return query;
    }

    static async createUser(user) {
        const password = Password.hashPassword(user.password);
        const { email, firstName, lastName, address } = user;
        const sql =
            "INSERT INTO users (firstname, lastname, email, address, password) VALUES($1, $2, $3, $4, $5) RETURNING *";
        const params = [firstName, lastName, email, address, password];
        const query = queryDB(sql, params);
        return query;
    }
}

export default User;
