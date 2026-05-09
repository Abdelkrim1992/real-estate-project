import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createServer } from "http";
import propertiesRouter from "./routes/properties.js";
import authRouter from "./routes/auth.js";
import inquiriesRouter from "./routes/inquiries.js";
import reviewsRouter from "./routes/reviews.js";
import messagesRouter from "./routes/messages.js";
import settingsRouter from "./routes/settings.js";
import notificationsRouter from "./routes/notifications.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { initWebSocketServer } from "./wsServer.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Create HTTP server wrapping Express
const server = createServer(app);

// Attach WebSocket server to the HTTP server
initWebSocketServer(server);

// Middleware
app.use(cors({
    origin: function (origin, callback) {
        const allowedOrigins: string[] = [
            "http://localhost:3000",
        ];

        if (process.env.FRONTEND_URL) {
            allowedOrigins.push(process.env.FRONTEND_URL);
        }

        // Allow any origin if in development
        if (process.env.NODE_ENV !== "production" || !origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            console.warn("CORS blocked origin:", origin);
            callback(new Error(`Not allowed by CORS: ${origin}`));
        }
    },
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
}));
app.use(express.json({ limit: '10mb' }));

// Health check
app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.get("/", (_req, res) => {
    res.send("Welcome to the Luxora Real Estate API Host.");
});

// Routes
app.use("/api/properties", propertiesRouter);
app.use("/api/auth", authRouter);
app.use("/api/inquiries", inquiriesRouter);
app.use("/api/reviews", reviewsRouter);
app.use("/api/messages", messagesRouter);
app.use("/api/settings", settingsRouter);
app.use("/api/notifications", notificationsRouter);

// Error handler
app.use(errorHandler);

// Use server.listen instead of app.listen for WebSocket support
server.listen(PORT, () => {
    console.log(`🏠 Luxora API running at http://localhost:${PORT}`);
    console.log(`   Health check: http://localhost:${PORT}/api/health`);
    console.log(`📡 WebSocket server ready on ws://localhost:${PORT}`);
});

export default app;

