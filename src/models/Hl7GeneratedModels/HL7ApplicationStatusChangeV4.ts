
// Generated typescript code of HL7v 2.4 NSC  (Application status change)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ApplicationStatusChangeV4Document = mongoose.Document & HL7ApplicationStatusChangeV4I

const HL7ApplicationStatusChangeV4Schema = new mongoose.Schema({
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
  
export interface HL7ApplicationStatusChangeV4I extends Segment{
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
  export const HL7ApplicationStatusChangeV4 = mongoose.model<HL7ApplicationStatusChangeV4Document> ("HL7ApplicationStatusChangeV4", HL7ApplicationStatusChangeV4Schema);

