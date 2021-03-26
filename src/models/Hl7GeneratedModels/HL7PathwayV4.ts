
// Generated typescript code of HL7v 2.4 PTH  (Pathway)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PathwayV4Document = mongoose.Document & HL7PathwayV4I

const HL7PathwayV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  actionCode: String,
  pathwayID: String,
  pathwayInstanceID: String,
  pathwayEstablishedDateTime: Date,
  pathwayLifeCycleStatus: String,
  changePathwayLifeCycleStatusDateTime: Date,
  
  }, { timestamps: true });
  
export interface HL7PathwayV4I extends Segment{
  actionCode: string
  pathwayID: string
  pathwayInstanceID: string
  pathwayEstablishedDateTime: Date
  pathwayLifeCycleStatus: string
  changePathwayLifeCycleStatusDateTime: Date
  
  }
  export const HL7PathwayV4 = mongoose.model<HL7PathwayV4Document> ("HL7PathwayV4", HL7PathwayV4Schema);

