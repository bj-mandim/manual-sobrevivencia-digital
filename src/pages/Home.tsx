import { Hero } from '../components/sections/Hero'
import { EmergencyUrgentAction } from '../components/sections/EmergencyUrgentAction'
import { SituationGrid } from '../components/sections/SituationGrid'
import { RealScamExamples } from '../components/sections/RealScamExamples'
import { InfoBanner } from '../components/sections/InfoBanner'

export const Home = () => {
  return (
    <>
      <EmergencyUrgentAction />
      <Hero />
      <SituationGrid />
      <RealScamExamples />
      <InfoBanner />
    </>
  )
}
