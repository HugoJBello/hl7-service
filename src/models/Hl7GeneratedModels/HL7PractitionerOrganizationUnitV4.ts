
// Generated typescript code of HL7v 2.4 ORG  (Practitioner Organization Unit)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PractitionerOrganizationUnitV4Document = mongoose.Document & HL7PractitionerOrganizationUnitV4I

const HL7PractitionerOrganizationUnitV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDORG: String,
  organizationUnitCode: String,
  organizationUnitTypeCodeORG: String,
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
  
export interface HL7PractitionerOrganizationUnitV4I extends Segment{
  setIDORG: string
  organizationUnitCode: string
  organizationUnitTypeCodeORG: string
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
  export const HL7PractitionerOrganizationUnitV4 = mongoose.model<HL7PractitionerOrganizationUnitV4Document> ("HL7PractitionerOrganizationUnitV4", HL7PractitionerOrganizationUnitV4Schema);

