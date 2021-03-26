
// Generated typescript code of HL7v 2.3 PV2  (Patient visit - additional information)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PatientVisitAdditionalInformationV3Document = mongoose.Document & HL7PatientVisitAdditionalInformationV3I

const HL7PatientVisitAdditionalInformationV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  priorPendingLocation: String,
  accommodationCode: String,
  admitReason: String,
  transferReason: String,
  patientValuables: Array(String),
  patientValuablesLocation: String,
  visitUserCode: String,
  expectedAdmitDate: Date,
  expectedDischargeDate: Date,
  estimatedLengthOfInpatientStay: Number,
  actualLengthOfInpatientStay: Number,
  visitDescription: String,
  referralSourceCode: String,
  previousServiceDate: String,
  employmentIllnessRelatedIndicator: String,
  purgeStatusCode: String,
  purgeStatusDate: String,
  specialProgramCode: String,
  retentionIndicator: String,
  expectedNumberOfInsurancePlans: Number,
  visitPublicityCode: String,
  visitProtectionIndicator: String,
  clinicOrganizationName: Array(String),
  patientStatusCode: String,
  visitPriorityCode: String,
  previousTreatmentDate: String,
  expectedDischargeDisposition: String,
  signatureOnFileDate: String,
  firstSimilarIllnessDate: String,
  patientChargeAdjustmentCode: String,
  recurringServiceCode: String,
  billingMediaCode: String,
  expectedSurgeryDateTime: Date,
  militaryPartnershipCode: String,
  militaryNonAvailabiltiyCode: String,
  newbornBabyIndicator: String,
  babyDetainedIndicator: String,
  
  }, { timestamps: true });
  
export interface HL7PatientVisitAdditionalInformationV3I extends Segment{
  priorPendingLocation: string
  accommodationCode: string
  admitReason: string
  transferReason: string
  patientValuables: string[]
  patientValuablesLocation: string
  visitUserCode: string
  expectedAdmitDate: Date
  expectedDischargeDate: Date
  estimatedLengthOfInpatientStay: number
  actualLengthOfInpatientStay: number
  visitDescription: string
  referralSourceCode: string
  previousServiceDate: string
  employmentIllnessRelatedIndicator: string
  purgeStatusCode: string
  purgeStatusDate: string
  specialProgramCode: string
  retentionIndicator: string
  expectedNumberOfInsurancePlans: number
  visitPublicityCode: string
  visitProtectionIndicator: string
  clinicOrganizationName: string[]
  patientStatusCode: string
  visitPriorityCode: string
  previousTreatmentDate: string
  expectedDischargeDisposition: string
  signatureOnFileDate: string
  firstSimilarIllnessDate: string
  patientChargeAdjustmentCode: string
  recurringServiceCode: string
  billingMediaCode: string
  expectedSurgeryDateTime: Date
  militaryPartnershipCode: string
  militaryNonAvailabiltiyCode: string
  newbornBabyIndicator: string
  babyDetainedIndicator: string
  
  }
  export const HL7PatientVisitAdditionalInformationV3 = mongoose.model<HL7PatientVisitAdditionalInformationV3Document> ("HL7PatientVisitAdditionalInformationV3", HL7PatientVisitAdditionalInformationV3Schema);

