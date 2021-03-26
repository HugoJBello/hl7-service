
// Generated typescript code of HL7v 2.6 BTX  (Blood Product Transfusion/Disposition)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7BloodProductTransfusionDispositionV6Document = mongoose.Document & HL7BloodProductTransfusionDispositionV6I

const HL7BloodProductTransfusionDispositionV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDBTX: String,
  bCDonationID: String,
  bCComponent: String,
  bCBloodGroup: String,
  cPCommercialProduct: String,
  cPManufacturer: String,
  cPLotNumber: String,
  bPQuantity: Number,
  bPAmount: Number,
  bPUnits: String,
  bPTransfusionDispositionStatus: String,
  bPMessageStatus: String,
  bPDateTimeOfStatus: String,
  bPAdministrator: String,
  bPVerifier: String,
  bPTransfusionStartDateTimeOfStatus: String,
  bPTransfusionEndDateTimeOfStatus: String,
  bPAdverseReactionType: Array(String),
  bPTransfusionInterruptedReason: String,
  
  }, { timestamps: true });
  
export interface HL7BloodProductTransfusionDispositionV6I extends Segment{
  setIDBTX: string
  bCDonationID: string
  bCComponent: string
  bCBloodGroup: string
  cPCommercialProduct: string
  cPManufacturer: string
  cPLotNumber: string
  bPQuantity: number
  bPAmount: number
  bPUnits: string
  bPTransfusionDispositionStatus: string
  bPMessageStatus: string
  bPDateTimeOfStatus: string
  bPAdministrator: string
  bPVerifier: string
  bPTransfusionStartDateTimeOfStatus: string
  bPTransfusionEndDateTimeOfStatus: string
  bPAdverseReactionType: string[]
  bPTransfusionInterruptedReason: string
  
  }
  export const HL7BloodProductTransfusionDispositionV6 = mongoose.model<HL7BloodProductTransfusionDispositionV6Document> ("HL7BloodProductTransfusionDispositionV6", HL7BloodProductTransfusionDispositionV6Schema);

