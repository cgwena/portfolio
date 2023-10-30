<template>
    <div class="bloc-modale" v-if="revele">
        <div class="overlay" @click="toggleModale">
            <div class="modale">
                <p>Message envoyé à {{ mail }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Mail_message',
    data() {
        return {
            mail: import.meta.env.VITE_MAIL_ADRESS
        }
    },
    props: ['revele', 'toggleModale']
}
</script>

<style scoped></style>