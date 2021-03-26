
// Generated typescript code of HL7v 2.7 PSH  (Product Summary Header)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ProductSummaryHeaderV7Document = mongoose.Document & HL7ProductSummaryHeaderV7I

const HL7ProductSummaryHeaderV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  reportType: String,
  reportFormIdentifier: String,
  reportDate: String,
  reportIntervalStartDate: String,
  reportIntervalEndDate: String,
  quantityManufactured: String,
  quantityDistributed: String,
  quantityDistributedMethod: String,
  quantityDistributedComment: String,
  quantityInUse: String,
  quantityInUseMethod: String,
  quantityInUseComment: String,
  numberOfProductExperienceReportsFiledByFacility: Array(Number),
  numberOfProductExperienceReportsFiledByDistributor: Array(Number),
  
  }, { timestamps: true });
  
export interface HL7ProductSummaryHeaderV7I extends Segment{
  reportType: string
  reportFormIdentifier: string
  reportDate: string
  reportIntervalStartDate: string
  reportIntervalEndDate: string
  quantityManufactured: string
  quantityDistributed: string
  quantityDistributedMethod: string
  quantityDistributedComment: string
  quantityInUse: string
  quantityInUseMethod: string
  quantityInUseComment: string
  numberOfProductExperienceReportsFiledByFacility: number[]
  numberOfProductExperienceReportsFiledByDistributor: number[]
  
  }
  export const HL7ProductSummaryHeaderV7 = mongoose.model<HL7ProductSummaryHeaderV7Document> ("HL7ProductSummaryHeaderV7", HL7ProductSummaryHeaderV7Schema);

