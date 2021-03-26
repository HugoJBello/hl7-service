
// Generated typescript code of HL7v 2.6 PRA  (Practitioner Detail)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PractitionerDetailV6Document = mongoose.Document & HL7PractitionerDetailV6I

const HL7PractitionerDetailV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  primaryKeyValuePRA: String,
  practitionerGroup: Array(String),
  practitionerCategory: Array(String),
  providerBilling: String,
  specialty: Array(String),
  practitionerIDNumbers: Array(String),
  privileges: Array(String),
  dateEnteredPractice: String,
  institution: String,
  dateLeftPractice: String,
  governmentReimbursementBillingEligibility: Array(String),
  setIDPRA: String,
  
  }, { timestamps: true });
  
export interface HL7PractitionerDetailV6I extends Segment{
  primaryKeyValuePRA: string
  practitionerGroup: string[]
  practitionerCategory: string[]
  providerBilling: string
  specialty: string[]
  practitionerIDNumbers: string[]
  privileges: string[]
  dateEnteredPractice: string
  institution: string
  dateLeftPractice: string
  governmentReimbursementBillingEligibility: string[]
  setIDPRA: string
  
  }
  export const HL7PractitionerDetailV6 = mongoose.model<HL7PractitionerDetailV6Document> ("HL7PractitionerDetailV6", HL7PractitionerDetailV6Schema);

