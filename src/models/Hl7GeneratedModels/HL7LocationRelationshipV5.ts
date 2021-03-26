
// Generated typescript code of HL7v 2.5 LRL  (Location Relationship)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7LocationRelationshipV5Document = mongoose.Document & HL7LocationRelationshipV5I

const HL7LocationRelationshipV5Schema = new mongoose.Schema({
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
  
export interface HL7LocationRelationshipV5I extends Segment{
  primaryKeyValueLRL: string
  segmentActionCode: string
  segmentUniqueKey: string
  locationRelationshipID: string
  organizationalLocationRelationshipValue: string[]
  patientLocationRelationshipValue: string
  
  }
  export const HL7LocationRelationshipV5 = mongoose.model<HL7LocationRelationshipV5Document> ("HL7LocationRelationshipV5", HL7LocationRelationshipV5Schema);

