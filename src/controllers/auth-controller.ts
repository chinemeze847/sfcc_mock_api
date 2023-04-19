import { Request, Response } from "express";
import { accessToken, login, register } from "../services/auth-service";
import User from "src/models/user";
import bcrypt from 'bcrypt';

export const getAccessToken = async (req: Request, res: Response) => {
  try {
    const token = await accessToken();
    res.send({ token });
  } catch (error) {
    //This error is sent if either owner name or repo name is not correct
    return res.status(404).json({
      message: "Not Found",
      status: 404,
    });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const token = await login(req.body.email, req.body.password);
    if(token != "User Not Found")
      res.send({token});
    res.send({message:token});
  } catch (error) {
    //This error is sent if either owner name or repo name is not correct
    return error;
  }
};

export const registerUser = async (req: Request, res: Response) => {
  try {
    const newUser = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
    };

    const user = await register(newUser);
    console.log({ user });
    res.json({ user });
  } catch (error) {
    //This error is sent if either owner name or repo name is not correct
    return error;
  }
};
