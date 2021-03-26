
// Generated typescript code of HL7v 2.8 AFF  (Professional Affiliation)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ProfessionalAffiliationV8Document = mongoose.Document & HL7ProfessionalAffiliationV8I

const HL7ProfessionalAffiliationV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdAff: String,
  professionalOrganization: String,
  professionalOrganizationAddress: String,
  professionalOrganizationAffiliationDateRange: Array(String),
  professionalAffiliationAdditionalInformation: String,
  
  }, { timestamps: true });
  
export interface HL7ProfessionalAffiliationV8I extends Segment{
  setIdAff: string
  professionalOrganization: string
  professionalOrganizationAddress: string
  professionalOrganizationAffiliationDateRange: string[]
  professionalAffiliationAdditionalInformation: string
  
  }
  export const HL7ProfessionalAffiliationV8 = mongoose.model<HL7ProfessionalAffiliationV8Document> ("HL7ProfessionalAffiliationV8", HL7ProfessionalAffiliationV8Schema);

