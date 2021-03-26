
// Generated typescript code of HL7v 2.4 CTI  (Clinical Trial Identification)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ClinicalTrialIdentificationV4Document = mongoose.Document & HL7ClinicalTrialIdentificationV4I

const HL7ClinicalTrialIdentificationV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  sponsorStudyID: String,
  studyPhaseIdentifier: String,
  studyScheduledTimePoint: String,
  
  }, { timestamps: true });
  
export interface HL7ClinicalTrialIdentificationV4I extends Segment{
  sponsorStudyID: string
  studyPhaseIdentifier: string
  studyScheduledTimePoint: string
  
  }
  export const HL7ClinicalTrialIdentificationV4 = mongoose.model<HL7ClinicalTrialIdentificationV4Document> ("HL7ClinicalTrialIdentificationV4", HL7ClinicalTrialIdentificationV4Schema);

