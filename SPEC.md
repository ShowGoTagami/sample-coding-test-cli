# 目標設定 & 進捗トラッカー

コマンドラインで動作する目標管理ツールです。
従業員が目標を設定・更新し、チーム全体の進捗を確認できます。

## 課題のポイント

- コードの構造化
- 関数・クラス・モジュールの整理
- 関心の分離
- メンテナンス性の考慮

---

## コア機能

### 1. 目標を追加する (Add a Goal)

**コマンド:**
```
npm run dev add "Employee Name" "Goal" "Team Name"
```

**レコード内容:**
| フィールド | 説明 |
|-----------|------|
| ID | ユニークな目標ID |
| 従業員名 | 目標を持つ従業員 |
| 目標 | 目標の内容 |
| チーム名 | 所属チーム |
| 作成日 | 作成日時 |
| ステータス | デフォルト: `Not Started` |

---

### 2. 従業員の目標一覧 (List Goals for an Employee)

**コマンド:**
```
npm run dev list "Employee Name"
```

指定した従業員の目標を一覧表示します。

---

### 3. 目標のステータス更新 (Update Goal Status)

**コマンド:**
```
npm run dev update <id> "Status"
```

**例:** 目標ID 1 のステータスを `In Progress` に更新
```
npm run dev update 1 "In Progress"
```

---

### 4. 目標を削除 (Delete a Goal)

**コマンド:**
```
npm run dev delete <id>
```

**例:** 目標ID 2 を削除
```
npm run dev delete 2
```

---

### 5. チーム進捗サマリー (Show Team Progress Summary)

**コマンド:**
```
npm run dev summary "Team Name"
```

チーム全体の目標数を、以下のステータスごとに集計します:
- `Not Started`
- `In Progress`
- `Completed`

---

## 使用例

### 追加 (Add)

```
npm run dev add "Sofi" "Schedule 1:1 meetings with the rest of the team" "Engineering"
```
→ Engineering チームに新しい目標を追加し、Sofi に割り当て。

---

### 一覧表示 (List)

```
npm run dev list "Sofi"
```
→ Sofi に割り当てられた目標を表示。

**出力例:**
```
Not Started:
  "Schedule 1:1 meetings with the rest of the team", Engineering
In Progress:
  "Set goals for the Engineering team", Engineering
Completed:
  N/A
```

---

### 更新 (Update)

```
npm run dev update 2 "In Progress"
```
→ 目標2のステータスを `In Progress` に更新。

---

### 削除 (Delete)

```
npm run dev delete 1
```
→ 目標1を削除。

---

### サマリー (Summary)

```
npm run dev summary "Engineering"
```
→ Engineering チームの目標一覧を表示。

**出力例:**
```
Not Started:
  N/A
In Progress:
  "Schedule 1:1 meetings with the rest of the team", Sofi
Completed:
  N/A
```
