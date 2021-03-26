
// Generated typescript code of HL7v 2.7 ACC  (Accident)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7AccidentV7Document = mongoose.Document & HL7AccidentV7I

const HL7AccidentV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  accidentDateTime: String,
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
  degreeOfPatientLiability: Number,
  
  }, { timestamps: true });
  
export interface HL7AccidentV7I extends Segment{
  accidentDateTime: string
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
  degreeOfPatientLiability: number
  
  }
  export const HL7AccidentV7 = mongoose.model<HL7AccidentV7Document> ("HL7AccidentV7", HL7AccidentV7Schema);

