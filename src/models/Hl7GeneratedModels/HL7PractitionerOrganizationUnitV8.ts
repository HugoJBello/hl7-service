
// Generated typescript code of HL7v 2.8 ORG  (Practitioner Organization Unit)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PractitionerOrganizationUnitV8Document = mongoose.Document & HL7PractitionerOrganizationUnitV8I

const HL7PractitionerOrganizationUnitV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdOrg: String,
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
  costCenterCode: Array(String),
  
  }, { timestamps: true });
  
export interface HL7PractitionerOrganizationUnitV8I extends Segment{
  setIdOrg: string
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
  costCenterCode: string[]
  
  }
  export const HL7PractitionerOrganizationUnitV8 = mongoose.model<HL7PractitionerOrganizationUnitV8Document> ("HL7PractitionerOrganizationUnitV8", HL7PractitionerOrganizationUnitV8Schema);

