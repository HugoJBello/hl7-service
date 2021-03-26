
// Generated typescript code of HL7v 2.5 ACC  (Accident)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7AccidentV5Document = mongoose.Document & HL7AccidentV5I

const HL7AccidentV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  accidentDateTime: Date,
  accidentCode: String,
  accidentLocation: String,
  autoAccidentState: String,
  accidentJobRelatedIndicator: String,
  accidentDeathIndicator: String,
  enteredBy: String,
  accidentDescription: String,
  broughtInBy: String,
  policeNotifiedIndicator: String,
  accidentAddress: String,
  
  }, { timestamps: true });
  
export interface HL7AccidentV5I extends Segment{
  accidentDateTime: Date
  accidentCode: string
  accidentLocation: string
  autoAccidentState: string
  accidentJobRelatedIndicator: string
  accidentDeathIndicator: string
  enteredBy: string
  accidentDescription: string
  broughtInBy: string
  policeNotifiedIndicator: string
  accidentAddress: string
  
  }
  export const HL7AccidentV5 = mongoose.model<HL7AccidentV5Document> ("HL7AccidentV5", HL7AccidentV5Schema);

