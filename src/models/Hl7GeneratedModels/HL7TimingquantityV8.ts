
// Generated typescript code of HL7v 2.8 TQ1  (Timing/quantity)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7TimingquantityV8Document = mongoose.Document & HL7TimingquantityV8I

const HL7TimingquantityV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdTq1: String,
  quantity: String,
  repeatPattern: Array(String),
  explicitTime: Array(String),
  relativeTimeAndUnits: Array(String),
  serviceDuration: String,
  startDateTime: String,
  endDateTime: String,
  priority: Array(String),
  conditionText: String,
  textInstruction: String,
  conjunction: String,
  occurrenceDuration: String,
  totalOccurrences: Number,
  
  }, { timestamps: true });
  
export interface HL7TimingquantityV8I extends Segment{
  setIdTq1: string
  quantity: string
  repeatPattern: string[]
  explicitTime: string[]
  relativeTimeAndUnits: string[]
  serviceDuration: string
  startDateTime: string
  endDateTime: string
  priority: string[]
  conditionText: string
  textInstruction: string
  conjunction: string
  occurrenceDuration: string
  totalOccurrences: number
  
  }
  export const HL7TimingquantityV8 = mongoose.model<HL7TimingquantityV8Document> ("HL7TimingquantityV8", HL7TimingquantityV8Schema);

