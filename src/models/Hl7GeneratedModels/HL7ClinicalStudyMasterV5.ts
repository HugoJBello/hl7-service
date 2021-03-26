
// Generated typescript code of HL7v 2.5 CM0  (Clinical Study Master)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ClinicalStudyMasterV5Document = mongoose.Document & HL7ClinicalStudyMasterV5I

const HL7ClinicalStudyMasterV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDCM0: String,
  sponsorStudyID: String,
  alternateStudyID: Array(String),
  titleOfStudy: String,
  chairmanOfStudy: Array(String),
  lastIRBApprovalDate: String,
  totalAccrualToDate: Number,
  lastAccrualDate: String,
  contactForStudy: Array(String),
  contactsTelephoneNumber: String,
  contactsAddress: Array(String),
  
  }, { timestamps: true });
  
export interface HL7ClinicalStudyMasterV5I extends Segment{
  setIDCM0: string
  sponsorStudyID: string
  alternateStudyID: string[]
  titleOfStudy: string
  chairmanOfStudy: string[]
  lastIRBApprovalDate: string
  totalAccrualToDate: number
  lastAccrualDate: string
  contactForStudy: string[]
  contactsTelephoneNumber: string
  contactsAddress: string[]
  
  }
  export const HL7ClinicalStudyMasterV5 = mongoose.model<HL7ClinicalStudyMasterV5Document> ("HL7ClinicalStudyMasterV5", HL7ClinicalStudyMasterV5Schema);

