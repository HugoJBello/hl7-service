
// Generated typescript code of HL7v 2.4 LRL  (Location Relationship)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7LocationRelationshipV4Document = mongoose.Document & HL7LocationRelationshipV4I

const HL7LocationRelationshipV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  primaryKeyValueLRL: String,
  segmentActionCode: String,
  segmentUniqueKey: String,
  locationRelationshipID: String,
  organizationalLocationRelationshipValue: Array(String),
  patientLocationRelationshipValue: String,
  
  }, { timestamps: true });
  
export interface HL7LocationRelationshipV4I extends Segment{
  primaryKeyValueLRL: string
  segmentActionCode: string
  segmentUniqueKey: string
  locationRelationshipID: string
  organizationalLocationRelationshipValue: string[]
  patientLocationRelationshipValue: string
  
  }
  export const HL7LocationRelationshipV4 = mongoose.model<HL7LocationRelationshipV4Document> ("HL7LocationRelationshipV4", HL7LocationRelationshipV4Schema);

