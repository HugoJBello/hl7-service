
// Generated typescript code of HL7v 2.4 ACC  (Accident)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7AccidentV4Document = mongoose.Document & HL7AccidentV4I

const HL7AccidentV4Schema = new mongoose.Schema({
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
  
  }, { timestamps: true });
  
export interface HL7AccidentV4I extends Segment{
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
  
  }
  export const HL7AccidentV4 = mongoose.model<HL7AccidentV4Document> ("HL7AccidentV4", HL7AccidentV4Schema);

