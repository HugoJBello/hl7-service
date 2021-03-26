
// Generated typescript code of HL7v 2.7 DMI  (Drg Master File Information)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7DrgMasterFileInformationV7Document = mongoose.Document & HL7DrgMasterFileInformationV7I

const HL7DrgMasterFileInformationV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  diagnosticRelatedGroup: String,
  majorDiagnosticCategory: String,
  lowerAndUpperTrimPoints: String,
  averageLengthOfStay: Number,
  relativeWeight: Number,
  
  }, { timestamps: true });
  
export interface HL7DrgMasterFileInformationV7I extends Segment{
  diagnosticRelatedGroup: string
  majorDiagnosticCategory: string
  lowerAndUpperTrimPoints: string
  averageLengthOfStay: number
  relativeWeight: number
  
  }
  export const HL7DrgMasterFileInformationV7 = mongoose.model<HL7DrgMasterFileInformationV7Document> ("HL7DrgMasterFileInformationV7", HL7DrgMasterFileInformationV7Schema);

