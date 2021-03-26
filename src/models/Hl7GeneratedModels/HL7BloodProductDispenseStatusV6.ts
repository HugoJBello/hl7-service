
// Generated typescript code of HL7v 2.6 BPX  (Blood product dispense status)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7BloodProductDispenseStatusV6Document = mongoose.Document & HL7BloodProductDispenseStatusV6I

const HL7BloodProductDispenseStatusV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIDBPX: String,
  bPDispenseStatus: String,
  bPStatus: String,
  bPDateTimeOfStatus: String,
  bCDonationID: String,
  bCComponent: String,
  bCDonationTypeIntendedUse: String,
  cPCommercialProduct: String,
  cPManufacturer: String,
  cPLotNumber: String,
  bPBloodGroup: String,
  bCSpecialTesting: Array(String),
  bPExpirationDateTime: String,
  bPQuantity: Number,
  bPAmount: Number,
  bPUnits: String,
  bPUniqueID: String,
  bPActualDispensedToLocation: String,
  bPActualDispensedToAddress: String,
  bPDispensedToReceiver: String,
  bPDispensingIndividual: String,
  
  }, { timestamps: true });
  
export interface HL7BloodProductDispenseStatusV6I extends Segment{
  setIDBPX: string
  bPDispenseStatus: string
  bPStatus: string
  bPDateTimeOfStatus: string
  bCDonationID: string
  bCComponent: string
  bCDonationTypeIntendedUse: string
  cPCommercialProduct: string
  cPManufacturer: string
  cPLotNumber: string
  bPBloodGroup: string
  bCSpecialTesting: string[]
  bPExpirationDateTime: string
  bPQuantity: number
  bPAmount: number
  bPUnits: string
  bPUniqueID: string
  bPActualDispensedToLocation: string
  bPActualDispensedToAddress: string
  bPDispensedToReceiver: string
  bPDispensingIndividual: string
  
  }
  export const HL7BloodProductDispenseStatusV6 = mongoose.model<HL7BloodProductDispenseStatusV6Document> ("HL7BloodProductDispenseStatusV6", HL7BloodProductDispenseStatusV6Schema);

