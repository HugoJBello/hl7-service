
// Generated typescript code of HL7v 2.4 FAC  (Facility)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7FacilityV4Document = mongoose.Document & HL7FacilityV4I

const HL7FacilityV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  facilityIDFAC: String,
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
  
export interface HL7FacilityV4I extends Segment{
  facilityIDFAC: string
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
  export const HL7FacilityV4 = mongoose.model<HL7FacilityV4Document> ("HL7FacilityV4", HL7FacilityV4Schema);

