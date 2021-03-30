import express from "express";
import logger from "morgan";
import * as path from "path";
import mongoose from 'mongoose';
require('dotenv').config();
mongoose.connect(process.env["MONGODB_URL"], {useNewUrlParser: true, useUnifiedTopology: true});

import { errorHandler, errorNotFoundHandler } from "./middlewares/errorHandler";

// Routes
import { index } from "./routes/index";
import { hl7ADTA31MessageSenderController } from "./controllers/hl7ADTA31MessageSenderController";
import { hl7ADTA40MessageSenderController } from "./controllers/hl7ADTA40MessageSenderController";
import bodyParser from 'body-parser';
import { hl7ORUR01MessageSenderController } from "./controllers/hl7ORUR01MessageSenderController";
import { hl7OMG019MessageSenderController } from "./controllers/hl7OMG019MessageSenderController";

export const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");

app.use(logger("dev"));

app.use(express.static(path.join(__dirname, "../public")));
app.use(bodyParser.json());

app.use("/", index);

app.use("/adt-a31", hl7ADTA31MessageSenderController);
app.use("/adt-a40", hl7ADTA40MessageSenderController);
app.use("/omg-o19", hl7OMG019MessageSenderController);
app.use("/oru-r01", hl7ORUR01MessageSenderController);

app.use(errorNotFoundHandler);
app.use(errorHandler);
