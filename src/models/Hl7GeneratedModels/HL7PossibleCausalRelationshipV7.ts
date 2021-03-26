
// Generated typescript code of HL7v 2.7 PCR  (Possible Causal Relationship)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7PossibleCausalRelationshipV7Document = mongoose.Document & HL7PossibleCausalRelationshipV7I

const HL7PossibleCausalRelationshipV7Schema = new mongoose.Schema({
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
  
export interface HL7PossibleCausalRelationshipV7I extends Segment{
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
  export const HL7PossibleCausalRelationshipV7 = mongoose.model<HL7PossibleCausalRelationshipV7Document> ("HL7PossibleCausalRelationshipV7", HL7PossibleCausalRelationshipV7Schema);

