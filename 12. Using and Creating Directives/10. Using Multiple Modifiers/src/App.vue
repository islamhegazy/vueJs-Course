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
                        <!--10. Using Multiple Modifiers-->
                        <p v-local-hieghlight:background.delayed.blink="'red'">Color this</p>
                    </div>
                </div>
            </div>
        </div>
    </template>

    <script>
        export default {
            //9. Registering Directives Locally
            directives : {
                'local-hieghlight': {
                    bind(el, binding, vnode) {
                        //add delayed modifiers
                        var delay = 0;
                        if (binding.modifiers['delayed']) {
                            delay = 3000
                        }
                        if (binding.modifiers['blink']) {
                            let mainColor = binding.value;
                            let secondColor = 'blue';
                            let currentColor = mainColor;
                            setTimeout(() => {
                                setInterval(() => {
                                    currentColor == secondColor
                                        ? currentColor = mainColor
                                        : currentColor = secondColor; 
                                    if (binding.arg == 'background') {
                                        el.style.backgroundColor = currentColor;
                                    } else {
                                        el.style.color = currentColor;
                                    }
                                }, 1000);
                            }, delay);
                        } else {
                            setTimeout(() => {
                                if (binding.arg == 'background') {
                                    el.style.backgroundColor = binding.value;
                                } else {
                                    el.style.color = binding.value;
                                }
                            }, delay);
                        }

                    }
                }
            }
        }
    </script>

    <style></style>