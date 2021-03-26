
// Generated typescript code of HL7v 2.6 GOL  (Goal Detail)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7GoalDetailV6Document = mongoose.Document & HL7GoalDetailV6I

const HL7GoalDetailV6Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  actionCode: String,
  actionDateTime: String,
  goalID: String,
  goalInstanceID: String,
  episodeOfCareID: String,
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
  
export interface HL7GoalDetailV6I extends Segment{
  actionCode: string
  actionDateTime: string
  goalID: string
  goalInstanceID: string
  episodeOfCareID: string
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
  export const HL7GoalDetailV6 = mongoose.model<HL7GoalDetailV6Document> ("HL7GoalDetailV6", HL7GoalDetailV6Schema);

