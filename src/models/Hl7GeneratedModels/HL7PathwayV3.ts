
// Generated typescript code of HL7v 2.3 PTH  (Pathway)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PathwayV3Document = mongoose.Document & HL7PathwayV3I

const HL7PathwayV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  actionCode: String,
  pathwayID: String,
  pathwayInstanceID: String,
  pathwayEstablishedDateTime: Date,
  pathwayLifecycleStatus: String,
  changePathwayLifecycleStatusDateTime: Date,
  
  }, { timestamps: true });
  
export interface HL7PathwayV3I extends Segment{
  actionCode: string
  pathwayID: string
  pathwayInstanceID: string
  pathwayEstablishedDateTime: Date
  pathwayLifecycleStatus: string
  changePathwayLifecycleStatusDateTime: Date
  
  }
  export const HL7PathwayV3 = mongoose.model<HL7PathwayV3Document> ("HL7PathwayV3", HL7PathwayV3Schema);

