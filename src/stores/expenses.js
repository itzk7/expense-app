import { writable } from 'svelte/store';

function createExpenseStore() {
    const { subscribe, set, update } = writable([]);

    return {
        subscribe,
        add: (expense) => {
            console.log('333', expense)
            const newExpense = {}
            newExpense['expenseDate'] = expense.expenseDate
            newExpense['category'] = expense.category
            newExpense['amount'] = expense.amount

            update((expenses) => expenses = [...expenses, newExpense])
        }
    }
}

export const expenses = createExpenseStore()