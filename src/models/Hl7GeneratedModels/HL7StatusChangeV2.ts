
// Generated typescript code of HL7v 2.2 NSC  (Status Change)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7StatusChangeV2Document = mongoose.Document & HL7StatusChangeV2I

const HL7StatusChangeV2Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  networkChangeType: String,
  currentCpu: String,
  currentFileserver: String,
  currentApplication: String,
  currentFacility: String,
  newCpu: String,
  newFileserver: String,
  newApplication: String,
  newFacility: String,
  
  }, { timestamps: true });
  
export interface HL7StatusChangeV2I extends Segment{
  networkChangeType: string
  currentCpu: string
  currentFileserver: string
  currentApplication: string
  currentFacility: string
  newCpu: string
  newFileserver: string
  newApplication: string
  newFacility: string
  
  }
  export const HL7StatusChangeV2 = mongoose.model<HL7StatusChangeV2Document> ("HL7StatusChangeV2", HL7StatusChangeV2Schema);

