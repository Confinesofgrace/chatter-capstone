<script lang="ts">
import { defineComponent, ref } from 'vue';
import MyPosts from './MyPosts.vue';
import ForYouFeed from './ForYouFeed.vue';  


export default defineComponent({
    name: 'LoggedIn',
    components: {
        MyPosts,
        ForYouFeed,
    },
    setup() {
        const activeFeed = ref('forYou');  // Initialize with 'forYou' as the default feed

        const handleNavigationClick = (feedType: string) => {
            activeFeed.value = feedType;  // Update the active feed based on user selection
        };

        return {
            handleNavigationClick,
            activeFeed,
        };
    },
});
</script>

<template>
    <div id="loggedin-frame">
        <div id="loggedin-display">
            <div id="userfeed">
                <div id="userfeed-nav">
                    <div id="feed" @click="handleNavigationClick('plus')">Plus sign</div>
                    <div id="feed" @click="handleNavigationClick('forYou')">For You</div>
                    <div id="feed" @click="handleNavigationClick('myPosts')">My Posts</div>
                </div>
                <div id="article-feed">
                    <!-- Conditionally render components based on activeFeed value -->
                    <MyPosts v-if="activeFeed === 'myPosts'" />
                    <ForYouFeed v-if="activeFeed === 'forYou'" />
                    <!-- Add content or components for 'Plus sign' feed -->
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
}
</style>
