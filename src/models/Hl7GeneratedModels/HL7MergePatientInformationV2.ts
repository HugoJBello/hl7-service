
// Generated typescript code of HL7v 2.2 MRG  (Merge Patient Information)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7MergePatientInformationV2Document = mongoose.Document & HL7MergePatientInformationV2I

const HL7MergePatientInformationV2Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  priorPatientIdInternal: String,
  priorAlternatePatientId: String,
  priorPatientAccountNumber: String,
  priorPatientIdExternal: String,
  
  }, { timestamps: true });
  
export interface HL7MergePatientInformationV2I extends Segment{
  priorPatientIdInternal: string
  priorAlternatePatientId: string
  priorPatientAccountNumber: string
  priorPatientIdExternal: string
  
  }
  export const HL7MergePatientInformationV2 = mongoose.model<HL7MergePatientInformationV2Document> ("HL7MergePatientInformationV2", HL7MergePatientInformationV2Schema);

