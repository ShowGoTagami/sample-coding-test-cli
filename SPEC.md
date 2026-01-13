目標設定 & 進捗トラッカー
コマンドラインで動作する目標管理ツールです。
従業員が 目標を設定・更新 し、チーム全体の進捗を確認できます。
本課題のポイントは以下です：
コードの構造化
関数・クラス・モジュールの整理
関心の分離
メンテナンス性の考慮
コア機能
1. 目標を追加する (Add a Goal)
コマンド
add "Employee Name" "Goal" "Team Name"

レコード内容
ユニークな目標ID
従業員名
目標の内容
チーム名
作成日
ステータス（デフォルト: Not Started）

2. 従業員の目標一覧 (List Goals for an Employee)
コマンド
list "Employee Name"

指定した従業員の目標を一覧表示します。
3. 目標のステータス更新 (Update Goal Status)
コマンド
update 1 "In Progress"

例：目標ID 1 のステータスを In Progress に更新。

4. 目標を削除 (Delete a Goal)
コマンド
delete 2

例：目標ID 2 を削除。
5. チーム進捗サマリー (Show Team Progress Summary)
コマンド
summary "Engineering"

例：Engineering チーム全体の目標数を、以下のステータスごとに集計。
Not Started
In Progress
Completed
使用例
追加 (Add)
目標設定 & 進捗トラッカー 2

add "Sofi" "Schedule 1:1 meetings with the rest of the team" "Engineering"
→ Engineering チームに新しい目標を追加し、Sofi に割り当て。
一覧表示 (List)

list "Sofi"
→ Sofi に割り当てられた目標を表示。
Output
Not Started:
"Schedule 1:1 meetings with the rest of the team", Engineering
In Progress:
"Set goals for the Engineering team", Engineering

更新 (Update)
update 2 "In Progress"
→ 目標2のステータスを In Progress に更新。

削除 (Delete)
delete 1
→ 目標1を削除。

サマリー (Summary)
summary "Engineering"
→ Engineering チームの目標一覧を表示。
Not Started: N/A

目標設定 & 進捗トラッカー 3
In Progress: "Schedule 1:1 meetings with the rest of the team", Sofi
Completed: N/A
