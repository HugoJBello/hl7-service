
// Generated typescript code of HL7v 2.7 IPC  (Imaging Procedure Control Segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ImagingProcedureControlSegmentV7Document = mongoose.Document & HL7ImagingProcedureControlSegmentV7I

const HL7ImagingProcedureControlSegmentV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  accessionIdentifier: String,
  requestedProcedureId: String,
  studyInstanceUid: String,
  scheduledProcedureStepId: String,
  modality: String,
  protocolCode: Array(String),
  scheduledStationName: String,
  scheduledProcedureStepLocation: Array(String),
  scheduledStationAeTitle: String,
  
  }, { timestamps: true });
  
export interface HL7ImagingProcedureControlSegmentV7I extends Segment{
  accessionIdentifier: string
  requestedProcedureId: string
  studyInstanceUid: string
  scheduledProcedureStepId: string
  modality: string
  protocolCode: string[]
  scheduledStationName: string
  scheduledProcedureStepLocation: string[]
  scheduledStationAeTitle: string
  
  }
  export const HL7ImagingProcedureControlSegmentV7 = mongoose.model<HL7ImagingProcedureControlSegmentV7Document> ("HL7ImagingProcedureControlSegmentV7", HL7ImagingProcedureControlSegmentV7Schema);

