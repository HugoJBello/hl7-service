
// Generated typescript code of HL7v 2.5 CTD  (Contact Data)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ContactDataV5Document = mongoose.Document & HL7ContactDataV5I

const HL7ContactDataV5Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  contactRole: Array(String),
  contactName: Array(String),
  contactAddress: Array(String),
  contactLocation: String,
  contactCommunicationInformation: Array(String),
  preferredMethodOfContact: String,
  contactIdentifiers: Array(String),
  
  }, { timestamps: true });
  
export interface HL7ContactDataV5I extends Segment{
  contactRole: string[]
  contactName: string[]
  contactAddress: string[]
  contactLocation: string
  contactCommunicationInformation: string[]
  preferredMethodOfContact: string
  contactIdentifiers: string[]
  
  }
  export const HL7ContactDataV5 = mongoose.model<HL7ContactDataV5Document> ("HL7ContactDataV5", HL7ContactDataV5Schema);

