
// Generated typescript code of HL7v 2.7 CM0  (Clinical Study Master)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ClinicalStudyMasterV7Document = mongoose.Document & HL7ClinicalStudyMasterV7I

const HL7ClinicalStudyMasterV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdCm0: String,
  sponsorStudyId: String,
  alternateStudyId: Array(String),
  titleOfStudy: String,
  chairmanOfStudy: Array(String),
  lastIrbApprovalDate: String,
  totalAccrualToDate: Number,
  lastAccrualDate: String,
  contactForStudy: Array(String),
  contactsTelephoneNumber: String,
  contactsAddress: Array(String),
  
  }, { timestamps: true });
  
export interface HL7ClinicalStudyMasterV7I extends Segment{
  setIdCm0: string
  sponsorStudyId: string
  alternateStudyId: string[]
  titleOfStudy: string
  chairmanOfStudy: string[]
  lastIrbApprovalDate: string
  totalAccrualToDate: number
  lastAccrualDate: string
  contactForStudy: string[]
  contactsTelephoneNumber: string
  contactsAddress: string[]
  
  }
  export const HL7ClinicalStudyMasterV7 = mongoose.model<HL7ClinicalStudyMasterV7Document> ("HL7ClinicalStudyMasterV7", HL7ClinicalStudyMasterV7Schema);

