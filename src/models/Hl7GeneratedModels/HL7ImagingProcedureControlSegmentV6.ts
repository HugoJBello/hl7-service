
// Generated typescript code of HL7v 2.6 IPC  (Imaging Procedure Control Segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ImagingProcedureControlSegmentV6Document = mongoose.Document & HL7ImagingProcedureControlSegmentV6I

const HL7ImagingProcedureControlSegmentV6Schema = new mongoose.Schema({
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
  scheduledStationAETitle: String,
  
  }, { timestamps: true });
  
export interface HL7ImagingProcedureControlSegmentV6I extends Segment{
  accessionIdentifier: string
  requestedProcedureID: string
  studyInstanceUID: string
  scheduledProcedureStepID: string
  modality: string
  protocolCode: string[]
  scheduledStationName: string
  scheduledProcedureStepLocation: string[]
  scheduledStationAETitle: string
  
  }
  export const HL7ImagingProcedureControlSegmentV6 = mongoose.model<HL7ImagingProcedureControlSegmentV6Document> ("HL7ImagingProcedureControlSegmentV6", HL7ImagingProcedureControlSegmentV6Schema);

