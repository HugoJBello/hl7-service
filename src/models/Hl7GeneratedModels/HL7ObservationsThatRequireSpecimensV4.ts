
// Generated typescript code of HL7v 2.4 OM4  (Observations that Require Specimens)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ObservationsThatRequireSpecimensV4Document = mongoose.Document & HL7ObservationsThatRequireSpecimensV4I

const HL7ObservationsThatRequireSpecimensV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  sequenceNumberTestObservationMasterFile: Number,
  derivedSpecimen: String,
  containerDescription: String,
  containerVolume: Number,
  containerUnits: String,
  specimen: String,
  additive: String,
  preparation: String,
  specialHandlingRequirements: String,
  normalCollectionVolume: String,
  minimumCollectionVolume: String,
  specimenRequirements: String,
  specimenPriorities: Array(String),
  specimenRetentionTime: String,
  
  }, { timestamps: true });
  
export interface HL7ObservationsThatRequireSpecimensV4I extends Segment{
  sequenceNumberTestObservationMasterFile: number
  derivedSpecimen: string
  containerDescription: string
  containerVolume: number
  containerUnits: string
  specimen: string
  additive: string
  preparation: string
  specialHandlingRequirements: string
  normalCollectionVolume: string
  minimumCollectionVolume: string
  specimenRequirements: string
  specimenPriorities: string[]
  specimenRetentionTime: string
  
  }
  export const HL7ObservationsThatRequireSpecimensV4 = mongoose.model<HL7ObservationsThatRequireSpecimensV4Document> ("HL7ObservationsThatRequireSpecimensV4", HL7ObservationsThatRequireSpecimensV4Schema);

