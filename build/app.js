"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const models_1 = require("./models");
const fairRoutes_1 = __importDefault(require("./routes/fairRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const commentRoutes_1 = __importDefault(require("./routes/commentRoutes"));
const app = (0, express_1.default)();
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const cors = require('cors');
app.use(cors());
// Fair Search Feature
// app.get("/", (req, res) => {
//     const { q } = req.query;
//     const keys = ["fairTitle", "fairCity"];
//     const search = (data) => {
//       return data.filter((fair) =>
//         keys.some((key) => fair[key].toLowerCase().includes(q))
//       );
//     };
//     q ? res.json(search(Fair).slice(0, 10)) : res.json(Fair.slice(0, 10));
//   });
// routes
app.use('/api/fairs', fairRoutes_1.default);
app.use('/api/comments', commentRoutes_1.default);
app.use('/api/users', userRoutes_1.default);
app.use((req, res, next) => {
    res.status(404).end();
});
// Syncing our database
models_1.db.sync({ alter: false, force: false }).then(() => {
    console.info("connected to the database!");
});
app.listen(3000);
