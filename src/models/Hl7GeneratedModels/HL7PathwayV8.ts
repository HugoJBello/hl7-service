
// Generated typescript code of HL7v 2.8 PTH  (Pathway)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PathwayV8Document = mongoose.Document & HL7PathwayV8I

const HL7PathwayV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  actionCode: String,
  pathwayId: String,
  pathwayInstanceId: String,
  pathwayEstablishedDateTime: String,
  pathwayLifeCycleStatus: String,
  changePathwayLifeCycleStatusDateTime: String,
  moodCode: String,
  
  }, { timestamps: true });
  
export interface HL7PathwayV8I extends Segment{
  actionCode: string
  pathwayId: string
  pathwayInstanceId: string
  pathwayEstablishedDateTime: string
  pathwayLifeCycleStatus: string
  changePathwayLifeCycleStatusDateTime: string
  moodCode: string
  
  }
  export const HL7PathwayV8 = mongoose.model<HL7PathwayV8Document> ("HL7PathwayV8", HL7PathwayV8Schema);

