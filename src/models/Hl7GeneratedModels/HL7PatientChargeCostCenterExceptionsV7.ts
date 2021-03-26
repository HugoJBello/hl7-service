
// Generated typescript code of HL7v 2.7 PCE  (Patient Charge Cost Center Exceptions)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PatientChargeCostCenterExceptionsV7Document = mongoose.Document & HL7PatientChargeCostCenterExceptionsV7I

const HL7PatientChargeCostCenterExceptionsV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdPce: String,
  costCenterAccountNumber: String,
  transactionCode: String,
  transactionAmountUnit: String,
  
  }, { timestamps: true });
  
export interface HL7PatientChargeCostCenterExceptionsV7I extends Segment{
  setIdPce: string
  costCenterAccountNumber: string
  transactionCode: string
  transactionAmountUnit: string
  
  }
  export const HL7PatientChargeCostCenterExceptionsV7 = mongoose.model<HL7PatientChargeCostCenterExceptionsV7Document> ("HL7PatientChargeCostCenterExceptionsV7", HL7PatientChargeCostCenterExceptionsV7Schema);

