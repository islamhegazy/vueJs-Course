<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <h1>Built-in Directives</h1>
                <p v-text="'Some Text'"></p>
                <p v-html="'<strong>cxcc</strong>'"></p>
            </div>
            <hr>
        <div class="row">
            <div class="col-xs-12">
                <h1>Custom Directives</h1>
                    <!--add delayed modifiers-->
                <p v-highlight:background.delayed="'red'">Color this</p>
            </div>
        </div>
            </div>
        </div>
    </template>

    <script>
        export default {}
    </script>

    <style></style>