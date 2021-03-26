
// Generated typescript code of HL7v 2.3 CM0  (Clinical Study Master)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ClinicalStudyMasterV3Document = mongoose.Document & HL7ClinicalStudyMasterV3I

const HL7ClinicalStudyMasterV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  cM0SetID: String,
  sponsorStudyID: String,
  alternateStudyID: Array(String),
  titleOfStudy: String,
  chairmanOfStudy: String,
  lastIRBApprovalDate: String,
  totalAccrualToDate: Number,
  lastAccrualDate: String,
  contactForStudy: String,
  contactsTelNumber: String,
  contactsAddress: String,
  
  }, { timestamps: true });
  
export interface HL7ClinicalStudyMasterV3I extends Segment{
  cM0SetID: string
  sponsorStudyID: string
  alternateStudyID: string[]
  titleOfStudy: string
  chairmanOfStudy: string
  lastIRBApprovalDate: string
  totalAccrualToDate: number
  lastAccrualDate: string
  contactForStudy: string
  contactsTelNumber: string
  contactsAddress: string
  
  }
  export const HL7ClinicalStudyMasterV3 = mongoose.model<HL7ClinicalStudyMasterV3Document> ("HL7ClinicalStudyMasterV3", HL7ClinicalStudyMasterV3Schema);

