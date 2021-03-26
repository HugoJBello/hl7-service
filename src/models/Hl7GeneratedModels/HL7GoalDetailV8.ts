
// Generated typescript code of HL7v 2.8 GOL  (Goal Detail)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7GoalDetailV8Document = mongoose.Document & HL7GoalDetailV8I

const HL7GoalDetailV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  actionCode: String,
  actionDateTime: String,
  goalId: String,
  goalInstanceId: String,
  episodeOfCareId: String,
  goalListPriority: Number,
  goalEstablishedDateTime: String,
  expectedGoalAchieveDateTime: String,
  goalClassification: String,
  goalManagementDiscipline: String,
  currentGoalReviewStatus: String,
  currentGoalReviewDateTime: String,
  nextGoalReviewDateTime: String,
  previousGoalReviewDateTime: String,
  goalReviewInterval: String,
  goalEvaluation: String,
  goalEvaluationComment: Array(String),
  goalLifeCycleStatus: String,
  goalLifeCycleStatusDateTime: String,
  goalTargetType: Array(String),
  goalTargetName: Array(String),
  moodCode: String,
  
  }, { timestamps: true });
  
export interface HL7GoalDetailV8I extends Segment{
  actionCode: string
  actionDateTime: string
  goalId: string
  goalInstanceId: string
  episodeOfCareId: string
  goalListPriority: number
  goalEstablishedDateTime: string
  expectedGoalAchieveDateTime: string
  goalClassification: string
  goalManagementDiscipline: string
  currentGoalReviewStatus: string
  currentGoalReviewDateTime: string
  nextGoalReviewDateTime: string
  previousGoalReviewDateTime: string
  goalReviewInterval: string
  goalEvaluation: string
  goalEvaluationComment: string[]
  goalLifeCycleStatus: string
  goalLifeCycleStatusDateTime: string
  goalTargetType: string[]
  goalTargetName: string[]
  moodCode: string
  
  }
  export const HL7GoalDetailV8 = mongoose.model<HL7GoalDetailV8Document> ("HL7GoalDetailV8", HL7GoalDetailV8Schema);

