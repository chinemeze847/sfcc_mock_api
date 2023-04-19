import { IncomingHttpHeaders } from "http";
import User, { UserType } from "src/models/user";
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

export const accessToken = async () => {
  return generateAccessToken();
};

function generateAccessToken() {
  return jwt.sign({ username: "guest" }, process.env.GUEST_TOKEN_SECRET, {
    expiresIn: "1000s",
  });
}

export const getTokenFromHeaders = (headers: IncomingHttpHeaders) => {
  const header = headers.authorization as string;

  if (!header) return header;
  return header.split(" ")[1];
};

export const register = async (user: UserType) => {
  try {
    var hashedpassword = await bcrypt.hash(user.password,10);
    user.password = hashedpassword;
    return User.create(user);
  } catch (err) {
    return err;
  }
};

export const login = async (email : string, password : string) => {
    const  user = await User.findOne({
        where: {email},
        order: [["id", "DESC"]],
      });
  
      if (user == null) {
        return 'User Not Found';
      }
  
      if(await bcrypt.compare(password, user.password)) {
          return generateAccessToken();
        } else {
          return 'Not Allowed';
      } 
}
