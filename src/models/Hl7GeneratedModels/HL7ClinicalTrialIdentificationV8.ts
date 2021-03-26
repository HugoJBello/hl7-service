
// Generated typescript code of HL7v 2.8 CTI  (Clinical Trial Identification)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ClinicalTrialIdentificationV8Document = mongoose.Document & HL7ClinicalTrialIdentificationV8I

const HL7ClinicalTrialIdentificationV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  sponsorStudyId: String,
  studyPhaseIdentifier: String,
  studyScheduledTimePoint: String,
  
  }, { timestamps: true });
  
export interface HL7ClinicalTrialIdentificationV8I extends Segment{
  sponsorStudyId: string
  studyPhaseIdentifier: string
  studyScheduledTimePoint: string
  
  }
  export const HL7ClinicalTrialIdentificationV8 = mongoose.model<HL7ClinicalTrialIdentificationV8Document> ("HL7ClinicalTrialIdentificationV8", HL7ClinicalTrialIdentificationV8Schema);

