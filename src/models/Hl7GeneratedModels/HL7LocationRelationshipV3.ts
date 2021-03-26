
// Generated typescript code of HL7v 2.3 LRL  (Location Relationship)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7LocationRelationshipV3Document = mongoose.Document & HL7LocationRelationshipV3I

const HL7LocationRelationshipV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  primaryKeyValue: String,
  segmentActionCode: String,
  segmentUniqueKey: String,
  locationRelationshipID: String,
  organizationalLocationRelationshipValue: String,
  patientLocationRelationshipValue: String,
  
  }, { timestamps: true });
  
export interface HL7LocationRelationshipV3I extends Segment{
  primaryKeyValue: string
  segmentActionCode: string
  segmentUniqueKey: string
  locationRelationshipID: string
  organizationalLocationRelationshipValue: string
  patientLocationRelationshipValue: string
  
  }
  export const HL7LocationRelationshipV3 = mongoose.model<HL7LocationRelationshipV3Document> ("HL7LocationRelationshipV3", HL7LocationRelationshipV3Schema);

