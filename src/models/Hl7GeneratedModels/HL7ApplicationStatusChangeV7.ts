
// Generated typescript code of HL7v 2.7 NSC  (Application Status Change)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ApplicationStatusChangeV7Document = mongoose.Document & HL7ApplicationStatusChangeV7I

const HL7ApplicationStatusChangeV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  applicationChangeType: String,
  currentCpu: String,
  currentFileserver: String,
  currentApplication: String,
  currentFacility: String,
  newCpu: String,
  newFileserver: String,
  newApplication: String,
  newFacility: String,
  
  }, { timestamps: true });
  
export interface HL7ApplicationStatusChangeV7I extends Segment{
  applicationChangeType: string
  currentCpu: string
  currentFileserver: string
  currentApplication: string
  currentFacility: string
  newCpu: string
  newFileserver: string
  newApplication: string
  newFacility: string
  
  }
  export const HL7ApplicationStatusChangeV7 = mongoose.model<HL7ApplicationStatusChangeV7Document> ("HL7ApplicationStatusChangeV7", HL7ApplicationStatusChangeV7Schema);

