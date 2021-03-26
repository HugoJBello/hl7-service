
// Generated typescript code of HL7v 2.6 PCE  (Patient Charge Cost Center Exception)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PatientChargeCostCenterExceptionV6Document = mongoose.Document & HL7PatientChargeCostCenterExceptionV6I

const HL7PatientChargeCostCenterExceptionV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDPCE: String,
  costCenterAccountNumber: String,
  transactionCode: String,
  transactionAmountUnit: String,
  
  }, { timestamps: true });
  
export interface HL7PatientChargeCostCenterExceptionV6I extends Segment{
  setIDPCE: string
  costCenterAccountNumber: string
  transactionCode: string
  transactionAmountUnit: string
  
  }
  export const HL7PatientChargeCostCenterExceptionV6 = mongoose.model<HL7PatientChargeCostCenterExceptionV6Document> ("HL7PatientChargeCostCenterExceptionV6", HL7PatientChargeCostCenterExceptionV6Schema);

