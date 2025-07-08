<script>
export default {

}
</script>

<template>
    <div class="bg-white text-black py-3">
        <div class="container max-w-5xl mx-auto flex flex-col items-center lg:flex-row justify-between px-4 m-2">
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