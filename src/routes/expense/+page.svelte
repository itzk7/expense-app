<script>
    import ExpenseForm from "../../components/ExpenseForm.svelte";
  import ExpenseList from "../../components/ExpenseList.svelte";
  import { expenses } from "../../stores/expenses.js";

    function deleteExpense(e) {
        expenses.delete(e.detail.expenseID)
    }
    function addExpense(e) {
        expenses.add(e.detail)
    }
</script>

<div class="container">
    <ExpenseForm on:add_expense={addExpense} />
    <ExpenseList on:delete_expense={deleteExpense} expenses={$expenses} />
</div>

<style>
    .container {
        display: flex;
        flex-flow: column;
        align-items: center;
    }
</style>