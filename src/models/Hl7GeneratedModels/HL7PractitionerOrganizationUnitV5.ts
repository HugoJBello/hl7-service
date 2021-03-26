
// Generated typescript code of HL7v 2.5 ORG  (Practitioner Organization Unit)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PractitionerOrganizationUnitV5Document = mongoose.Document & HL7PractitionerOrganizationUnitV5I

const HL7PractitionerOrganizationUnitV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDORG: String,
  organizationUnitCode: String,
  organizationUnitTypeCode: String,
  primaryOrgUnitIndicator: String,
  practitionerOrgUnitIdentifier: String,
  healthCareProviderTypeCode: String,
  healthCareProviderClassificationCode: String,
  healthCareProviderAreaOfSpecializationCode: String,
  effectiveDateRange: String,
  employmentStatusCode: String,
  boardApprovalIndicator: String,
  primaryCarePhysicianIndicator: String,
  
  }, { timestamps: true });
  
export interface HL7PractitionerOrganizationUnitV5I extends Segment{
  setIDORG: string
  organizationUnitCode: string
  organizationUnitTypeCode: string
  primaryOrgUnitIndicator: string
  practitionerOrgUnitIdentifier: string
  healthCareProviderTypeCode: string
  healthCareProviderClassificationCode: string
  healthCareProviderAreaOfSpecializationCode: string
  effectiveDateRange: string
  employmentStatusCode: string
  boardApprovalIndicator: string
  primaryCarePhysicianIndicator: string
  
  }
  export const HL7PractitionerOrganizationUnitV5 = mongoose.model<HL7PractitionerOrganizationUnitV5Document> ("HL7PractitionerOrganizationUnitV5", HL7PractitionerOrganizationUnitV5Schema);

