
// Generated typescript code of HL7v 2.7 PV1  (Patient Visit)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PatientVisitV7Document = mongoose.Document & HL7PatientVisitV7I

const HL7PatientVisitV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdPv1: String,
  patientClass: String,
  assignedPatientLocation: String,
  admissionType: String,
  preadmitNumber: String,
  priorPatientLocation: String,
  attendingDoctor: Array(String),
  referringDoctor: Array(String),
  consultingDoctor: Array(String),
  hospitalService: String,
  temporaryLocation: String,
  preadmitTestIndicator: String,
  readmissionIndicator: String,
  admitSource: String,
  ambulatoryStatus: Array(String),
  vipIndicator: String,
  admittingDoctor: Array(String),
  patientType: String,
  visitNumber: String,
  financialClass: Array(String),
  chargePriceIndicator: String,
  courtesyCode: String,
  creditRating: String,
  contractCode: Array(String),
  contractEffectiveDate: Array(String),
  contractAmount: Array(Number),
  contractPeriod: Array(Number),
  interestCode: String,
  transferToBadDebtCode: String,
  transferToBadDebtDate: String,
  badDebtAgencyCode: String,
  badDebtTransferAmount: Number,
  badDebtRecoveryAmount: Number,
  deleteAccountIndicator: String,
  deleteAccountDate: String,
  dischargeDisposition: String,
  dischargedToLocation: String,
  dietType: String,
  servicingFacility: String,
  bedStatus: String,
  accountStatus: String,
  pendingLocation: String,
  priorTemporaryLocation: String,
  admitDateTime: String,
  dischargeDateTime: String,
  currentPatientBalance: Number,
  totalCharges: Number,
  totalAdjustments: Number,
  totalPayments: Number,
  alternateVisitId: String,
  visitIndicator: String,
  otherHealthcareProvider: String,
  serviceEpisodeDescription: String,
  serviceEpisodeIdentifier: String,
  
  }, { timestamps: true });
  
export interface HL7PatientVisitV7I extends Segment{
  setIdPv1: string
  patientClass: string
  assignedPatientLocation: string
  admissionType: string
  preadmitNumber: string
  priorPatientLocation: string
  attendingDoctor: string[]
  referringDoctor: string[]
  consultingDoctor: string[]
  hospitalService: string
  temporaryLocation: string
  preadmitTestIndicator: string
  readmissionIndicator: string
  admitSource: string
  ambulatoryStatus: string[]
  vipIndicator: string
  admittingDoctor: string[]
  patientType: string
  visitNumber: string
  financialClass: string[]
  chargePriceIndicator: string
  courtesyCode: string
  creditRating: string
  contractCode: string[]
  contractEffectiveDate: string[]
  contractAmount: number[]
  contractPeriod: number[]
  interestCode: string
  transferToBadDebtCode: string
  transferToBadDebtDate: string
  badDebtAgencyCode: string
  badDebtTransferAmount: number
  badDebtRecoveryAmount: number
  deleteAccountIndicator: string
  deleteAccountDate: string
  dischargeDisposition: string
  dischargedToLocation: string
  dietType: string
  servicingFacility: string
  bedStatus: string
  accountStatus: string
  pendingLocation: string
  priorTemporaryLocation: string
  admitDateTime: string
  dischargeDateTime: string
  currentPatientBalance: number
  totalCharges: number
  totalAdjustments: number
  totalPayments: number
  alternateVisitId: string
  visitIndicator: string
  otherHealthcareProvider: string
  serviceEpisodeDescription: string
  serviceEpisodeIdentifier: string
  
  }
  export const HL7PatientVisitV7 = mongoose.model<HL7PatientVisitV7Document> ("HL7PatientVisitV7", HL7PatientVisitV7Schema);

