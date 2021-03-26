
// Generated typescript code of HL7v 2.8 DMI  (Drg Master File Information)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7DrgMasterFileInformationV8Document = mongoose.Document & HL7DrgMasterFileInformationV8I

const HL7DrgMasterFileInformationV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  diagnosticRelatedGroup: String,
  majorDiagnosticCategory: String,
  lowerAndUpperTrimPoints: String,
  averageLengthOfStay: Number,
  relativeWeight: Number,
  
  }, { timestamps: true });
  
export interface HL7DrgMasterFileInformationV8I extends Segment{
  diagnosticRelatedGroup: string
  majorDiagnosticCategory: string
  lowerAndUpperTrimPoints: string
  averageLengthOfStay: number
  relativeWeight: number
  
  }
  export const HL7DrgMasterFileInformationV8 = mongoose.model<HL7DrgMasterFileInformationV8Document> ("HL7DrgMasterFileInformationV8", HL7DrgMasterFileInformationV8Schema);

