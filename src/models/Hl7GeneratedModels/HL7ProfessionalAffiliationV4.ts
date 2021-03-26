
// Generated typescript code of HL7v 2.4 AFF  (Professional Affiliation)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ProfessionalAffiliationV4Document = mongoose.Document & HL7ProfessionalAffiliationV4I

const HL7ProfessionalAffiliationV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDAFF: String,
  professionalOrganization: String,
  professionalOrganizationAddress: String,
  professionalOrganizationAffiliationDateRange: Array(String),
  professionalAffiliationAdditionalInformation: String,
  
  }, { timestamps: true });
  
export interface HL7ProfessionalAffiliationV4I extends Segment{
  setIDAFF: string
  professionalOrganization: string
  professionalOrganizationAddress: string
  professionalOrganizationAffiliationDateRange: string[]
  professionalAffiliationAdditionalInformation: string
  
  }
  export const HL7ProfessionalAffiliationV4 = mongoose.model<HL7ProfessionalAffiliationV4Document> ("HL7ProfessionalAffiliationV4", HL7ProfessionalAffiliationV4Schema);

