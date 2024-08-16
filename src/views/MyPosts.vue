<template>
  <div id="myposts-frame">
    <div v-if="posts.length === 0">
      No posts available. Start writing your first post!
    </div>
    <div v-else id="myposts-display">
      <div v-for="post in posts" :key="post.id" class="post-card">
        <div v-if="post.image" class="post-card-image">
          <img :src="post.image" alt="Post Image" />
        </div>
        <div class="post-card-content">
          <h2>{{ post.title }}</h2>
          <p>{{ post.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebaseConfig'; // Adjust the path to your Firebase config

const posts = ref([]);

const fetchPosts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'posts'));
    querySnapshot.forEach(doc => {
      posts.value.push({ id: doc.id, ...doc.data() });
    });
  } catch (e) {
    console.error('Error fetching documents: ', e);
  }
};

onMounted(fetchPosts);
</script>

<style scoped>
#myposts-frame {
  padding: 120px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#myposts-display {
  display: flex;
  flex-direction: column;
  width: 80%;
}

.post-card {
  background-color: #ffffff;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.post-card-image img {
  width: 100%;
  border-radius: 8px;
  max-height: 200px;
  object-fit: cover;
}

.post-card-content {
  margin-top: 15px;
}

.post-card-content h2 {
  margin: 0;
  font-size: 24px;
  color: #333;
}

.post-card-content p {
  margin-top: 10px;
  font-size: 16px;
  color: #555;
}
</style>
