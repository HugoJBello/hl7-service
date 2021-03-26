
// Generated typescript code of HL7v 2.8 DON  (Donation Segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7DonationSegmentV8Document = mongoose.Document & HL7DonationSegmentV8I

const HL7DonationSegmentV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  donationIdentificationNumberDIN: String,
  donationType: String,
  phlebotomyStartDateTime: String,
  phlebotomyEndDateTime: String,
  donationDuration: Number,
  donationDurationUnits: String,
  intendedProcedureType: Array(String),
  actualProcedureType: Array(String),
  donorEligibilityFlag: String,
  donorEligibilityProcedureType: Array(String),
  donorEligibilityDate: String,
  processInterruption: String,
  processInterruptionReason: String,
  phlebotomyIssue: Array(String),
  intendedRecipientBloodRelative: String,
  intendedRecipientName: String,
  intendedRecipientDOB: String,
  intendedRecipientFacility: String,
  intendedRecipientProcedureDate: String,
  intendedRecipientOrderingProvider: String,
  phlebotomyStatus: String,
  armStick: String,
  bleedStartPhlebotomist: String,
  bleedEndPhlebotomist: String,
  aphaeresisTypeMachine: String,
  aphaeresisMachineSerialNumber: String,
  donorReaction: String,
  finalReviewStaffID: String,
  finalReviewDateTime: String,
  numberOfTubesCollected: Number,
  donationSampleIdentifier: Array(String),
  donationAcceptStaff: String,
  donationMaterialReviewStaff: Array(String),
  
  }, { timestamps: true });
  
export interface HL7DonationSegmentV8I extends Segment{
  donationIdentificationNumberDIN: string
  donationType: string
  phlebotomyStartDateTime: string
  phlebotomyEndDateTime: string
  donationDuration: number
  donationDurationUnits: string
  intendedProcedureType: string[]
  actualProcedureType: string[]
  donorEligibilityFlag: string
  donorEligibilityProcedureType: string[]
  donorEligibilityDate: string
  processInterruption: string
  processInterruptionReason: string
  phlebotomyIssue: string[]
  intendedRecipientBloodRelative: string
  intendedRecipientName: string
  intendedRecipientDOB: string
  intendedRecipientFacility: string
  intendedRecipientProcedureDate: string
  intendedRecipientOrderingProvider: string
  phlebotomyStatus: string
  armStick: string
  bleedStartPhlebotomist: string
  bleedEndPhlebotomist: string
  aphaeresisTypeMachine: string
  aphaeresisMachineSerialNumber: string
  donorReaction: string
  finalReviewStaffID: string
  finalReviewDateTime: string
  numberOfTubesCollected: number
  donationSampleIdentifier: string[]
  donationAcceptStaff: string
  donationMaterialReviewStaff: string[]
  
  }
  export const HL7DonationSegmentV8 = mongoose.model<HL7DonationSegmentV8Document> ("HL7DonationSegmentV8", HL7DonationSegmentV8Schema);

