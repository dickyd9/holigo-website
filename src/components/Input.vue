<template>
    <div class="relative">
        <input 
            v-bind="$attrs"
            class="block w-full pl-6 p-2.5 bg-basic-background border-none text-basic-black text-sm rounded-xl focus:ring-primary-brand focus:border-primary-brand" 
            :value="modelValue"
            :placeholder="placeholder"
            @input="updateInput" 
            required>
    </div>
</template>

<script>
export default {
    name: "input",
    props: {
        modelValue: {
            type: [String, Number],
            required: false,
        },
        placeholder: {
            type: String,
            required: false,
            default: "Enter text here...",
        },
        data: {
            type: [String,Number,Array],
            required: true,
        }
    },
    methods:{
        updateInput(event) {
            this.$emit("update:modelValue", event.target.value);
        }
    }
    
}
</script>

<style>

</style>