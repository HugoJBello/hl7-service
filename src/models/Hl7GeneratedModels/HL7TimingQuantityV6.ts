
// Generated typescript code of HL7v 2.6 TQ1  (Timing/Quantity)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7TimingQuantityV6Document = mongoose.Document & HL7TimingQuantityV6I

const HL7TimingQuantityV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDTQ1: String,
  quantity: String,
  repeatPattern: Array(String),
  explicitTime: Array(String),
  relativeTimeAndUnits: Array(String),
  serviceDuration: String,
  startDatetime: String,
  endDatetime: String,
  priority: Array(String),
  conditionText: String,
  textInstruction: String,
  conjunction: String,
  occurrenceDuration: String,
  totalOccurrences: Number,
  
  }, { timestamps: true });
  
export interface HL7TimingQuantityV6I extends Segment{
  setIDTQ1: string
  quantity: string
  repeatPattern: string[]
  explicitTime: string[]
  relativeTimeAndUnits: string[]
  serviceDuration: string
  startDatetime: string
  endDatetime: string
  priority: string[]
  conditionText: string
  textInstruction: string
  conjunction: string
  occurrenceDuration: string
  totalOccurrences: number
  
  }
  export const HL7TimingQuantityV6 = mongoose.model<HL7TimingQuantityV6Document> ("HL7TimingQuantityV6", HL7TimingQuantityV6Schema);

