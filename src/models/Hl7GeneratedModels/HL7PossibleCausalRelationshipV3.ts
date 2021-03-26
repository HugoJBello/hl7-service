
// Generated typescript code of HL7v 2.3 PCR  (Possible Causal Relationship)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PossibleCausalRelationshipV3Document = mongoose.Document & HL7PossibleCausalRelationshipV3I

const HL7PossibleCausalRelationshipV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  implicatedProduct: String,
  genericProduct: String,
  productClass: String,
  totalDurationOfTherapy: String,
  productManufactureDate: Date,
  productExpirationDate: Date,
  productImplantationDate: Date,
  productExplantationDate: Date,
  singleUseDevice: String,
  indicationForProductUse: String,
  productProblem: String,
  productSerialLotNumber: Array(String),
  productAvailableForInspection: String,
  productEvaluationPerformed: String,
  productEvaluationStatus: String,
  productEvaluationResults: String,
  evaluatedProductSource: String,
  dateProductReturnedToManufacturer: Date,
  deviceOperatorQualifications: String,
  relatednessAssessment: String,
  actionTakenInResponseToTheEvent: Array(String),
  eventCausalityObservations: Array(String),
  indirectExposureMechanism: Array(String),
  
  }, { timestamps: true });
  
export interface HL7PossibleCausalRelationshipV3I extends Segment{
  implicatedProduct: string
  genericProduct: string
  productClass: string
  totalDurationOfTherapy: string
  productManufactureDate: Date
  productExpirationDate: Date
  productImplantationDate: Date
  productExplantationDate: Date
  singleUseDevice: string
  indicationForProductUse: string
  productProblem: string
  productSerialLotNumber: string[]
  productAvailableForInspection: string
  productEvaluationPerformed: string
  productEvaluationStatus: string
  productEvaluationResults: string
  evaluatedProductSource: string
  dateProductReturnedToManufacturer: Date
  deviceOperatorQualifications: string
  relatednessAssessment: string
  actionTakenInResponseToTheEvent: string[]
  eventCausalityObservations: string[]
  indirectExposureMechanism: string[]
  
  }
  export const HL7PossibleCausalRelationshipV3 = mongoose.model<HL7PossibleCausalRelationshipV3Document> ("HL7PossibleCausalRelationshipV3", HL7PossibleCausalRelationshipV3Schema);

