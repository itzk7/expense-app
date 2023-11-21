<script>
    import ExpenseForm from "../../components/ExpenseForm.svelte";
  import ExpenseList from "../../components/ExpenseList.svelte";
  import { expenses } from "../../stores/expenses.js";

    function addExpense(e) {
        expenses.add(e.detail)
    }
</script>

<ExpenseForm on:add_expense={addExpense} />
<ExpenseList expenses={$expenses} />