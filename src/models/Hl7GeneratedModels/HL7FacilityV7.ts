
// Generated typescript code of HL7v 2.7 FAC  (Facility)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7FacilityV7Document = mongoose.Document & HL7FacilityV7I

const HL7FacilityV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  facilityIdfac: String,
  facilityType: String,
  facilityAddress: Array(String),
  facilityTelecommunication: String,
  contactPerson: Array(String),
  contactTitle: Array(String),
  contactAddress: Array(String),
  contactTelecommunication: Array(String),
  signatureAuthority: Array(String),
  signatureAuthorityTitle: String,
  signatureAuthorityAddress: Array(String),
  signatureAuthorityTelecommunication: String,
  
  }, { timestamps: true });
  
export interface HL7FacilityV7I extends Segment{
  facilityIdfac: string
  facilityType: string
  facilityAddress: string[]
  facilityTelecommunication: string
  contactPerson: string[]
  contactTitle: string[]
  contactAddress: string[]
  contactTelecommunication: string[]
  signatureAuthority: string[]
  signatureAuthorityTitle: string
  signatureAuthorityAddress: string[]
  signatureAuthorityTelecommunication: string
  
  }
  export const HL7FacilityV7 = mongoose.model<HL7FacilityV7Document> ("HL7FacilityV7", HL7FacilityV7Schema);

