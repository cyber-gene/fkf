# 自由からあげ財団 ウェブサイト

自由ソフトウェア財団（FSF）のパロディ団体「自由からあげ財団」の公式サイト。
からあげを自由に楽しむ権利を訴える「自由からあげ運動」を推進する。

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
- 作業完了後は以下の **Codex レビューループ** を経てから PR を作成する
- PR は main ブランチへのマージを対象とする
- **ドキュメントのみの変更**（README.md、CLAUDE.md など）はコミットメッセージに `[skip ci]` を付ける（Netlify の不要なビルドを防ぐため）

### PR 作成前の Codex コードレビューループ

実装・コミット完了後、PR を作成する前に必ず以下のループを実行する。

1. `codex review --base main` を実行してレビュー結果を取得する
2. 指摘事項・改善提案がある場合は修正してコミットする
3. 修正後、再度 `codex review --base main` を実行する
4. Codex の指摘が「問題なし」となるまで 2〜3 を繰り返す
5. **Codex・Claude の双方が OK と判断した時点で** `gh pr create` を実行する

> 補足: `gh pr create` 直前の自動レビューは、このリポジトリの標準機能ではない。PreToolUse フックを使う場合は各自のローカル設定に依存するため、未設定の環境では `codex review --base main` を最終確認として扱うこと。

## コンテンツ方針

- 表記は日本語「自由からあげ財団」に統一（"Free Karaage Foundation" は使わない）
- FSF の哲学的なトーンを保ちつつ、ユーモアを忘れない
- 四つの自由は 1〜4 の番号（0 始まりではない）
