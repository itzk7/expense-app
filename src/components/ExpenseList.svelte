<script>
    import Expense from "./Expense.svelte";
    export let expenses = []
</script>

{#if expenses.length > 0}
    <h2>Expenses</h2>
    <div class="card-container">
        <div class='card-header'>
            <p>
                Category
            </p>
            <p>
                Expense Date
            </p>
            <p>
                Amount
            </p>
            <p>
                Action
            </p>
        </div>

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

    .card-header {
        font-size: 18px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        font-family: fantasy;
        align-items: center;
        border-bottom: 0.5px solid var(--grey-dark);
    }

    .card-header p {
        width: 25%;
    }

    @media (max-width: 900px) {
    .card-container {
        width: 90%;
    }
}
</style>