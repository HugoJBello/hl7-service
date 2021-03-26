
// Generated typescript code of HL7v 2.2 ACC  (Accident)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7AccidentV2Document = mongoose.Document & HL7AccidentV2I

const HL7AccidentV2Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  accidentDateTime: Date,
  accidentCode: String,
  accidentLocation: String,
  
  }, { timestamps: true });
  
export interface HL7AccidentV2I extends Segment{
  accidentDateTime: Date
  accidentCode: string
  accidentLocation: string
  
  }
  export const HL7AccidentV2 = mongoose.model<HL7AccidentV2Document> ("HL7AccidentV2", HL7AccidentV2Schema);

