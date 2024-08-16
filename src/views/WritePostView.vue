<template>
  <div id="editor-frame">
    <div id="editor-display">
      <div id="image-for-post">
        <label htmlFor="imageInput">
          <p><b>Insert post image</b></p>
        </label>
        <input type="file" id="imageInput" @change="handleImageUpload" />
        <div v-if="imagePreview" class="image-preview">
          <img :src="imagePreview" alt="Post Image Preview" />
        </div>
      </div>

      <input
        type="text"
        v-model="title"
        placeholder="Enter title here..."
        id="title-input"
      />
      <textarea
        v-model="postContent"
        placeholder="Write your post here..."
        id="post-input"
      ></textarea>
      <div id="editor-actions">
        <button @click="showPreview">Preview</button>
        <button @click="publishPost">Publish</button>
      </div>
      <div v-if="showingPreview" id="preview-container">
        <h2>{{ title }}</h2>
        <div v-html="postContent"></div>
        <div v-if="imagePreview" class="image-preview">
          <img :src="imagePreview" alt="Post Image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const title = ref('');
const postContent = ref('');
const showingPreview = ref(false);
const imagePreview = ref<string | ArrayBuffer | null>(null);

const showPreview = () => {
  showingPreview.value = true;
};

const publishPost = () => {
  // Handle publishing logic (e.g., save to database)
  console.log('Publishing Post:', { title: title.value, content: postContent.value });
  // Optionally reset the input fields
  title.value = '';
  postContent.value = '';
  imagePreview.value = null;
  showingPreview.value = false;
};

const handleImageUpload = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files[0]) {
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      imagePreview.value = reader.result;
      // Optionally, you could also insert the image into the post content here
    };
    reader.readAsDataURL(file);
  }
};
</script>

<style scoped>
#editor-frame 
{
  padding: 120px 40px;
  display: flex;
  justify-content: center;
}

#editor-display 
{
  width: 80%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: whitesmoke;
}

#title-input 
{
  width: 80%;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 6px;
}

#title-input:focus 
{
  outline: none;
}

#post-input 
{
  width: 80%;
  height: 300px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  resize: vertical;
}

#post-input:focus 
{
  outline: none;
}

#editor-actions 
{
  margin-top: 20px;
  display: flex;
  gap: 100px;
}

button 
{
  padding: 8px 16px;
  border: none;
  background-color: #6200ee;
  color: white;
  cursor: pointer;
  border-radius: 16px;
}

button:hover 
{
  background-color: #3700b3;
}


#image-for-post
{
    width: 80%;
}

#imageInput
{
    display: none;
}


.image-preview 
{
  margin: 10px 0px;
}

.image-preview img 
{
  width: 100%;
  border-radius: 8px;
  max-height: 200px;
  object-fit: cover;
}
</style>
