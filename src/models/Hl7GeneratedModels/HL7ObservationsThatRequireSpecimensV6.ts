
// Generated typescript code of HL7v 2.6 OM4  (Observations That Require Specimens)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ObservationsThatRequireSpecimensV6Document = mongoose.Document & HL7ObservationsThatRequireSpecimensV6I

const HL7ObservationsThatRequireSpecimensV6Schema = new mongoose.Schema({
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
  
export interface HL7ObservationsThatRequireSpecimensV6I extends Segment{
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
  export const HL7ObservationsThatRequireSpecimensV6 = mongoose.model<HL7ObservationsThatRequireSpecimensV6Document> ("HL7ObservationsThatRequireSpecimensV6", HL7ObservationsThatRequireSpecimensV6Schema);

