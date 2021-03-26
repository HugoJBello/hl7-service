
// Generated typescript code of HL7v 2.2 BHS  (Batch Header)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7BatchHeaderV2Document = mongoose.Document & HL7BatchHeaderV2I

const HL7BatchHeaderV2Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  batchFieldSeparator: String,
  batchEncodingCharacters: String,
  batchSendingApplication: String,
  batchSendingFacility: String,
  batchReceivingApplication: String,
  batchReceivingFacility: String,
  batchCreationDateTime: Date,
  batchSecurity: String,
  batchNameIdType: String,
  batchComment: String,
  batchControlId: String,
  referenceBatchControlId: String,
  
  }, { timestamps: true });
  
export interface HL7BatchHeaderV2I extends Segment{
  batchFieldSeparator: string
  batchEncodingCharacters: string
  batchSendingApplication: string
  batchSendingFacility: string
  batchReceivingApplication: string
  batchReceivingFacility: string
  batchCreationDateTime: Date
  batchSecurity: string
  batchNameIdType: string
  batchComment: string
  batchControlId: string
  referenceBatchControlId: string
  
  }
  export const HL7BatchHeaderV2 = mongoose.model<HL7BatchHeaderV2Document> ("HL7BatchHeaderV2", HL7BatchHeaderV2Schema);

