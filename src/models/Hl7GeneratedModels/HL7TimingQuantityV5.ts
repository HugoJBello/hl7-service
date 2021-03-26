
// Generated typescript code of HL7v 2.5 TQ1  (Timing/Quantity)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7TimingQuantityV5Document = mongoose.Document & HL7TimingQuantityV5I

const HL7TimingQuantityV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDTQ1: String,
  quantity: String,
  repeatPattern: Array(String),
  explicitTime: Array(String),
  relativeTimeAndUnits: Array(String),
  serviceDuration: String,
  startDatetime: Date,
  endDatetime: Date,
  priority: Array(String),
  conditionText: String,
  textInstruction: String,
  conjunction: String,
  occurrenceDuration: String,
  totalOccurrences: Number,
  
  }, { timestamps: true });
  
export interface HL7TimingQuantityV5I extends Segment{
  setIDTQ1: string
  quantity: string
  repeatPattern: string[]
  explicitTime: string[]
  relativeTimeAndUnits: string[]
  serviceDuration: string
  startDatetime: Date
  endDatetime: Date
  priority: string[]
  conditionText: string
  textInstruction: string
  conjunction: string
  occurrenceDuration: string
  totalOccurrences: number
  
  }
  export const HL7TimingQuantityV5 = mongoose.model<HL7TimingQuantityV5Document> ("HL7TimingQuantityV5", HL7TimingQuantityV5Schema);

