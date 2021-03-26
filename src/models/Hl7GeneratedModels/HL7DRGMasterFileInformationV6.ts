
// Generated typescript code of HL7v 2.6 DMI  (DRG Master File Information)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7DRGMasterFileInformationV6Document = mongoose.Document & HL7DRGMasterFileInformationV6I

const HL7DRGMasterFileInformationV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  diagnosticRelatedGroup: String,
  majorDiagnosticCategory: String,
  lowerAndUpperTrimPoints: String,
  averageLengthOfStay: Number,
  relativeWeight: Number,
  
  }, { timestamps: true });
  
export interface HL7DRGMasterFileInformationV6I extends Segment{
  diagnosticRelatedGroup: string
  majorDiagnosticCategory: string
  lowerAndUpperTrimPoints: string
  averageLengthOfStay: number
  relativeWeight: number
  
  }
  export const HL7DRGMasterFileInformationV6 = mongoose.model<HL7DRGMasterFileInformationV6Document> ("HL7DRGMasterFileInformationV6", HL7DRGMasterFileInformationV6Schema);

