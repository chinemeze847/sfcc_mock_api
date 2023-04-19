import { IncomingHttpHeaders } from "http";
import { Request, Response, NextFunction } from "express";
const jwt = require("jsonwebtoken");

function getTokenFromHeaders(headers: IncomingHttpHeaders) {
  const header = headers.authorization as string;

  if (!header) return header;

  return header.split(" ")[1];
}

export const tokenGuard = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token =
    getTokenFromHeaders(req.headers) || req.query.token || req.body.token || "";
  const hasAccess = verifyToken(token, req, res, next);

  console.log("has access : ", hasAccess);

  if (!hasAccess) {
    res.status(403).send({ message: "Access Denied" });
  }

  next();
  return;
};

const verifyToken = (
  token: string,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  var isToken: Boolean = false;
  if (!token) {isToken = false};

  jwt.verify(
    token,
    process.env.GUEST_TOKEN_SECRET as string,
    (err: Error, decoded: {}) => {
      if (err) return isToken;
      isToken = true;
    }
  );
  return isToken;
};
