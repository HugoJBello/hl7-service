
// Generated typescript code of HL7v 2.6 RFI  (Request for Information)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7RequestForInformationV6Document = mongoose.Document & HL7RequestForInformationV6I

const HL7RequestForInformationV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  requestDate: String,
  responseDueDate: String,
  patientConsent: String,
  dateAdditionalInformationWasSubmitted: String,
  
  }, { timestamps: true });
  
export interface HL7RequestForInformationV6I extends Segment{
  requestDate: string
  responseDueDate: string
  patientConsent: string
  dateAdditionalInformationWasSubmitted: string
  
  }
  export const HL7RequestForInformationV6 = mongoose.model<HL7RequestForInformationV6Document> ("HL7RequestForInformationV6", HL7RequestForInformationV6Schema);

