
// Generated typescript code of HL7v 2.4 PSH  (Product Summary Header)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ProductSummaryHeaderV4Document = mongoose.Document & HL7ProductSummaryHeaderV4I

const HL7ProductSummaryHeaderV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  reportType: String,
  reportFormIdentifier: String,
  reportDate: Date,
  reportIntervalStartDate: Date,
  reportIntervalEndDate: Date,
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
  
export interface HL7ProductSummaryHeaderV4I extends Segment{
  reportType: string
  reportFormIdentifier: string
  reportDate: Date
  reportIntervalStartDate: Date
  reportIntervalEndDate: Date
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
  export const HL7ProductSummaryHeaderV4 = mongoose.model<HL7ProductSummaryHeaderV4Document> ("HL7ProductSummaryHeaderV4", HL7ProductSummaryHeaderV4Schema);

