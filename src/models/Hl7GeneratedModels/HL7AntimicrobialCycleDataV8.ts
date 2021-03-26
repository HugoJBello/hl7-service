
// Generated typescript code of HL7v 2.8 SCD  (Anti-microbial Cycle Data)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7AntimicrobialCycleDataV8Document = mongoose.Document & HL7AntimicrobialCycleDataV8I

const HL7AntimicrobialCycleDataV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  cycleStartTime: String,
  cycleCount: Number,
  tempMax: String,
  tempMin: String,
  loadNumber: Number,
  conditionTime: String,
  sterilizeTime: String,
  exhaustTime: String,
  totalCycleTime: String,
  deviceStatus: String,
  cycleStartDateTime: String,
  dryTime: String,
  leakRate: String,
  controlTemperature: String,
  sterilizerTemperature: String,
  cycleCompleteTime: String,
  underTemperature: String,
  overTemperature: String,
  abortCycle: String,
  alarm: String,
  longInChargePhase: String,
  longInExhaustPhase: String,
  longInFastExhaustPhase: String,
  reset: String,
  operatorUnload: String,
  doorOpen: String,
  readingFailure: String,
  cycleType: String,
  thermalRinseTime: String,
  washTime: String,
  injectionRate: String,
  procedureCode: String,
  patientIdentifierList: Array(String),
  attendingDoctor: String,
  dilutionFactor: String,
  fillTime: String,
  inletTemperature: String,
  
  }, { timestamps: true });
  
export interface HL7AntimicrobialCycleDataV8I extends Segment{
  cycleStartTime: string
  cycleCount: number
  tempMax: string
  tempMin: string
  loadNumber: number
  conditionTime: string
  sterilizeTime: string
  exhaustTime: string
  totalCycleTime: string
  deviceStatus: string
  cycleStartDateTime: string
  dryTime: string
  leakRate: string
  controlTemperature: string
  sterilizerTemperature: string
  cycleCompleteTime: string
  underTemperature: string
  overTemperature: string
  abortCycle: string
  alarm: string
  longInChargePhase: string
  longInExhaustPhase: string
  longInFastExhaustPhase: string
  reset: string
  operatorUnload: string
  doorOpen: string
  readingFailure: string
  cycleType: string
  thermalRinseTime: string
  washTime: string
  injectionRate: string
  procedureCode: string
  patientIdentifierList: string[]
  attendingDoctor: string
  dilutionFactor: string
  fillTime: string
  inletTemperature: string
  
  }
  export const HL7AntimicrobialCycleDataV8 = mongoose.model<HL7AntimicrobialCycleDataV8Document> ("HL7AntimicrobialCycleDataV8", HL7AntimicrobialCycleDataV8Schema);

