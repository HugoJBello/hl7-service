
// Generated typescript code of HL7v 2.8 ACC  (Accident)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7AccidentV8Document = mongoose.Document & HL7AccidentV8I

const HL7AccidentV8Schema = new mongoose.Schema({
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
  accidentIdentifier: Array(String),
  
  }, { timestamps: true });
  
export interface HL7AccidentV8I extends Segment{
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
  accidentIdentifier: string[]
  
  }
  export const HL7AccidentV8 = mongoose.model<HL7AccidentV8Document> ("HL7AccidentV8", HL7AccidentV8Schema);

