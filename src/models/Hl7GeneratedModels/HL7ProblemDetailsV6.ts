
// Generated typescript code of HL7v 2.6 PRB  (Problem Details)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7ProblemDetailsV6Document = mongoose.Document & HL7ProblemDetailsV6I

const HL7ProblemDetailsV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  actionCode: String,
  actionDateTime: String,
  problemID: String,
  problemInstanceID: String,
  episodeOfCareID: String,
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
  probabilityOfProblem: Number,
  individualAwarenessOfProblem: String,
  problemPrognosis: String,
  individualAwarenessOfPrognosis: String,
  familySignificantOtherAwarenessOfProblemPrognosis: String,
  securitySensitivity: String,
  problemSeverity: String,
  problemPerspective: String,
  moodCode: String,
  
  }, { timestamps: true });
  
export interface HL7ProblemDetailsV6I extends Segment{
  actionCode: string
  actionDateTime: string
  problemID: string
  problemInstanceID: string
  episodeOfCareID: string
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
  probabilityOfProblem: number
  individualAwarenessOfProblem: string
  problemPrognosis: string
  individualAwarenessOfPrognosis: string
  familySignificantOtherAwarenessOfProblemPrognosis: string
  securitySensitivity: string
  problemSeverity: string
  problemPerspective: string
  moodCode: string
  
  }
  export const HL7ProblemDetailsV6 = mongoose.model<HL7ProblemDetailsV6Document> ("HL7ProblemDetailsV6", HL7ProblemDetailsV6Schema);

