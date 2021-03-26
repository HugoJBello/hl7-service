
// Generated typescript code of HL7v 2.2 OM5  (Observation Batteries)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ObservationBatteriesV2Document = mongoose.Document & HL7ObservationBatteriesV2I

const HL7ObservationBatteriesV2Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  segmentTypeId: String,
  sequenceNumberTestObservationMasterFile: Number,
  testsObservationsIncludedWithinAnOrderedTestBattery: Array(String),
  observationIdSuffixes: String,
  
  }, { timestamps: true });
  
export interface HL7ObservationBatteriesV2I extends Segment{
  segmentTypeId: string
  sequenceNumberTestObservationMasterFile: number
  testsObservationsIncludedWithinAnOrderedTestBattery: string[]
  observationIdSuffixes: string
  
  }
  export const HL7ObservationBatteriesV2 = mongoose.model<HL7ObservationBatteriesV2Document> ("HL7ObservationBatteriesV2", HL7ObservationBatteriesV2Schema);

