
// Generated typescript code of HL7v 2.3 CTD  (Contact Data)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ContactDataV3Document = mongoose.Document & HL7ContactDataV3I

const HL7ContactDataV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  contactRole: Array(String),
  contactName: Array(String),
  contactAddress: String,
  contactLocation: String,
  contactCommunicationInformation: Array(String),
  preferredMethodOfContact: String,
  contactIdentifiers: Array(String),
  
  }, { timestamps: true });
  
export interface HL7ContactDataV3I extends Segment{
  contactRole: string[]
  contactName: string[]
  contactAddress: string
  contactLocation: string
  contactCommunicationInformation: string[]
  preferredMethodOfContact: string
  contactIdentifiers: string[]
  
  }
  export const HL7ContactDataV3 = mongoose.model<HL7ContactDataV3Document> ("HL7ContactDataV3", HL7ContactDataV3Schema);

