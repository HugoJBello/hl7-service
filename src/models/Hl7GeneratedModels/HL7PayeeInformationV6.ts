
// Generated typescript code of HL7v 2.6 PYE  (Payee Information)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PayeeInformationV6Document = mongoose.Document & HL7PayeeInformationV6I

const HL7PayeeInformationV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDPYE: String,
  payeeType: String,
  payeeRelationshipToInvoicePatient: String,
  payeeIdentificationList: Array(String),
  payeePersonName: Array(String),
  payeeAddress: Array(String),
  paymentMethod: String,
  
  }, { timestamps: true });
  
export interface HL7PayeeInformationV6I extends Segment{
  setIDPYE: string
  payeeType: string
  payeeRelationshipToInvoicePatient: string
  payeeIdentificationList: string[]
  payeePersonName: string[]
  payeeAddress: string[]
  paymentMethod: string
  
  }
  export const HL7PayeeInformationV6 = mongoose.model<HL7PayeeInformationV6Document> ("HL7PayeeInformationV6", HL7PayeeInformationV6Schema);

