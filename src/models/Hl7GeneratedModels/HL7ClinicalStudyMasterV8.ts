
// Generated typescript code of HL7v 2.8 CM0  (Clinical Study Master)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ClinicalStudyMasterV8Document = mongoose.Document & HL7ClinicalStudyMasterV8I

const HL7ClinicalStudyMasterV8Schema = new mongoose.Schema({
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
  
export interface HL7ClinicalStudyMasterV8I extends Segment{
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
  export const HL7ClinicalStudyMasterV8 = mongoose.model<HL7ClinicalStudyMasterV8Document> ("HL7ClinicalStudyMasterV8", HL7ClinicalStudyMasterV8Schema);

