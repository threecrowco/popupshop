<template>
    <agile :speed="2500" :slides-to-show="3">
        <div class="bg-blue-500 text-white py-56 text-center text-4xl font-bold">
            <h3>Slide One</h3>
        </div>
        <div class="bg-red-500 text-white py-56 text-center text-4xl font-bold">
            <h3>Slide Two</h3>
        </div>
        <div class="bg-green-500 text-white py-56 text-center text-4xl font-bold">
            <h3>Slide Three</h3>
        </div>

        <template slot="prevButton">Prev</template>
        <template slot="nextButton">Next</template>
    </agile>
</template>

<script>
export default {
    name: 'HeroSlider'
}
</script>