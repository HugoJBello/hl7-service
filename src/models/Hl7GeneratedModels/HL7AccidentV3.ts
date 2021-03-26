
// Generated typescript code of HL7v 2.3 ACC  (Accident)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7AccidentV3Document = mongoose.Document & HL7AccidentV3I

const HL7AccidentV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  accidentDateTime: Date,
  accidentCode: String,
  accidentLocation: String,
  autoAccidentState: String,
  accidentJobRelatedIndicator: String,
  accidentDeathIndicator: String,
  
  }, { timestamps: true });
  
export interface HL7AccidentV3I extends Segment{
  accidentDateTime: Date
  accidentCode: string
  accidentLocation: string
  autoAccidentState: string
  accidentJobRelatedIndicator: string
  accidentDeathIndicator: string
  
  }
  export const HL7AccidentV3 = mongoose.model<HL7AccidentV3Document> ("HL7AccidentV3", HL7AccidentV3Schema);

