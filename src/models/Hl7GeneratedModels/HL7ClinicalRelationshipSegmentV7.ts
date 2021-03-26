
// Generated typescript code of HL7v 2.7 REL  (Clinical Relationship Segment)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ClinicalRelationshipSegmentV7Document = mongoose.Document & HL7ClinicalRelationshipSegmentV7I

const HL7ClinicalRelationshipSegmentV7Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  setIdRel: String,
  relationshipType: String,
  thisRelationshipInstanceIdentifier: String,
  sourceInformationInstanceIdentifier: String,
  targetInformationInstanceIdentifier: String,
  assertingEntityInstanceId: String,
  assertingPerson: String,
  assertingOrganization: String,
  assertorAddress: String,
  assertorContact: String,
  assertionDateRange: String,
  negationIndicator: String,
  certaintyOfRelationship: String,
  priorityNo: Number,
  prioritySequenceNoRelPreferenceForConsideration: Number,
  separabilityIndicator: String,
  
  }, { timestamps: true });
  
export interface HL7ClinicalRelationshipSegmentV7I extends Segment{
  setIdRel: string
  relationshipType: string
  thisRelationshipInstanceIdentifier: string
  sourceInformationInstanceIdentifier: string
  targetInformationInstanceIdentifier: string
  assertingEntityInstanceId: string
  assertingPerson: string
  assertingOrganization: string
  assertorAddress: string
  assertorContact: string
  assertionDateRange: string
  negationIndicator: string
  certaintyOfRelationship: string
  priorityNo: number
  prioritySequenceNoRelPreferenceForConsideration: number
  separabilityIndicator: string
  
  }
  export const HL7ClinicalRelationshipSegmentV7 = mongoose.model<HL7ClinicalRelationshipSegmentV7Document> ("HL7ClinicalRelationshipSegmentV7", HL7ClinicalRelationshipSegmentV7Schema);

