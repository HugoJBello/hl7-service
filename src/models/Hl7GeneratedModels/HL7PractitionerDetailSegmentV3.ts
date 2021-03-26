
// Generated typescript code of HL7v 2.3 PRA  (Practitioner detail segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PractitionerDetailSegmentV3Document = mongoose.Document & HL7PractitionerDetailSegmentV3I

const HL7PractitionerDetailSegmentV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  pRAPrimaryKeyValue: String,
  practionerGroup: Array(String),
  practionerCategory: Array(String),
  providerBilling: String,
  specialty: Array(String),
  practitionerIDNumbers: Array(String),
  privileges: Array(String),
  dateEnteredPractice: String,
  
  }, { timestamps: true });
  
export interface HL7PractitionerDetailSegmentV3I extends Segment{
  pRAPrimaryKeyValue: string
  practionerGroup: string[]
  practionerCategory: string[]
  providerBilling: string
  specialty: string[]
  practitionerIDNumbers: string[]
  privileges: string[]
  dateEnteredPractice: string
  
  }
  export const HL7PractitionerDetailSegmentV3 = mongoose.model<HL7PractitionerDetailSegmentV3Document> ("HL7PractitionerDetailSegmentV3", HL7PractitionerDetailSegmentV3Schema);

