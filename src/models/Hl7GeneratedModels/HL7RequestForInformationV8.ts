
// Generated typescript code of HL7v 2.8 RFI  (Request For Information)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7RequestForInformationV8Document = mongoose.Document & HL7RequestForInformationV8I

const HL7RequestForInformationV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  requestDate: String,
  responseDueDate: String,
  patientConsent: String,
  dateAdditionalInformationWasSubmitted: String,
  
  }, { timestamps: true });
  
export interface HL7RequestForInformationV8I extends Segment{
  requestDate: string
  responseDueDate: string
  patientConsent: string
  dateAdditionalInformationWasSubmitted: string
  
  }
  export const HL7RequestForInformationV8 = mongoose.model<HL7RequestForInformationV8Document> ("HL7RequestForInformationV8", HL7RequestForInformationV8Schema);

