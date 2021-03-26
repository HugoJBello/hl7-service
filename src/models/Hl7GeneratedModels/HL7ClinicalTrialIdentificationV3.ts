
// Generated typescript code of HL7v 2.3 CTI  (Clinical Trial Identification)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ClinicalTrialIdentificationV3Document = mongoose.Document & HL7ClinicalTrialIdentificationV3I

const HL7ClinicalTrialIdentificationV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  sponsorStudyID: String,
  studyPhaseIdentifier: String,
  studyScheduledTimePoint: String,
  
  }, { timestamps: true });
  
export interface HL7ClinicalTrialIdentificationV3I extends Segment{
  sponsorStudyID: string
  studyPhaseIdentifier: string
  studyScheduledTimePoint: string
  
  }
  export const HL7ClinicalTrialIdentificationV3 = mongoose.model<HL7ClinicalTrialIdentificationV3Document> ("HL7ClinicalTrialIdentificationV3", HL7ClinicalTrialIdentificationV3Schema);

