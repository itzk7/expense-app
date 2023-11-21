<script>
    import Delete from "$lib/icons/delete-icon.svelte"
    import { createEventDispatcher } from "svelte";
    export let category;
    export let expenseDate;
    export let amount;
    export let expenseID;


    const dispatcher = createEventDispatcher();

    function deleteExpense() {
        dispatcher('delete_expense', {
            'expenseID': expenseID
        })
    }
</script>


<div class='card-content'>
    <p>
        {category}
    </p>
    <p>
        {expenseDate}
    </p>
    <p>
        {amount}
    </p>
    <button on:click={deleteExpense} style="border: none;
            background: none;
            cursor: pointer;">
                <Delete />
    </button>    
</div>


<style>
    .card-content {
        font-size: 18px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        font-family: fantasy;
    }

    .card-content p {
        width: 25%;
    }

    .card-content:first-child {
        border-bottom: 0.5px solid var(--grey-dark);

    }

    .card-content:first-child button{
        visibility: hidden;
        cursor: not-allowed;
    }
</style>