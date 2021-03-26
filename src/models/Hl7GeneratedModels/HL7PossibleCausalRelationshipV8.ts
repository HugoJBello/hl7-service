
// Generated typescript code of HL7v 2.8 PCR  (Possible Causal Relationship)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PossibleCausalRelationshipV8Document = mongoose.Document & HL7PossibleCausalRelationshipV8I

const HL7PossibleCausalRelationshipV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  implicatedProduct: String,
  genericProduct: String,
  productClass: String,
  totalDurationOfTherapy: String,
  productManufactureDate: String,
  productExpirationDate: String,
  productImplantationDate: String,
  productExplantationDate: String,
  singleUseDevice: String,
  indicationForProductUse: String,
  productProblem: String,
  productSerialLotNumber: Array(String),
  productAvailableForInspection: String,
  productEvaluationPerformed: String,
  productEvaluationStatus: String,
  productEvaluationResults: String,
  evaluatedProductSource: String,
  dateProductReturnedToManufacturer: String,
  deviceOperatorQualifications: String,
  relatednessAssessment: String,
  actionTakenInResponseToTheEvent: Array(String),
  eventCausalityObservations: Array(String),
  indirectExposureMechanism: Array(String),
  
  }, { timestamps: true });
  
export interface HL7PossibleCausalRelationshipV8I extends Segment{
  implicatedProduct: string
  genericProduct: string
  productClass: string
  totalDurationOfTherapy: string
  productManufactureDate: string
  productExpirationDate: string
  productImplantationDate: string
  productExplantationDate: string
  singleUseDevice: string
  indicationForProductUse: string
  productProblem: string
  productSerialLotNumber: string[]
  productAvailableForInspection: string
  productEvaluationPerformed: string
  productEvaluationStatus: string
  productEvaluationResults: string
  evaluatedProductSource: string
  dateProductReturnedToManufacturer: string
  deviceOperatorQualifications: string
  relatednessAssessment: string
  actionTakenInResponseToTheEvent: string[]
  eventCausalityObservations: string[]
  indirectExposureMechanism: string[]
  
  }
  export const HL7PossibleCausalRelationshipV8 = mongoose.model<HL7PossibleCausalRelationshipV8Document> ("HL7PossibleCausalRelationshipV8", HL7PossibleCausalRelationshipV8Schema);

