
// Generated typescript code of HL7v 2.7 LRL  (Location Relationship)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7LocationRelationshipV7Document = mongoose.Document & HL7LocationRelationshipV7I

const HL7LocationRelationshipV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  primaryKeyValueLrl: String,
  segmentActionCode: String,
  segmentUniqueKey: String,
  locationRelationshipId: String,
  organizationalLocationRelationshipValue: Array(String),
  patientLocationRelationshipValue: String,
  
  }, { timestamps: true });
  
export interface HL7LocationRelationshipV7I extends Segment{
  primaryKeyValueLrl: string
  segmentActionCode: string
  segmentUniqueKey: string
  locationRelationshipId: string
  organizationalLocationRelationshipValue: string[]
  patientLocationRelationshipValue: string
  
  }
  export const HL7LocationRelationshipV7 = mongoose.model<HL7LocationRelationshipV7Document> ("HL7LocationRelationshipV7", HL7LocationRelationshipV7Schema);

