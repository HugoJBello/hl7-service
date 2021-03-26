
// Generated typescript code of HL7v 2.5 PV1  (Patient Visit)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PatientVisitV5Document = mongoose.Document & HL7PatientVisitV5I

const HL7PatientVisitV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDPV1: String,
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
  vIPIndicator: String,
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
  admitDateTime: Date,
  dischargeDateTime: Array(Date),
  currentPatientBalance: Number,
  totalCharges: Number,
  totalAdjustments: Number,
  totalPayments: Number,
  alternateVisitID: String,
  visitIndicator: String,
  otherHealthcareProvider: Array(String),
  
  }, { timestamps: true });
  
export interface HL7PatientVisitV5I extends Segment{
  setIDPV1: string
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
  vIPIndicator: string
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
  admitDateTime: Date
  dischargeDateTime: Date[]
  currentPatientBalance: number
  totalCharges: number
  totalAdjustments: number
  totalPayments: number
  alternateVisitID: string
  visitIndicator: string
  otherHealthcareProvider: string[]
  
  }
  export const HL7PatientVisitV5 = mongoose.model<HL7PatientVisitV5Document> ("HL7PatientVisitV5", HL7PatientVisitV5Schema);

