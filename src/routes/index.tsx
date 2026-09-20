import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'

import * as akabaseClient from '../api/akabase'
import { CampusMap } from './_components/campus-map/campus-map'
import { PageLinks } from './_components/page-links/page-links'
import { ProgramCarousel } from './_components/program-carousel/program-carousel'

import styles from './index.module.css'

const FEATURED_PROGRAM_IDS = [
  '32e90b25-c3b3-41fb-af67-679d2c96da2e', // 縁日
  '2934e004-7835-4d4b-b0f0-cf9e85da45aa', // 人形劇
  '81b3c38f-2408-4c7f-af7e-225a8af84a3c', // 時を超えるチケットと変わらない未来の謎
  '9cf3d2d2-eb2f-46bb-9861-a589f46fd55c', // ダーツ企画
  'a1c2e9f7-5113-437c-92a9-3b1c5401ca51', // AR スタンプラリー
]

export const Route = createFileRoute('/')({
  loader: () => fetchFeaturedPrograms(),
  component: () => <IndexPage />,
})

const fetchFeaturedPrograms = createServerFn({ method: 'GET' }).handler(async () => {
  const { data } = await akabaseClient.getProjects({ throwOnError: true })

  const programs = FEATURED_PROGRAM_IDS.flatMap(
    (id) => data.projects.find((project) => project.id === id) ?? [],
  )

  return { programs }
})

const IndexPage = () => {
  const { programs } = Route.useLoaderData()

  return (
    <main className={styles.main}>
      <h1>2026 赤羽台祭</h1>
      <ProgramCarousel programs={programs} />
      <PageLinks />
      <CampusMap />
    </main>
  )
}
