
// Generated typescript code of HL7v 2.6 AFF  (Professional Affiliation)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ProfessionalAffiliationV6Document = mongoose.Document & HL7ProfessionalAffiliationV6I

const HL7ProfessionalAffiliationV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDAFF: String,
  professionalOrganization: String,
  professionalOrganizationAddress: String,
  professionalOrganizationAffiliationDateRange: Array(String),
  professionalAffiliationAdditionalInformation: String,
  
  }, { timestamps: true });
  
export interface HL7ProfessionalAffiliationV6I extends Segment{
  setIDAFF: string
  professionalOrganization: string
  professionalOrganizationAddress: string
  professionalOrganizationAffiliationDateRange: string[]
  professionalAffiliationAdditionalInformation: string
  
  }
  export const HL7ProfessionalAffiliationV6 = mongoose.model<HL7ProfessionalAffiliationV6Document> ("HL7ProfessionalAffiliationV6", HL7ProfessionalAffiliationV6Schema);

