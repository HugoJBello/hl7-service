
// Generated typescript code of HL7v 2.2 PRA  (Practitioner Detail)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PractitionerDetailV2Document = mongoose.Document & HL7PractitionerDetailV2I

const HL7PractitionerDetailV2Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  praPrimaryKeyValue: String,
  practitionerGroup: Array(String),
  practitionerCategory: Array(String),
  providerBilling: String,
  specialty: Array(String),
  practitionerIdNumbers: Array(String),
  privileges: Array(String),
  
  }, { timestamps: true });
  
export interface HL7PractitionerDetailV2I extends Segment{
  praPrimaryKeyValue: string
  practitionerGroup: string[]
  practitionerCategory: string[]
  providerBilling: string
  specialty: string[]
  practitionerIdNumbers: string[]
  privileges: string[]
  
  }
  export const HL7PractitionerDetailV2 = mongoose.model<HL7PractitionerDetailV2Document> ("HL7PractitionerDetailV2", HL7PractitionerDetailV2Schema);

