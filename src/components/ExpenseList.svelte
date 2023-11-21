<script>
    import Expense from "./Expense.svelte";
    export let expenses = []
    const expenseHeader = {}
    expenseHeader['category']='Category'
    expenseHeader['amount']='Amount'
    expenseHeader['expenseDate']='Expense Date'
</script>

{#if expenses.length > 0}
    <h2>Expenses</h2>
    <div class="card-container">
        <Expense {...expenseHeader}/>
        {#each expenses as expense}
            <Expense {...expense}/>
        {/each}
    </div>
{/if}


<style>
     .card-container {
        width: 70%;
        background: var(--primary-light) ;
        border-radius: 5px;
        border: 1px solid var(--grey-dark);
        margin-bottom: 10px;
    }

    @media (max-width: 900px) {
    .card-container {
        width: 90%;
    }
}
</style>