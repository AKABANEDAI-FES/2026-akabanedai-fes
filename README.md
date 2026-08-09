# 第 10 回 赤羽台祭 公式サイト

https://akabanedai-fes.com/10

## 使用技術

| 目的           | 名前                     |
| -------------- | ------------------------ |
| ホスティング   | Cloudflare Workers       |
| フレームワーク | TanStack Start           |
| スタイリング   | CSS Modules              |
| ヘッドレス UI  | Base UI                  |
| テスト         | Vitest                   |
| 静的検査       | Oxlint, Oxfmt, Stylelint |
| UI カタログ    | Storybook                |

## 開発

### 前提

> [!NOTE]
>
> Windows 環境は想定されていません。Windows ユーザは WSL2 を使用してください

- Node.js 24
- pnpm 11
- Vite+

これらは以下のいずれかの方法でインストールできます。

- [mise](https://mise.jdx.dev) を使用 (推奨)
  - [getting-started](https://mise.jdx.dev/getting-started.html#installing-mise-cli) を参考に mise をインストールします
  - `mise install` でツールをインストールします
- [Nix](https://nixos.org/), [direnv](https://direnv.net/) を使用
  - [basic-installation](https://direnv.net/#basic-installation) を参考に direnv をインストールします
  - `direnv allow` で devShell を有効化します
- 各ツールを個別にインストール
  - インストール手段は上記に限らないため、個別にインストールしても構いません

### セットアップ

1. リポジトリをクローンします

   ```bash
   git clone https://github.com/akabanedai-fes/2026-akabanedai-fes.git
   ```

2. 依存関係をインストールします

   ```bash
   vp install
   ```

3. 開発サーバを起動します

   ```bash
   vpr dev
   ```

4. [http://localhost:5173/10](http://localhost:5173/10) にアクセスします

### 開発コマンド

| コマンド              | 説明                            |
| --------------------- | ------------------------------- |
| `vpr dev`             | 開発サーバを起動                |
| `vpr build`           | ビルド                          |
| `vpr deploy`          | デプロイ                        |
| `vpr check`           | Oxlint, Oxfmt, Stylelint で検査 |
| `vpr fix`             | Oxlint, Oxfmt, Stylelint で修正 |
| `vpr test`            | Vitest でテスト                 |
| `vpr gen:types`       | Cloudflare の型定義を生成       |
| `vpr gen:cmk`         | CSS Modules Kit の型定義を生成  |
| `vpr storybook`       | Storybook を起動                |
| `vpr storybook:build` | Storybook をビルド              |
