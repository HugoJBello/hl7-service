
// Generated typescript code of HL7v 2.7 BPX  (Blood Product Dispense Status)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7BloodProductDispenseStatusV7Document = mongoose.Document & HL7BloodProductDispenseStatusV7I

const HL7BloodProductDispenseStatusV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdBpx: String,
  bpDispenseStatus: String,
  bpStatus: String,
  bpDateTimeOfStatus: String,
  bcDonationId: String,
  bcComponent: String,
  bcDonationTypeIntendedUse: String,
  cpCommercialProduct: String,
  cpManufacturer: String,
  cpLotNumber: String,
  bpBloodGroup: String,
  bcSpecialTesting: Array(String),
  bpExpirationDateTime: String,
  bpQuantity: Number,
  bpAmount: Number,
  bpUnits: String,
  bpUniqueId: String,
  bpActualDispensedToLocation: String,
  bpActualDispensedToAddress: String,
  bpDispensedToReceiver: String,
  bpDispensingIndividual: String,
  
  }, { timestamps: true });
  
export interface HL7BloodProductDispenseStatusV7I extends Segment{
  setIdBpx: string
  bpDispenseStatus: string
  bpStatus: string
  bpDateTimeOfStatus: string
  bcDonationId: string
  bcComponent: string
  bcDonationTypeIntendedUse: string
  cpCommercialProduct: string
  cpManufacturer: string
  cpLotNumber: string
  bpBloodGroup: string
  bcSpecialTesting: string[]
  bpExpirationDateTime: string
  bpQuantity: number
  bpAmount: number
  bpUnits: string
  bpUniqueId: string
  bpActualDispensedToLocation: string
  bpActualDispensedToAddress: string
  bpDispensedToReceiver: string
  bpDispensingIndividual: string
  
  }
  export const HL7BloodProductDispenseStatusV7 = mongoose.model<HL7BloodProductDispenseStatusV7Document> ("HL7BloodProductDispenseStatusV7", HL7BloodProductDispenseStatusV7Schema);

