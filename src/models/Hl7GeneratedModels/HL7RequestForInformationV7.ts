
// Generated typescript code of HL7v 2.7 RFI  (Request For Information)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7RequestForInformationV7Document = mongoose.Document & HL7RequestForInformationV7I

const HL7RequestForInformationV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  requestDate: String,
  responseDueDate: String,
  patientConsent: String,
  dateAdditionalInformationWasSubmitted: String,
  
  }, { timestamps: true });
  
export interface HL7RequestForInformationV7I extends Segment{
  requestDate: string
  responseDueDate: string
  patientConsent: string
  dateAdditionalInformationWasSubmitted: string
  
  }
  export const HL7RequestForInformationV7 = mongoose.model<HL7RequestForInformationV7Document> ("HL7RequestForInformationV7", HL7RequestForInformationV7Schema);

