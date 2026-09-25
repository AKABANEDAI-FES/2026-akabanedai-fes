import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'

import * as akabaseClient from '../api/akabase'
import { CampusMap } from './_components/campus-map/campus-map'
import { FirstView } from './_components/first-view/first-view'
import { IntroBackground } from './_components/intro-background/intro-background'
import { PageLinks } from './_components/page-links/page-links'
import { ProgramCarousel } from './_components/program-carousel/program-carousel'
import { ThemeSection } from './_components/theme-section/theme-section'
import { VisitorLinks } from './_components/visitor-links/visitor-links'

import styles from './index.module.css'

const FEATURED_PROGRAM_IDS = [
  '32e90b25-c3b3-41fb-af67-679d2c96da2e', // 縁日
  '2934e004-7835-4d4b-b0f0-cf9e85da45aa', // 人形劇
  '81b3c38f-2408-4c7f-af7e-225a8af84a3c', // 時を超えるチケットと変わらない未来の謎
  '9cf3d2d2-eb2f-46bb-9861-a589f46fd55c', // ダーツ企画
  'a1c2e9f7-5113-437c-92a9-3b1c5401ca51', // AR スタンプラリー
]

// HTML文字列から最初の img タグの src を抽出する関数
const extractFirstImageUrl = (html: string | null): string | null => {
  if (!html) return null
  const match = html.match(/<img[^>]+src=["']([^"']+)["']/i)
  return match?.[1] ?? null
}

// 配列をシャッフルする関数（リロード時のランダム化用）
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const itemI = shuffled[i]
    const itemJ = shuffled[j]
    if (itemI !== undefined && itemJ !== undefined) {
      shuffled[i] = itemJ
      shuffled[j] = itemI
    }
  }
  return shuffled
}

export const Route = createFileRoute('/')({
  loader: () => fetchFeaturedPrograms(),
  component: () => <IndexPage />,
})

const fetchFeaturedPrograms = createServerFn({ method: 'GET' }).handler(async () => {
  const projectDetailPromises = FEATURED_PROGRAM_IDS.map(async (projectId) => {
    try {
      const { data } = await akabaseClient.getProjectsByProjectId({
        path: { projectId },
        throwOnError: true,
      })
      if (!data) return null

      // webContentHtml から写真URLを取得（なければ logoUrl にフォールバック）
      const photoUrl = extractFirstImageUrl(data.webContentHtml) ?? data.logoUrl

      return {
        ...data,
        photoUrl,
      }
    } catch {
      return null
    }
  })

  const fetchedProjects = (await Promise.all(projectDetailPromises)).filter(
    (p): p is NonNullable<typeof p> => p !== null,
  )

  // 取得した企画をランダムにシャッフル
  const programs = shuffleArray(fetchedProjects)

  return { programs }
})

const IndexPage = () => {
  const { programs } = Route.useLoaderData()

  return (
    <main className={styles.main}>
      <IntroBackground>
        <FirstView />
        <ThemeSection />
      </IntroBackground>
      <ProgramCarousel programs={programs} />
      <PageLinks />
      <CampusMap />
      <VisitorLinks />
    </main>
  )
}
