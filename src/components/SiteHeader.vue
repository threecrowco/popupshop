<template>
    <header class="border-b border-black">
        <div class="max-w-7xl mx-auto px-8 lg:px-0 flex justify-between items-center">
            <h1 class="font-bold text-2xl">
                <g-link to="/">{{ $static.metadata.siteName }}</g-link>
            </h1>
            <navbar />
        </div>
    </header>
</template>

<script>
import Navbar from './Navbar.vue'
export default {
    name: 'SiteHeader',
    components: {
        Navbar,
    }
}
</script>
<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>