
// Generated typescript code of HL7v 2.3 PES  (Product Experience Sender)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ProductExperienceSenderV3Document = mongoose.Document & HL7ProductExperienceSenderV3I

const HL7ProductExperienceSenderV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  senderOrganizationName: String,
  senderIndividualName: Array(String),
  senderAddress: Array(String),
  senderTelephone: Array(String),
  senderEventIdentifier: String,
  senderSequenceNumber: Number,
  senderEventDescription: Array(String),
  senderComment: String,
  senderAwareDateTime: Date,
  eventReportDate: Date,
  eventReportTimingType: Array(String),
  eventReportSource: String,
  eventReportedTo: Array(String),
  
  }, { timestamps: true });
  
export interface HL7ProductExperienceSenderV3I extends Segment{
  senderOrganizationName: string
  senderIndividualName: string[]
  senderAddress: string[]
  senderTelephone: string[]
  senderEventIdentifier: string
  senderSequenceNumber: number
  senderEventDescription: string[]
  senderComment: string
  senderAwareDateTime: Date
  eventReportDate: Date
  eventReportTimingType: string[]
  eventReportSource: string
  eventReportedTo: string[]
  
  }
  export const HL7ProductExperienceSenderV3 = mongoose.model<HL7ProductExperienceSenderV3Document> ("HL7ProductExperienceSenderV3", HL7ProductExperienceSenderV3Schema);

