
// Generated typescript code of HL7v 2.3 PRB  (Problem Detail)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ProblemDetailV3Document = mongoose.Document & HL7ProblemDetailV3I

const HL7ProblemDetailV3Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  actionCode: String,
  actionDateTime: Date,
  problemID: String,
  problemInstanceID: String,
  episodeOfCareID: String,
  problemListPriority: Number,
  problemEstablishedDateTime: Date,
  anticipatedProblemResolutionDateTime: Date,
  actualProblemResolutionDateTime: Date,
  problemClassification: String,
  problemManagementDiscipline: Array(String),
  problemPersistence: String,
  problemConfirmationStatus: String,
  problemLifeCycleStatus: String,
  problemLifeCycleStatusDateTime: Date,
  problemDateOfOnset: Date,
  problemOnsetText: String,
  problemRanking: String,
  certaintyOfProblem: String,
  probabilityOfProblem: Number,
  individualAwarenessOfProblem: String,
  problemPrognosis: String,
  individualAwarenessOfPrognosis: String,
  familySignificantOtherAwarenessOfProblemPrognosis: String,
  securitySensitivity: String,
  
  }, { timestamps: true });
  
export interface HL7ProblemDetailV3I extends Segment{
  actionCode: string
  actionDateTime: Date
  problemID: string
  problemInstanceID: string
  episodeOfCareID: string
  problemListPriority: number
  problemEstablishedDateTime: Date
  anticipatedProblemResolutionDateTime: Date
  actualProblemResolutionDateTime: Date
  problemClassification: string
  problemManagementDiscipline: string[]
  problemPersistence: string
  problemConfirmationStatus: string
  problemLifeCycleStatus: string
  problemLifeCycleStatusDateTime: Date
  problemDateOfOnset: Date
  problemOnsetText: string
  problemRanking: string
  certaintyOfProblem: string
  probabilityOfProblem: number
  individualAwarenessOfProblem: string
  problemPrognosis: string
  individualAwarenessOfPrognosis: string
  familySignificantOtherAwarenessOfProblemPrognosis: string
  securitySensitivity: string
  
  }
  export const HL7ProblemDetailV3 = mongoose.model<HL7ProblemDetailV3Document> ("HL7ProblemDetailV3", HL7ProblemDetailV3Schema);

