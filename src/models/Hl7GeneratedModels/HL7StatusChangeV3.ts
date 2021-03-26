
// Generated typescript code of HL7v 2.3 NSC  (Status change)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7StatusChangeV3Document = mongoose.Document & HL7StatusChangeV3I

const HL7StatusChangeV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  networkChangeType: String,
  currentCPU: String,
  currentFileserver: String,
  currentApplication: String,
  currentFacility: String,
  newCPU: String,
  newFileserver: String,
  newApplication: String,
  newFacility: String,
  
  }, { timestamps: true });
  
export interface HL7StatusChangeV3I extends Segment{
  networkChangeType: string
  currentCPU: string
  currentFileserver: string
  currentApplication: string
  currentFacility: string
  newCPU: string
  newFileserver: string
  newApplication: string
  newFacility: string
  
  }
  export const HL7StatusChangeV3 = mongoose.model<HL7StatusChangeV3Document> ("HL7StatusChangeV3", HL7StatusChangeV3Schema);

