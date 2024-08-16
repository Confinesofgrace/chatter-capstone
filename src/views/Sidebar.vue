<script lang="ts">
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';
import Recommended from '../views/Recommended.vue'; 

export default defineComponent({
    name: 'Sidebar',
    components: {
        Recommended,
        RouterLink,
    },
});
</script>

<template>
    <div>
        <div style="display: flex; align-self: center; width: 100%;">
            <Recommended />
        </div>
        
        <div id="footer" style="font-size: 12px; display: flex; justify-content: center; gap: 5%;">
            <p>Help</p>

            <RouterLink to="/about">
                <p style="cursor: pointer;">About</p>
            </RouterLink>
            
            <p>Contact</p>
            
            <RouterLink to="terms">
                <p>Terms</p>
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
#footer {
    font-size: 12px;
    display: flex;
    justify-content: center;
    gap: 5%;
}
</style>
