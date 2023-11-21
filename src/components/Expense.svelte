<script>
    import Delete from "$lib/icons/delete-icon.svelte"
    export let category;
    export let expense_date;
    export let amount;
</script>


<div class='card-content'>
    <p>
        {category}
    </p>
    <p>
        {expense_date}
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
        justify-content: center;
        font-family: fantasy;
        align-items: center;
    }

    .card-content p {
        width: 25%;
    }


</style>