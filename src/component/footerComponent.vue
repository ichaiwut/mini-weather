<script>
export default {

}
</script>

<template>
    <div class="bg-white text-black py-5 flex flex-col">
        <div class="flex flex-col items-center justify-center gap-1 xl:flex-row xl:justify-between  mx-5">
            <div class="text-[13px] text-gray-500 xl:ml-5 mt-2">
                &copy; {{ new Date().getFullYear() }} Weather App. Built with Vue.js &amp; Tailwind CSS
            </div>
            <div>
                <ul class="flex gap-7 text-sm mt-2 font-semibold">
                    <li>About</li>
                    <li>Contact</li>
                    <li>Privacy</li>
                </ul>
            </div>
        </div>
    </div>
</template>