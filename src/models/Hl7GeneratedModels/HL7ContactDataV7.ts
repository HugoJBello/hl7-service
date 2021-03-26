
// Generated typescript code of HL7v 2.7 CTD  (Contact Data)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ContactDataV7Document = mongoose.Document & HL7ContactDataV7I

const HL7ContactDataV7Schema = new mongoose.Schema({
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
  
export interface HL7ContactDataV7I extends Segment{
  contactRole: string[]
  contactName: string[]
  contactAddress: string[]
  contactLocation: string
  contactCommunicationInformation: string[]
  preferredMethodOfContact: string
  contactIdentifiers: string[]
  
  }
  export const HL7ContactDataV7 = mongoose.model<HL7ContactDataV7Document> ("HL7ContactDataV7", HL7ContactDataV7Schema);

