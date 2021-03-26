
// Generated typescript code of HL7v 2.5 CTI  (Clinical Trial Identification)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ClinicalTrialIdentificationV5Document = mongoose.Document & HL7ClinicalTrialIdentificationV5I

const HL7ClinicalTrialIdentificationV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  sponsorStudyID: String,
  studyPhaseIdentifier: String,
  studyScheduledTimePoint: String,
  
  }, { timestamps: true });
  
export interface HL7ClinicalTrialIdentificationV5I extends Segment{
  sponsorStudyID: string
  studyPhaseIdentifier: string
  studyScheduledTimePoint: string
  
  }
  export const HL7ClinicalTrialIdentificationV5 = mongoose.model<HL7ClinicalTrialIdentificationV5Document> ("HL7ClinicalTrialIdentificationV5", HL7ClinicalTrialIdentificationV5Schema);

