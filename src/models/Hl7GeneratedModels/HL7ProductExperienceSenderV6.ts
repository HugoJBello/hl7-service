
// Generated typescript code of HL7v 2.6 PES  (Product Experience Sender)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ProductExperienceSenderV6Document = mongoose.Document & HL7ProductExperienceSenderV6I

const HL7ProductExperienceSenderV6Schema = new mongoose.Schema({
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
  senderAwareDateTime: String,
  eventReportDate: String,
  eventReportTimingType: Array(String),
  eventReportSource: String,
  eventReportedTo: Array(String),
  
  }, { timestamps: true });
  
export interface HL7ProductExperienceSenderV6I extends Segment{
  senderOrganizationName: string[]
  senderIndividualName: string[]
  senderAddress: string[]
  senderTelephone: string[]
  senderEventIdentifier: string
  senderSequenceNumber: number
  senderEventDescription: string[]
  senderComment: string
  senderAwareDateTime: string
  eventReportDate: string
  eventReportTimingType: string[]
  eventReportSource: string
  eventReportedTo: string[]
  
  }
  export const HL7ProductExperienceSenderV6 = mongoose.model<HL7ProductExperienceSenderV6Document> ("HL7ProductExperienceSenderV6", HL7ProductExperienceSenderV6Schema);

