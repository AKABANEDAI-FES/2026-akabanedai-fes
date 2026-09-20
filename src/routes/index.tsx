import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'

import * as akabaseClient from '../api/akabase'
import { ProgramCarousel } from './_components/program-carousel/program-carousel'

// 表示したい5つの企画名（上から順にカルーセルに並びます）
const TARGET_PROGRAM_NAMES = [
  '縁日',
  '人形劇',
  '時を超えるチケットと変わらない未来の謎',
  'ダーツ企画',
  'ARスタンプラリー',
] as const

import { CampusMap } from './_components/campus-map/campus-map'
import { PageLinks } from './_components/page-links/page-links'

import styles from './index.module.css'

export const Route = createFileRoute('/')({
  loader: () => fetchTopPageData(),
  component: () => <IndexPage />,
})

// サーバーサイドでのデータ取得
const fetchTopPageData = createServerFn({ method: 'GET' }).handler(async () => {
  const { data } = await akabaseClient.getProjects({ throwOnError: true })

  // 1. 指定した5企画のみを抽出
  const filtered = data.projects.filter((project) =>
    TARGET_PROGRAM_NAMES.includes(project.name as (typeof TARGET_PROGRAM_NAMES)[number]),
  )

  // 2. TARGET_PROGRAM_NAMES の配列順にソート
  const sortedPrograms = filtered.sort((a, b) => {
    return (
      TARGET_PROGRAM_NAMES.indexOf(a.name as (typeof TARGET_PROGRAM_NAMES)[number]) -
      TARGET_PROGRAM_NAMES.indexOf(b.name as (typeof TARGET_PROGRAM_NAMES)[number])
    )
  })

  return {
    programs: sortedPrograms,
  }
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
