
// Generated typescript code of HL7v 2.8 AUT  (Authorization Information)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7AuthorizationInformationV8Document = mongoose.Document & HL7AuthorizationInformationV8I

const HL7AuthorizationInformationV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  authorizingPayorPlanId: String,
  authorizingPayorCompanyId: String,
  authorizingPayorCompanyName: String,
  authorizationEffectiveDate: String,
  authorizationExpirationDate: String,
  authorizationIdentifier: String,
  reimbursementLimit: String,
  requestedNumberOfTreatments: String,
  authorizedNumberOfTreatments: String,
  processDate: String,
  requestedDisciplines: Array(String),
  authorizedDisciplines: Array(String),
  authorizationReferralType: String,
  approvalStatus: String,
  plannedTreatmentStopDate: String,
  clinicalService: String,
  reasonText: String,
  numberOfAuthorizedTreatmentsUnits: String,
  numberOfUsedTreatmentsUnits: String,
  numberOfScheduleTreatmentsUnits: String,
  encounterType: String,
  remainingBenefitAmount: String,
  authorizedProvider: String,
  authorizedHealthProfessional: String,
  sourceText: String,
  sourceDate: String,
  sourcePhone: String,
  comment: String,
  actionCode: String,
  
  }, { timestamps: true });
  
export interface HL7AuthorizationInformationV8I extends Segment{
  authorizingPayorPlanId: string
  authorizingPayorCompanyId: string
  authorizingPayorCompanyName: string
  authorizationEffectiveDate: string
  authorizationExpirationDate: string
  authorizationIdentifier: string
  reimbursementLimit: string
  requestedNumberOfTreatments: string
  authorizedNumberOfTreatments: string
  processDate: string
  requestedDisciplines: string[]
  authorizedDisciplines: string[]
  authorizationReferralType: string
  approvalStatus: string
  plannedTreatmentStopDate: string
  clinicalService: string
  reasonText: string
  numberOfAuthorizedTreatmentsUnits: string
  numberOfUsedTreatmentsUnits: string
  numberOfScheduleTreatmentsUnits: string
  encounterType: string
  remainingBenefitAmount: string
  authorizedProvider: string
  authorizedHealthProfessional: string
  sourceText: string
  sourceDate: string
  sourcePhone: string
  comment: string
  actionCode: string
  
  }
  export const HL7AuthorizationInformationV8 = mongoose.model<HL7AuthorizationInformationV8Document> ("HL7AuthorizationInformationV8", HL7AuthorizationInformationV8Schema);

