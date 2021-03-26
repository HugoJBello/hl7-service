
// Generated typescript code of HL7v 2.3 FAC  (Facility)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7FacilityV3Document = mongoose.Document & HL7FacilityV3I

const HL7FacilityV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  facilityID: String,
  facilityType: String,
  facilityAddress: String,
  facilityTelecommunication: String,
  contactPerson: Array(String),
  contactTitle: Array(String),
  contactAddress: Array(String),
  contactTelecommunication: Array(String),
  signatureAuthority: String,
  signatureAuthorityTitle: String,
  signatureAuthorityAddress: String,
  signatureAuthorityTelecommunication: String,
  
  }, { timestamps: true });
  
export interface HL7FacilityV3I extends Segment{
  facilityID: string
  facilityType: string
  facilityAddress: string
  facilityTelecommunication: string
  contactPerson: string[]
  contactTitle: string[]
  contactAddress: string[]
  contactTelecommunication: string[]
  signatureAuthority: string
  signatureAuthorityTitle: string
  signatureAuthorityAddress: string
  signatureAuthorityTelecommunication: string
  
  }
  export const HL7FacilityV3 = mongoose.model<HL7FacilityV3Document> ("HL7FacilityV3", HL7FacilityV3Schema);

