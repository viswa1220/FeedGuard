import { Bin, RiskResult } from "./types"

export function calculateRisk(bin: Bin): RiskResult {
  const daysLeft = bin.feedLevel / bin.dailyUsage

  if (bin.weather === "severe" && daysLeft <= 2) {
    return {
      risk: "CRITICAL",
      message: "Severe weather may delay delivery. Feed outage likely within 24–48 hours."
    }
  }

  if (daysLeft <= 3) {
    return {
      risk: "AT_RISK",
      message: "Feed levels are low. Monitor closely."
    }
  }

  return {
    risk: "SAFE",
    message: "Feed levels are stable."
  }
}
