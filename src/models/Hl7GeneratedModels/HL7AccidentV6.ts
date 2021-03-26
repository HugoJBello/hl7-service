
// Generated typescript code of HL7v 2.6 ACC  (Accident)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7AccidentV6Document = mongoose.Document & HL7AccidentV6I

const HL7AccidentV6Schema = new mongoose.Schema({
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
  
  }, { timestamps: true });
  
export interface HL7AccidentV6I extends Segment{
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
  
  }
  export const HL7AccidentV6 = mongoose.model<HL7AccidentV6Document> ("HL7AccidentV6", HL7AccidentV6Schema);

