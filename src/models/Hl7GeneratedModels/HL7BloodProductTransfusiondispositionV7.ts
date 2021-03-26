
// Generated typescript code of HL7v 2.7 BTX  (Blood Product Transfusion/disposition)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7BloodProductTransfusiondispositionV7Document = mongoose.Document & HL7BloodProductTransfusiondispositionV7I

const HL7BloodProductTransfusiondispositionV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdBtx: String,
  bcDonationId: String,
  bcComponent: String,
  bcBloodGroup: String,
  cpCommercialProduct: String,
  cpManufacturer: String,
  cpLotNumber: String,
  bpQuantity: Number,
  bpAmount: Number,
  bpUnits: String,
  bpTransfusionDispositionStatus: String,
  bpMessageStatus: String,
  bpDateTimeOfStatus: String,
  bpTransfusionAdministrator: String,
  bpTransfusionVerifier: String,
  bpTransfusionStartDateTimeOfStatus: String,
  bpTransfusionEndDateTimeOfStatus: String,
  bpAdverseReactionType: Array(String),
  bpTransfusionInterruptedReason: String,
  
  }, { timestamps: true });
  
export interface HL7BloodProductTransfusiondispositionV7I extends Segment{
  setIdBtx: string
  bcDonationId: string
  bcComponent: string
  bcBloodGroup: string
  cpCommercialProduct: string
  cpManufacturer: string
  cpLotNumber: string
  bpQuantity: number
  bpAmount: number
  bpUnits: string
  bpTransfusionDispositionStatus: string
  bpMessageStatus: string
  bpDateTimeOfStatus: string
  bpTransfusionAdministrator: string
  bpTransfusionVerifier: string
  bpTransfusionStartDateTimeOfStatus: string
  bpTransfusionEndDateTimeOfStatus: string
  bpAdverseReactionType: string[]
  bpTransfusionInterruptedReason: string
  
  }
  export const HL7BloodProductTransfusiondispositionV7 = mongoose.model<HL7BloodProductTransfusiondispositionV7Document> ("HL7BloodProductTransfusiondispositionV7", HL7BloodProductTransfusiondispositionV7Schema);

