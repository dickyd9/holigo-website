<template>
    <div class="w-14 h-8 flex items-center bg-gray-300 rounded-full p-1" :class="{ 'bg-green-400': toggleActive}" >      
        <div class="bg-primary-brand w-6 h-6 rounded-full shadow-md grid content-center justify-center" :class="{ 'translate-x-6': toggleActive}">
            <span class="text-[12px] text-basic-white select-none"> En</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        toggleActive: false,
        }
    }
}
</script>

<style>

</style>