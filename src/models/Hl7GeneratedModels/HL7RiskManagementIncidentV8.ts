
// Generated typescript code of HL7v 2.8 RMI  (Risk Management Incident)

import mongoose from "mongoose";
import Segment from "./Segment";

export type HL7RiskManagementIncidentV8Document = mongoose.Document & HL7RiskManagementIncidentV8I

const HL7RiskManagementIncidentV8Schema = new mongoose.Schema({
  hl7Segment: String,
  hl7version: String,
  id: String,
  
  riskManagementIncidentCode: String,
  dateTimeIncident: String,
  incidentTypeCode: String,
  
  }, { timestamps: true });
  
export interface HL7RiskManagementIncidentV8I extends Segment{
  riskManagementIncidentCode: string
  dateTimeIncident: string
  incidentTypeCode: string
  
  }
  export const HL7RiskManagementIncidentV8 = mongoose.model<HL7RiskManagementIncidentV8Document> ("HL7RiskManagementIncidentV8", HL7RiskManagementIncidentV8Schema);

