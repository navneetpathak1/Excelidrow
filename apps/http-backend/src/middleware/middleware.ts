import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common";

export function middleware(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
        return res.status(401).json({ message: "Authorization header missing" });
    }

    // Remove "Bearer " if present
    const token = authHeader.replace(/^Bearer\s+/i, "").trim();

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as { userId: number };
        // @ts-ignore: attach userId to request
        req.userId = decoded.userId;
        next();
    } catch (e) {
        return res.status(403).json({ message: "Invalid or expired token" });
    }
}
