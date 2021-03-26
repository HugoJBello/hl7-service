
// Generated typescript code of HL7v 2.7 ORG  (Practitioner Organization Unit Segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PractitionerOrganizationUnitSegmentV7Document = mongoose.Document & HL7PractitionerOrganizationUnitSegmentV7I

const HL7PractitionerOrganizationUnitSegmentV7Schema = new mongoose.Schema({
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
  
export interface HL7PractitionerOrganizationUnitSegmentV7I extends Segment{
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
  export const HL7PractitionerOrganizationUnitSegmentV7 = mongoose.model<HL7PractitionerOrganizationUnitSegmentV7Document> ("HL7PractitionerOrganizationUnitSegmentV7", HL7PractitionerOrganizationUnitSegmentV7Schema);

