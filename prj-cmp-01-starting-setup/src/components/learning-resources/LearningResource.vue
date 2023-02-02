<template>
    <li>
        <base-card>
            <header>
                <!-- Title -->
                <h3>{{ title }}</h3>
                <!-- Button -->
                <base-button @click="deleteResource(id)" mode="flat">Delete</base-button>
            </header>
            <!-- Description -->
            <p>{{ description }}</p>
            <nav>
                <!-- Link Value -->
                <a :href="link">View Resource</a>
            </nav>
        </base-card>
    </li>
</template>

<script>
import BaseButton from '../UI/BaseButton.vue'

export default {
    components: {
        BaseButton
    },
    props: ['id', 'title', 'description', 'link'],
    inject: ['deleteResource']
}
</script>
<style scope>
li {
    margin: auto;
    max-width: 40rem;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

h3 {
    font-size: 1.25rem;
    margin: 0.5rem 0;
}

p {
    margin: 0.5rem 0;
}

a {
    text-decoration: none;
    color: #ce5c00;
}

a:hover,
a:active {
    color: #c89300;
}
</style>