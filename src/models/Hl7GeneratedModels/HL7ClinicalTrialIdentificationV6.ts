
// Generated typescript code of HL7v 2.6 CTI  (Clinical Trial Identification)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ClinicalTrialIdentificationV6Document = mongoose.Document & HL7ClinicalTrialIdentificationV6I

const HL7ClinicalTrialIdentificationV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  sponsorStudyID: String,
  studyPhaseIdentifier: String,
  studyScheduledTimePoint: String,
  
  }, { timestamps: true });
  
export interface HL7ClinicalTrialIdentificationV6I extends Segment{
  sponsorStudyID: string
  studyPhaseIdentifier: string
  studyScheduledTimePoint: string
  
  }
  export const HL7ClinicalTrialIdentificationV6 = mongoose.model<HL7ClinicalTrialIdentificationV6Document> ("HL7ClinicalTrialIdentificationV6", HL7ClinicalTrialIdentificationV6Schema);

