
// Generated typescript code of HL7v 2.6 LRL  (Location Relationship)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7LocationRelationshipV6Document = mongoose.Document & HL7LocationRelationshipV6I

const HL7LocationRelationshipV6Schema = new mongoose.Schema({
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
  
export interface HL7LocationRelationshipV6I extends Segment{
  primaryKeyValueLRL: string
  segmentActionCode: string
  segmentUniqueKey: string
  locationRelationshipID: string
  organizationalLocationRelationshipValue: string[]
  patientLocationRelationshipValue: string
  
  }
  export const HL7LocationRelationshipV6 = mongoose.model<HL7LocationRelationshipV6Document> ("HL7LocationRelationshipV6", HL7LocationRelationshipV6Schema);

