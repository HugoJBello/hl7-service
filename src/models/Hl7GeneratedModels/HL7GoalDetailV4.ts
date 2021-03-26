
// Generated typescript code of HL7v 2.4 GOL  (Goal Detail)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7GoalDetailV4Document = mongoose.Document & HL7GoalDetailV4I

const HL7GoalDetailV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  actionCode: String,
  actionDateTime: Date,
  goalID: String,
  goalInstanceID: String,
  episodeOfCareID: String,
  goalListPriority: Number,
  goalEstablishedDateTime: Date,
  expectedGoalAchieveDateTime: Date,
  goalClassification: String,
  goalManagementDiscipline: String,
  currentGoalReviewStatus: String,
  currentGoalReviewDateTime: Date,
  nextGoalReviewDateTime: Date,
  previousGoalReviewDateTime: Date,
  goalReviewInterval: String,
  goalEvaluation: String,
  goalEvaluationComment: Array(String),
  goalLifeCycleStatus: String,
  goalLifeCycleStatusDateTime: Date,
  goalTargetType: Array(String),
  goalTargetName: Array(String),
  
  }, { timestamps: true });
  
export interface HL7GoalDetailV4I extends Segment{
  actionCode: string
  actionDateTime: Date
  goalID: string
  goalInstanceID: string
  episodeOfCareID: string
  goalListPriority: number
  goalEstablishedDateTime: Date
  expectedGoalAchieveDateTime: Date
  goalClassification: string
  goalManagementDiscipline: string
  currentGoalReviewStatus: string
  currentGoalReviewDateTime: Date
  nextGoalReviewDateTime: Date
  previousGoalReviewDateTime: Date
  goalReviewInterval: string
  goalEvaluation: string
  goalEvaluationComment: string[]
  goalLifeCycleStatus: string
  goalLifeCycleStatusDateTime: Date
  goalTargetType: string[]
  goalTargetName: string[]
  
  }
  export const HL7GoalDetailV4 = mongoose.model<HL7GoalDetailV4Document> ("HL7GoalDetailV4", HL7GoalDetailV4Schema);

