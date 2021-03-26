
// Generated typescript code of HL7v 2.5 PTH  (Pathway)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PathwayV5Document = mongoose.Document & HL7PathwayV5I

const HL7PathwayV5Schema = new mongoose.Schema({
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
  
export interface HL7PathwayV5I extends Segment{
  actionCode: string
  pathwayID: string
  pathwayInstanceID: string
  pathwayEstablishedDateTime: Date
  pathwayLifeCycleStatus: string
  changePathwayLifeCycleStatusDateTime: Date
  
  }
  export const HL7PathwayV5 = mongoose.model<HL7PathwayV5Document> ("HL7PathwayV5", HL7PathwayV5Schema);

