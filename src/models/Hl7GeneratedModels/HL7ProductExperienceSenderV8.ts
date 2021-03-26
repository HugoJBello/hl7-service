
// Generated typescript code of HL7v 2.8 PES  (Product Experience Sender)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ProductExperienceSenderV8Document = mongoose.Document & HL7ProductExperienceSenderV8I

const HL7ProductExperienceSenderV8Schema = new mongoose.Schema({
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
  
export interface HL7ProductExperienceSenderV8I extends Segment{
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
  export const HL7ProductExperienceSenderV8 = mongoose.model<HL7ProductExperienceSenderV8Document> ("HL7ProductExperienceSenderV8", HL7ProductExperienceSenderV8Schema);

