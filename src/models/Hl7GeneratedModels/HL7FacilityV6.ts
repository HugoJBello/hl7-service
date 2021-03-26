
// Generated typescript code of HL7v 2.6 FAC  (Facility)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7FacilityV6Document = mongoose.Document & HL7FacilityV6I

const HL7FacilityV6Schema = new mongoose.Schema({
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
  
export interface HL7FacilityV6I extends Segment{
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
  export const HL7FacilityV6 = mongoose.model<HL7FacilityV6Document> ("HL7FacilityV6", HL7FacilityV6Schema);

