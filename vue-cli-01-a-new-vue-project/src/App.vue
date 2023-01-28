<template>
    <section>
        <header>
            <h1> My Friends</h1>
        </header>
        <ul>
            <friend-contact></friend-contact>
            <friend-contact></friend-contact>
        </ul>
    </section>
</template>

<script>
export default {
    data() {
        return {
            friends: [
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '0720283037',
                    email: 'mauel@gmail.com'
                },
                {
                    id: 'julie',
                    name: 'Julie Morenz',
                    phone: '073 428 3067',
                    email: 'julie@gmail.com'
                },
            ]
        }
    }
}
</script>