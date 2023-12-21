<template>
    <h1>Listado de Post</h1>
    <ul class="post-list">
        <li v-for = "post in posts" :key = "post.id">{{ post.title }}</li>
    </ul>
</template>

<script>
    import PostService from '@/services/PostService'
    import {defineComponent,onMounted} from 'vue'

    export default defineComponent({
        setup()
        {
            const service = new PostService()
            const posts = service.getPosts()
            onMounted(async () => 
            {
                await service.fetchAll()
            })
            console.log(posts)
            return{posts}
        }
    })
</script>

<style scoped>

</style>