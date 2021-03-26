
// Generated typescript code of HL7v 2.7 PV2  (Patient Visit - Additional Information)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PatientVisitAdditionalInformationV7Document = mongoose.Document & HL7PatientVisitAdditionalInformationV7I

const HL7PatientVisitAdditionalInformationV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  priorPendingLocation: String,
  accommodationCode: String,
  admitReason: String,
  transferReason: String,
  patientValuables: Array(String),
  patientValuablesLocation: String,
  visitUserCode: Array(String),
  expectedAdmitDateTime: String,
  expectedDischargeDateTime: String,
  estimatedLengthOfInpatientStay: Number,
  actualLengthOfInpatientStay: Number,
  visitDescription: String,
  referralSourceCode: Array(String),
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
  expectedSurgeryDateAndTime: String,
  militaryPartnershipCode: String,
  militaryNonavailabilityCode: String,
  newbornBabyIndicator: String,
  babyDetainedIndicator: String,
  modeOfArrivalCode: String,
  recreationalDrugUseCode: Array(String),
  admissionLevelOfCareCode: String,
  precautionCode: Array(String),
  patientConditionCode: String,
  livingWillCode: String,
  organDonorCode: String,
  advanceDirectiveCode: Array(String),
  patientStatusEffectiveDate: String,
  expectedLoaReturnDateTime: String,
  expectedPreadmissionTestingDateTime: String,
  notifyClergyCode: Array(String),
  advanceDirectiveLastVerifiedDate: String,
  
  }, { timestamps: true });
  
export interface HL7PatientVisitAdditionalInformationV7I extends Segment{
  priorPendingLocation: string
  accommodationCode: string
  admitReason: string
  transferReason: string
  patientValuables: string[]
  patientValuablesLocation: string
  visitUserCode: string[]
  expectedAdmitDateTime: string
  expectedDischargeDateTime: string
  estimatedLengthOfInpatientStay: number
  actualLengthOfInpatientStay: number
  visitDescription: string
  referralSourceCode: string[]
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
  expectedSurgeryDateAndTime: string
  militaryPartnershipCode: string
  militaryNonavailabilityCode: string
  newbornBabyIndicator: string
  babyDetainedIndicator: string
  modeOfArrivalCode: string
  recreationalDrugUseCode: string[]
  admissionLevelOfCareCode: string
  precautionCode: string[]
  patientConditionCode: string
  livingWillCode: string
  organDonorCode: string
  advanceDirectiveCode: string[]
  patientStatusEffectiveDate: string
  expectedLoaReturnDateTime: string
  expectedPreadmissionTestingDateTime: string
  notifyClergyCode: string[]
  advanceDirectiveLastVerifiedDate: string
  
  }
  export const HL7PatientVisitAdditionalInformationV7 = mongoose.model<HL7PatientVisitAdditionalInformationV7Document> ("HL7PatientVisitAdditionalInformationV7", HL7PatientVisitAdditionalInformationV7Schema);

