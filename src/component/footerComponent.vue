<script>
export default {

}
</script>

<template>
    <div class="bg-white text-black py-6">
        <div class="max-w-5xl mx-auto flex justify-between items-center">
            <div class="text-sm">
                &copy; {{ new Date().getFullYear() }} Weather App. Built with Vue.js &amp; Tailwind CSS
            </div>
            <div>
                <ul class="flex gap-5">
                    <li>About</li>
                    <li>Contact</li>
                    <li>Privacy</li>
                </ul>
            </div>
        </div>
    </div>
</template>