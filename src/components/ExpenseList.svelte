<script>
    import Expense from "./Expense.svelte";
    export let expenses = []
</script>


{#each expenses as expense}
    <Expense {...expense}/>
{/each}
