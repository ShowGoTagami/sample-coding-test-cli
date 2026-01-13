#!/usr/bin/env node

import * as fs from 'fs';
import * as path from 'path';

// データファイルのパス
const dataFile = path.join(__dirname, '..', 'data.json');

// データを読み込む
function loadData(): any {
    if (fs.existsSync(dataFile)) {
        const raw = fs.readFileSync(dataFile, 'utf-8');
        return JSON.parse(raw);
    }
    return { goals: [], nextId: 1 };
}

// データを保存
function saveData(data: any) {
    fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
}

// メイン処理
const args = process.argv.slice(2);
const command = args[0];

if (command === 'add') {
    // TODO: 目標追加の実装
    // add "Employee Name" "Goal" "Team Name"
    const employeeName = args[1];
    const goal = args[2];
    const teamName = args[3];

    if (!employeeName || !goal || !teamName) {
        console.log('Usage: add "Employee Name" "Goal" "Team Name"');
        process.exit(1);
    }

    const data = loadData();

    // TODO: ここに目標追加のロジックを実装してください
    // 必要な情報:
    // - ユニークな目標ID (data.nextIdを使用)
    // - 従業員名 (employeeName)
    // - 目標の内容 (goal)
    // - チーム名 (teamName)
    // - 作成日 (現在日時)
    // - ステータス (デフォルト: "Not Started")

    console.log('TODO: 目標追加機能を実装してください');

} else if (command === 'list') {
    // list "Employee Name"
    const employeeName = args[1];

    if (!employeeName) {
        console.log('Usage: list "Employee Name"');
        process.exit(1);
    }

    const data = loadData();
    const goals = data.goals;

    // ステータスでグループ化して表示
    const notStarted = [];
    const inProgress = [];
    const completed = [];

    for (let i = 0; i < goals.length; i++) {
        if (goals[i].employeeName === employeeName) {
            if (goals[i].status === 'Not Started') {
                notStarted.push(goals[i]);
            } else if (goals[i].status === 'In Progress') {
                inProgress.push(goals[i]);
            } else if (goals[i].status === 'Completed') {
                completed.push(goals[i]);
            }
        }
    }

    console.log('Not Started:');
    if (notStarted.length === 0) {
        console.log('  N/A');
    } else {
        for (let i = 0; i < notStarted.length; i++) {
            console.log('  "' + notStarted[i].goal + '", ' + notStarted[i].teamName);
        }
    }

    console.log('In Progress:');
    if (inProgress.length === 0) {
        console.log('  N/A');
    } else {
        for (let i = 0; i < inProgress.length; i++) {
            console.log('  "' + inProgress[i].goal + '", ' + inProgress[i].teamName);
        }
    }

    console.log('Completed:');
    if (completed.length === 0) {
        console.log('  N/A');
    } else {
        for (let i = 0; i < completed.length; i++) {
            console.log('  "' + completed[i].goal + '", ' + completed[i].teamName);
        }
    }

} else if (command === 'update') {
    // update <id> "Status"
    const id = parseInt(args[1]);
    const status = args[2];

    if (!id || !status) {
        console.log('Usage: update <id> "Status"');
        process.exit(1);
    }

    if (status !== 'Not Started' && status !== 'In Progress' && status !== 'Completed') {
        console.log('Status must be: Not Started, In Progress, or Completed');
        process.exit(1);
    }

    const data = loadData();
    let found = false;

    for (let i = 0; i < data.goals.length; i++) {
        if (data.goals[i].id === id) {
            data.goals[i].status = status;
            found = true;
            break;
        }
    }

    if (found) {
        saveData(data);
        console.log('Goal ' + id + ' updated to ' + status);
    } else {
        console.log('Goal not found: ' + id);
    }

} else if (command === 'delete') {
    // delete <id>
    const id = parseInt(args[1]);

    if (!id) {
        console.log('Usage: delete <id>');
        process.exit(1);
    }

    const data = loadData();
    const newGoals = [];
    let found = false;

    for (let i = 0; i < data.goals.length; i++) {
        if (data.goals[i].id === id) {
            found = true;
        } else {
            newGoals.push(data.goals[i]);
        }
    }

    if (found) {
        data.goals = newGoals;
        saveData(data);
        console.log('Goal ' + id + ' deleted');
    } else {
        console.log('Goal not found: ' + id);
    }

} else if (command === 'summary') {
    // summary "Team Name"
    const teamName = args[1];

    if (!teamName) {
        console.log('Usage: summary "Team Name"');
        process.exit(1);
    }

    const data = loadData();
    const goals = data.goals;

    const notStarted = [];
    const inProgress = [];
    const completed = [];

    for (let i = 0; i < goals.length; i++) {
        if (goals[i].teamName === teamName) {
            if (goals[i].status === 'Not Started') {
                notStarted.push(goals[i]);
            } else if (goals[i].status === 'In Progress') {
                inProgress.push(goals[i]);
            } else if (goals[i].status === 'Completed') {
                completed.push(goals[i]);
            }
        }
    }

    console.log('Team: ' + teamName);
    console.log('');
    console.log('Not Started:');
    if (notStarted.length === 0) {
        console.log('  N/A');
    } else {
        for (let i = 0; i < notStarted.length; i++) {
            console.log('  "' + notStarted[i].goal + '", ' + notStarted[i].employeeName);
        }
    }

    console.log('In Progress:');
    if (inProgress.length === 0) {
        console.log('  N/A');
    } else {
        for (let i = 0; i < inProgress.length; i++) {
            console.log('  "' + inProgress[i].goal + '", ' + inProgress[i].employeeName);
        }
    }

    console.log('Completed:');
    if (completed.length === 0) {
        console.log('  N/A');
    } else {
        for (let i = 0; i < completed.length; i++) {
            console.log('  "' + completed[i].goal + '", ' + completed[i].employeeName);
        }
    }

} else {
    console.log('Goal Tracker CLI');
    console.log('');
    console.log('Commands:');
    console.log('  add "Employee Name" "Goal" "Team Name"  - Add a new goal');
    console.log('  list "Employee Name"                    - List goals for an employee');
    console.log('  update <id> "Status"                    - Update goal status');
    console.log('  delete <id>                             - Delete a goal');
    console.log('  summary "Team Name"                     - Show team progress summary');
    console.log('');
    console.log('Status values: Not Started, In Progress, Completed');
}
