
// Generated typescript code of HL7v 2.4 RMI  (Risk Management Incident)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7RiskManagementIncidentV4Document = mongoose.Document & HL7RiskManagementIncidentV4I

const HL7RiskManagementIncidentV4Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  riskManagementIncidentCode: String,
  dateTimeIncident: Date,
  incidentTypeCode: String,
  
  }, { timestamps: true });
  
export interface HL7RiskManagementIncidentV4I extends Segment{
  riskManagementIncidentCode: string
  dateTimeIncident: Date
  incidentTypeCode: string
  
  }
  export const HL7RiskManagementIncidentV4 = mongoose.model<HL7RiskManagementIncidentV4Document> ("HL7RiskManagementIncidentV4", HL7RiskManagementIncidentV4Schema);

