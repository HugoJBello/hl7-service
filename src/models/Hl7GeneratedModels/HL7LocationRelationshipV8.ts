
// Generated typescript code of HL7v 2.8 LRL  (Location Relationship)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7LocationRelationshipV8Document = mongoose.Document & HL7LocationRelationshipV8I

const HL7LocationRelationshipV8Schema = new mongoose.Schema({
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
  
export interface HL7LocationRelationshipV8I extends Segment{
  primaryKeyValueLrl: string
  segmentActionCode: string
  segmentUniqueKey: string
  locationRelationshipId: string
  organizationalLocationRelationshipValue: string[]
  patientLocationRelationshipValue: string
  
  }
  export const HL7LocationRelationshipV8 = mongoose.model<HL7LocationRelationshipV8Document> ("HL7LocationRelationshipV8", HL7LocationRelationshipV8Schema);

