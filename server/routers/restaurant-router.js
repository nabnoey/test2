import express from "express";
import restaurantController from "../controllers/restaurant.controller.js";
import authMiddleware from "../middleware/authJwt.js"; // import default


const router = express.Router();

// POST /api/v1/restaurant
router.post("/",authMiddleware.verifyToken,authMiddleware.isModOrAdmin,authMiddleware.isAdmin, restaurantController.create);

// GET all restaurants
router.get("/", authMiddleware.verifyToken,restaurantController.getAll);

// GET by ID with auth middleware
router.get("/:id",authMiddleware.verifyToken, restaurantController.getById);

// UPDATE restaurant
router.put("/:id",authMiddleware.isAdmin, restaurantController.update);

// DELETE restaurant
router.delete("/:id",authMiddleware.verifyToken,authMiddleware.isAdmin, restaurantController.deleteById);

export default router;
