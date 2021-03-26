
// Generated typescript code of HL7v 2.5 NSC  (Application Status Change)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ApplicationStatusChangeV5Document = mongoose.Document & HL7ApplicationStatusChangeV5I

const HL7ApplicationStatusChangeV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  applicationChangeType: String,
  currentCPU: String,
  currentFileserver: String,
  currentApplication: String,
  currentFacility: String,
  newCPU: String,
  newFileserver: String,
  newApplication: String,
  newFacility: String,
  
  }, { timestamps: true });
  
export interface HL7ApplicationStatusChangeV5I extends Segment{
  applicationChangeType: string
  currentCPU: string
  currentFileserver: string
  currentApplication: string
  currentFacility: string
  newCPU: string
  newFileserver: string
  newApplication: string
  newFacility: string
  
  }
  export const HL7ApplicationStatusChangeV5 = mongoose.model<HL7ApplicationStatusChangeV5Document> ("HL7ApplicationStatusChangeV5", HL7ApplicationStatusChangeV5Schema);

