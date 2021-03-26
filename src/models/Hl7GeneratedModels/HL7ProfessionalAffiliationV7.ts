
// Generated typescript code of HL7v 2.7 AFF  (Professional Affiliation)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ProfessionalAffiliationV7Document = mongoose.Document & HL7ProfessionalAffiliationV7I

const HL7ProfessionalAffiliationV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdAff: String,
  professionalOrganization: String,
  professionalOrganizationAddress: String,
  professionalOrganizationAffiliationDateRange: Array(String),
  professionalAffiliationAdditionalInformation: String,
  
  }, { timestamps: true });
  
export interface HL7ProfessionalAffiliationV7I extends Segment{
  setIdAff: string
  professionalOrganization: string
  professionalOrganizationAddress: string
  professionalOrganizationAffiliationDateRange: string[]
  professionalAffiliationAdditionalInformation: string
  
  }
  export const HL7ProfessionalAffiliationV7 = mongoose.model<HL7ProfessionalAffiliationV7Document> ("HL7ProfessionalAffiliationV7", HL7ProfessionalAffiliationV7Schema);

