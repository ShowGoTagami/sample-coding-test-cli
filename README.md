# Goal Tracker CLI

目標設定 & 進捗トラッカー - コマンドラインで動作する目標管理ツール

## セットアップ

```bash
npm install
```

## 実行方法

```bash
# 開発モード（ts-node使用）
npm run dev

# ビルド後実行
npm run build
npm start
```

## コマンド一覧

### 目標を追加する

```bash
npm run dev -- add "Employee Name" "Goal" "Team Name"
```

例:
```bash
npm run dev -- add "Sofi" "Schedule 1:1 meetings with the rest of the team" "Engineering"
```

### 従業員の目標一覧を表示

```bash
npm run dev -- list "Employee Name"
```

例:
```bash
npm run dev -- list "Sofi"
```

出力例:
```
Not Started:
  N/A
In Progress:
  "Set goals for the Engineering team", Engineering
Completed:
  "Review code for new feature", Engineering
```

### 目標のステータスを更新

```bash
npm run dev -- update <id> "Status"
```

ステータス値: `Not Started`, `In Progress`, `Completed`

例:
```bash
npm run dev -- update 1 "Completed"
```

### 目標を削除

```bash
npm run dev -- delete <id>
```

例:
```bash
npm run dev -- delete 2
```

### チーム進捗サマリーを表示

```bash
npm run dev -- summary "Team Name"
```

例:
```bash
npm run dev -- summary "Engineering"
```

出力例:
```
Team: Engineering

Not Started:
  N/A
In Progress:
  "Set goals for the Engineering team", Sofi
Completed:
  "Review code for new feature", Sofi
```

## データ

目標データは `data.json` にJSON形式で保存されます。
