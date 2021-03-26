
// Generated typescript code of HL7v 2.5 IPC  (Imaging Procedure Control Segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ImagingProcedureControlSegmentV5Document = mongoose.Document & HL7ImagingProcedureControlSegmentV5I

const HL7ImagingProcedureControlSegmentV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  accessionIdentifier: String,
  requestedProcedureID: String,
  studyInstanceUID: String,
  scheduledProcedureStepID: String,
  modality: String,
  protocolCode: Array(String),
  scheduledStationName: String,
  scheduledProcedureStepLocation: Array(String),
  scheduledAETitle: String,
  
  }, { timestamps: true });
  
export interface HL7ImagingProcedureControlSegmentV5I extends Segment{
  accessionIdentifier: string
  requestedProcedureID: string
  studyInstanceUID: string
  scheduledProcedureStepID: string
  modality: string
  protocolCode: string[]
  scheduledStationName: string
  scheduledProcedureStepLocation: string[]
  scheduledAETitle: string
  
  }
  export const HL7ImagingProcedureControlSegmentV5 = mongoose.model<HL7ImagingProcedureControlSegmentV5Document> ("HL7ImagingProcedureControlSegmentV5", HL7ImagingProcedureControlSegmentV5Schema);

