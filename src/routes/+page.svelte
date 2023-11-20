<script>
    let amount;
    let expense_type;
    let paid_at;
    let total_amount_spent = 0;

    let expense_logs = []
    $: expense_summary = `you paid ${amount} on ${expense_type} at ${paid_at}`;
    const categories = ['entertainment', 'food', 'travel', 'rent', 'gadgets']

    function addExpense() {
        expense_logs = [...expense_logs, expense_summary]
        total_amount_spent += amount
    }
</script>

<div class = 'container'>
    <h1>Expense Tracker</h1>
    <div class='input-row'>
        <p> Amount </p>
        <input type="number" bind:value={amount}/>
    </div>
    <div class='input-row'>
        <p> Expense type </p>
        <select bind:value={expense_type}>
            {#each categories as category}
                <option value={category}>
                    {category}
                </option>
            {/each}
        </select>        
    </div>
    <div class='input-row'>
        <p> Paid at </p>
        <input type="date" bind:value={paid_at}/>
    </div>

    <div class="input-row">
        <button on:click={addExpense}>
            Add expense
        </button>
    </div>

    <div class="input-row">
        {#if total_amount_spent > 0}
            <h2>Total amount spent: {total_amount_spent}</h2>
        {/if}

        {#if expense_logs.length > 0}
            <h2>Expense logs</h2>
            {#each expense_logs as log}
                <h3>{log}</h3>
            {/each}
        {/if}
    </div>
</div>


<style>
    .container {
        display: flex;
        flex-direction: column;
        background-color: antiquewhite;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .input-row {
        display: flex;
        flex-direction: column;
        padding-bottom: 1em;
        align-items: center;
    }

    button {
        font-family: 'Courier New', Courier, monospace;
        color: black;
        border: 1px solid black;
    }
    button:hover {
        background: antiquewhite;
        cursor: pointer;
    }
    p {
        font-family: 'Courier New', Courier, monospace;
    }

</style>