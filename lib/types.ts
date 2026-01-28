export type WeatherCondition = "normal" | "severe"

export type RiskLevel = "SAFE" | "AT_RISK" | "CRITICAL"

export interface Bin {
  id: string
  name: string
  feedLevel: number      // %
  dailyUsage: number     // % per day
  weather: WeatherCondition
}

export interface RiskResult {
  risk: RiskLevel
  message: string
}
