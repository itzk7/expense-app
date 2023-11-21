<script>
    import Delete from "$lib/icons/delete-icon.svelte"
    export let category;
    export let expenseDate;
    export let amount;
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
    <button style="border: none;
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
    }
</style>