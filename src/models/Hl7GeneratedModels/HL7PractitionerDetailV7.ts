
// Generated typescript code of HL7v 2.7 PRA  (Practitioner Detail)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PractitionerDetailV7Document = mongoose.Document & HL7PractitionerDetailV7I

const HL7PractitionerDetailV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  primaryKeyValuePra: String,
  practitionerGroup: Array(String),
  practitionerCategory: Array(String),
  providerBilling: String,
  specialty: Array(String),
  practitionerIdNumbers: Array(String),
  privileges: Array(String),
  dateEnteredPractice: String,
  institution: String,
  dateLeftPractice: String,
  governmentReimbursementBillingEligibility: Array(String),
  setIdPra: String,
  
  }, { timestamps: true });
  
export interface HL7PractitionerDetailV7I extends Segment{
  primaryKeyValuePra: string
  practitionerGroup: string[]
  practitionerCategory: string[]
  providerBilling: string
  specialty: string[]
  practitionerIdNumbers: string[]
  privileges: string[]
  dateEnteredPractice: string
  institution: string
  dateLeftPractice: string
  governmentReimbursementBillingEligibility: string[]
  setIdPra: string
  
  }
  export const HL7PractitionerDetailV7 = mongoose.model<HL7PractitionerDetailV7Document> ("HL7PractitionerDetailV7", HL7PractitionerDetailV7Schema);

