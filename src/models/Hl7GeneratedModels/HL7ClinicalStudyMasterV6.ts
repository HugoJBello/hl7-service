
// Generated typescript code of HL7v 2.6 CM0  (Clinical Study Master)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ClinicalStudyMasterV6Document = mongoose.Document & HL7ClinicalStudyMasterV6I

const HL7ClinicalStudyMasterV6Schema = new mongoose.Schema({
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
  
export interface HL7ClinicalStudyMasterV6I extends Segment{
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
  export const HL7ClinicalStudyMasterV6 = mongoose.model<HL7ClinicalStudyMasterV6Document> ("HL7ClinicalStudyMasterV6", HL7ClinicalStudyMasterV6Schema);

