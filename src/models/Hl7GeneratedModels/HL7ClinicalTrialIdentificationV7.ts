
// Generated typescript code of HL7v 2.7 CTI  (Clinical Trial Identification)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ClinicalTrialIdentificationV7Document = mongoose.Document & HL7ClinicalTrialIdentificationV7I

const HL7ClinicalTrialIdentificationV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  sponsorStudyId: String,
  studyPhaseIdentifier: String,
  studyScheduledTimePoint: String,
  
  }, { timestamps: true });
  
export interface HL7ClinicalTrialIdentificationV7I extends Segment{
  sponsorStudyId: string
  studyPhaseIdentifier: string
  studyScheduledTimePoint: string
  
  }
  export const HL7ClinicalTrialIdentificationV7 = mongoose.model<HL7ClinicalTrialIdentificationV7Document> ("HL7ClinicalTrialIdentificationV7", HL7ClinicalTrialIdentificationV7Schema);

