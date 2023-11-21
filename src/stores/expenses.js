import { writable } from 'svelte/store';

function createExpenseStore() {
    const { subscribe, set, update } = writable([]);

    return {
        subscribe,
        add: (expense) => {
            console.log('333', expense)
            const newExpense = {}
            newExpense['expense_date'] = expense.expense_date
            newExpense['category'] = expense.category
            newExpense['amount'] = expense.amount
            console.log('ddd', newExpense)

            update((expenses) => expenses = [...expenses, newExpense])
        }
    }
}

export const expenses = createExpenseStore()