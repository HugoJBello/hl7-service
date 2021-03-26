
// Generated typescript code of HL7v 2.7 TQ1  (Timing/quantity)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7TimingquantityV7Document = mongoose.Document & HL7TimingquantityV7I

const HL7TimingquantityV7Schema = new mongoose.Schema({
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
  
export interface HL7TimingquantityV7I extends Segment{
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
  export const HL7TimingquantityV7 = mongoose.model<HL7TimingquantityV7Document> ("HL7TimingquantityV7", HL7TimingquantityV7Schema);

