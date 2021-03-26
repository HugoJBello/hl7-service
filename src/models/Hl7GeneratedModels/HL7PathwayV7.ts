
// Generated typescript code of HL7v 2.7 PTH  (Pathway)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PathwayV7Document = mongoose.Document & HL7PathwayV7I

const HL7PathwayV7Schema = new mongoose.Schema({
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
  
export interface HL7PathwayV7I extends Segment{
  actionCode: string
  pathwayId: string
  pathwayInstanceId: string
  pathwayEstablishedDateTime: string
  pathwayLifeCycleStatus: string
  changePathwayLifeCycleStatusDateTime: string
  moodCode: string
  
  }
  export const HL7PathwayV7 = mongoose.model<HL7PathwayV7Document> ("HL7PathwayV7", HL7PathwayV7Schema);

