
// Generated typescript code of HL7v 2.8 PRB  (Problem Details)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ProblemDetailsV8Document = mongoose.Document & HL7ProblemDetailsV8I

const HL7ProblemDetailsV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  actionCode: String,
  actionDateTime: String,
  problemId: String,
  problemInstanceId: String,
  episodeOfCareId: String,
  problemListPriority: Number,
  problemEstablishedDateTime: String,
  anticipatedProblemResolutionDateTime: String,
  actualProblemResolutionDateTime: String,
  problemClassification: String,
  problemManagementDiscipline: Array(String),
  problemPersistence: String,
  problemConfirmationStatus: String,
  problemLifeCycleStatus: String,
  problemLifeCycleStatusDateTime: String,
  problemDateOfOnset: String,
  problemOnsetText: String,
  problemRanking: String,
  certaintyOfProblem: String,
  probabilityOfProblem01: Number,
  individualAwarenessOfProblem: String,
  problemPrognosis: String,
  individualAwarenessOfPrognosis: String,
  familySignificantOtherAwarenessOfProblemPrognosis: String,
  securitySensitivity: String,
  problemSeverity: String,
  problemPerspective: String,
  moodCode: String,
  
  }, { timestamps: true });
  
export interface HL7ProblemDetailsV8I extends Segment{
  actionCode: string
  actionDateTime: string
  problemId: string
  problemInstanceId: string
  episodeOfCareId: string
  problemListPriority: number
  problemEstablishedDateTime: string
  anticipatedProblemResolutionDateTime: string
  actualProblemResolutionDateTime: string
  problemClassification: string
  problemManagementDiscipline: string[]
  problemPersistence: string
  problemConfirmationStatus: string
  problemLifeCycleStatus: string
  problemLifeCycleStatusDateTime: string
  problemDateOfOnset: string
  problemOnsetText: string
  problemRanking: string
  certaintyOfProblem: string
  probabilityOfProblem01: number
  individualAwarenessOfProblem: string
  problemPrognosis: string
  individualAwarenessOfPrognosis: string
  familySignificantOtherAwarenessOfProblemPrognosis: string
  securitySensitivity: string
  problemSeverity: string
  problemPerspective: string
  moodCode: string
  
  }
  export const HL7ProblemDetailsV8 = mongoose.model<HL7ProblemDetailsV8Document> ("HL7ProblemDetailsV8", HL7ProblemDetailsV8Schema);

