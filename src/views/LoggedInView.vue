<script lang="ts">
import { defineComponent, ref, watch, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import MyPosts from './MyPosts.vue';
import ForYouFeed from './ForYouFeed.vue';

export default defineComponent({
    name: 'LoggedIn',
    components: {
        MyPosts,
        ForYouFeed,
    },
    setup() {
        const route = useRoute();
        const router = useRouter();

        const activeFeed = ref('forYou');
        const selectedInterests = ref<string[]>([]);

        const handleNavigationClick = (feedType: string) => {
            activeFeed.value = feedType;
        };

        // Watch for route changes to update selected interests
        watch(() => route.query.selectedInterests, (newValue) => {
            if (newValue) {
                selectedInterests.value = JSON.parse(newValue as string);
                activeFeed.value = 'interests';  // Show the interests feed by default
            }
        }, { immediate: true });

        return {
            activeFeed,
            selectedInterests,
            handleNavigationClick,
        };
    }
});
</script>

<template>
    <div id="loggedin-frame">
        <div id="loggedin-display">
            <div id="userfeed">
                <div id="userfeed-nav">
                    <RouterLink to="/interests">
                        <div id="feed" @click="handleNavigationClick('interests')"><i class="fas fa-plus"></i> </div> 
                    </RouterLink>
                    <div id="feed" @click="handleNavigationClick('forYou')">For You</div>
                    <div id="feed" @click="handleNavigationClick('myPosts')">My Posts</div>

                    <!-- Display selected interests here -->
                    <div v-if="activeFeed === 'interests'">
                        <h3>Your Selected Interests:</h3>
                        <ul style="display: flex; flex-wrap: wrap; justify-content: center; gap: 6px; list-style: none;">
                            <li v-for="(interest, index) in selectedInterests" :key="index" style="padding: 10px; background-color: #f0f0f0; border-radius: 5px; margin: 5px; font-size: 14px;">{{ interest }}</li>
                        </ul>
                    </div>
                </div>
                <div id="article-feed">
                    <MyPosts v-if="activeFeed === 'myPosts'" />
                    <ForYouFeed v-if="activeFeed === 'forYou'" />
                    
                </div>
            </div>
            <hr style="margin:50px">
            <div id="sidebar" style="width:30%;">
                <div id="footer" style="display:flex; width:100%; justify-content:center; align-items:center; gap:50px; font-size:12px;"> 
                    <RouterLink to="/about"> <p>About </p> </RouterLink>
                    <RouterLink to="/contact"> <p>Contact </p> </RouterLink>
                    <RouterLink to="/terms"> <p>Terms </p> </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#loggedin-frame {
    padding: 120px 40px;
    width: 100%;
}

#loggedin-display {
    width: 100%;
    display: flex;
}

#userfeed {
    width: 60%;
}

#userfeed-nav {
    display: flex;
}

#feed {
    background-color: whitesmoke;
    padding: 8px;
    margin: 8px;
    font-size: 12px;
    cursor: pointer;
    display: flex;
    align-items: center;
}

#feed i {
    margin-right: 5px; /* Add space between icon and text */
}
</style>
