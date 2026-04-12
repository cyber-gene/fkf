# 自由から揚げ財団 ウェブサイト

自由ソフトウェア財団（FSF）のパロディ団体「自由から揚げ財団」の公式サイト。
から揚げを自由に楽しむ権利を訴える「自由から揚げ運動」を推進する。

## 技術スタック

- **Astro v6** — 静的サイトジェネレーター
- **Tailwind CSS v4** — `@tailwindcss/vite` 経由で使用
- **Netlify** — ホスティング（`netlify.toml` に設定済み）

## 開発コマンド

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ に出力
```

## ディレクトリ構成

```
src/
  layouts/Layout.astro   # 共通レイアウト（フォント・CSS インポート）
  pages/index.astro      # メインページ（シングルページ構成）
  styles/global.css      # Tailwind v4 エントリーポイント・カスタムテーマ
public/
  favicon.svg
netlify.toml             # Node.js 22 / ビルド設定
```

## カスタムカラー

Tailwind の `@theme` で定義（`src/styles/global.css`）。

| トークン | 用途 |
|---|---|
| `cream-50/100/200` | 背景・ライト系 |
| `karaage-gold/amber/light/dark` | アクセントカラー |
| `brown-600/700/800/900` | テキスト・ダーク系 |

## Git ワークフロー

- **main ブランチへの直接コミットは禁止**
- 改修作業は必ず専用の開発ブランチを作成して行う（例: `feature/add-section`、`fix/layout-bug`）
- 作業完了後は GitHub に PR を作成する（`gh pr create` を使用）
- PR は main ブランチへのマージを対象とする
- **ドキュメントのみの変更**（README.md、CLAUDE.md など）はコミットメッセージに `[skip ci]` を付ける（Netlify の不要なビルドを防ぐため）

## コンテンツ方針

- 表記は日本語「自由から揚げ財団」に統一（"Free Karaage Foundation" は使わない）
- FSF の哲学的なトーンを保ちつつ、ユーモアを忘れない
- 四つの自由は 1〜4 の番号（0 始まりではない）
