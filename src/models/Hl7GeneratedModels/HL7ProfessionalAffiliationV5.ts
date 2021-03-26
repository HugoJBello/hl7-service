
// Generated typescript code of HL7v 2.5 AFF  (Professional Affiliation)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ProfessionalAffiliationV5Document = mongoose.Document & HL7ProfessionalAffiliationV5I

const HL7ProfessionalAffiliationV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDAFF: String,
  professionalOrganization: String,
  professionalOrganizationAddress: String,
  professionalOrganizationAffiliationDateRange: Array(String),
  professionalAffiliationAdditionalInformation: String,
  
  }, { timestamps: true });
  
export interface HL7ProfessionalAffiliationV5I extends Segment{
  setIDAFF: string
  professionalOrganization: string
  professionalOrganizationAddress: string
  professionalOrganizationAffiliationDateRange: string[]
  professionalAffiliationAdditionalInformation: string
  
  }
  export const HL7ProfessionalAffiliationV5 = mongoose.model<HL7ProfessionalAffiliationV5Document> ("HL7ProfessionalAffiliationV5", HL7ProfessionalAffiliationV5Schema);

