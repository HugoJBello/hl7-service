
// Generated typescript code of HL7v 2.6 PTH  (Pathway)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PathwayV6Document = mongoose.Document & HL7PathwayV6I

const HL7PathwayV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  actionCode: String,
  pathwayID: String,
  pathwayInstanceID: String,
  pathwayEstablishedDateTime: String,
  pathwayLifeCycleStatus: String,
  changePathwayLifeCycleStatusDateTime: String,
  moodCode: String,
  
  }, { timestamps: true });
  
export interface HL7PathwayV6I extends Segment{
  actionCode: string
  pathwayID: string
  pathwayInstanceID: string
  pathwayEstablishedDateTime: string
  pathwayLifeCycleStatus: string
  changePathwayLifeCycleStatusDateTime: string
  moodCode: string
  
  }
  export const HL7PathwayV6 = mongoose.model<HL7PathwayV6Document> ("HL7PathwayV6", HL7PathwayV6Schema);

