
// Generated typescript code of HL7v 2.6 NSC  (Application Status Change)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ApplicationStatusChangeV6Document = mongoose.Document & HL7ApplicationStatusChangeV6I

const HL7ApplicationStatusChangeV6Schema = new mongoose.Schema({
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
  
export interface HL7ApplicationStatusChangeV6I extends Segment{
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
  export const HL7ApplicationStatusChangeV6 = mongoose.model<HL7ApplicationStatusChangeV6Document> ("HL7ApplicationStatusChangeV6", HL7ApplicationStatusChangeV6Schema);

