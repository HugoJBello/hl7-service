
// Generated typescript code of HL7v 2.5 PES  (Product Experience Sender)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ProductExperienceSenderV5Document = mongoose.Document & HL7ProductExperienceSenderV5I

const HL7ProductExperienceSenderV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  senderOrganizationName: Array(String),
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
  
export interface HL7ProductExperienceSenderV5I extends Segment{
  senderOrganizationName: string[]
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
  export const HL7ProductExperienceSenderV5 = mongoose.model<HL7ProductExperienceSenderV5Document> ("HL7ProductExperienceSenderV5", HL7ProductExperienceSenderV5Schema);

