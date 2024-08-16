<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../FirebaseConfig'; // Adjust the path to your Firebase config

interface Post {
  id: string;
  title: string;
  content: string;
  image?: string; // image is optional
}

const posts = ref<Post[]>([]);

const fetchPosts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'posts'));
    querySnapshot.forEach(doc => {
      // Extract the data and ensure the id is assigned separately
      const data = doc.data();
      const post: Post = {
        id: doc.id,
        title: data.title,
        content: data.content,
        image: data.image // Use optional chaining if image might not be present
      };
      posts.value.push(post);
    });
  } catch (e) {
    console.error('Error fetching documents: ', e);
  }
};

onMounted(fetchPosts);
</script>
