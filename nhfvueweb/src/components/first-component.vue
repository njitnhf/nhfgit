<template>
    <div id="firstcomponent">
        <h1>{{ systemtime }}</h1>
        <a> written by:{{ author }} </a>
    </div>
</template>

<script type="text/javascript">

    export default {
        data() {
            return {
                author: "NHF",
                systemtime: Date.now()

            }
        },

    }
</script>

<style>
</style>