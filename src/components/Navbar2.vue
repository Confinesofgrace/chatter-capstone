<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { auth } from '../FirebaseConfig'; // Ensure the correct path
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'vue-router';
import { Icon } from '@iconify/vue';

const isLoggedIn = ref(false);
const isOpen = ref(false);
const router = useRouter();

const toggleNavbar = () => {
  isOpen.value = !isOpen.value;
};

// Check authentication status on mount
onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    isLoggedIn.value = !!user;
  });
});

const logout = async () => {

  try {
        await signOut(auth);
        isLoggedIn.value = false;
        router.push ('/');
      } catch (error) {
                        console.error ('Error signing out:', error );
                      }
}

</script>


<template>
  <div>
    <div v-if="isLoggedIn">
      <!-- Navbar2 for logged-in users -->
      <div id="navbar2">
        
        <div id="logo">
          <RouterLink to="/loggedin"> <h2>Chatter</h2> </RouterLink>
        </div>

        <div id="menu">
          <div id="hamburger" @click="toggleNavbar">
            &#9776;
          </div>
        </div>

        <div id="nav-center" :class="{ open: isOpen }">
          <RouterLink to="/loggedin"> <div id="navs" @click="toggleNavbar">Home</div></RouterLink>
          <RouterLink to="/about"><div id="navs" @click="toggleNavbar">About</div></RouterLink>
          <RouterLink to="/myposts"><div id="navs" @click="toggleNavbar">My Posts</div></RouterLink>
          <RouterLink to="/writepost"><div id="navs" @click="toggleNavbar">Write</div></RouterLink>
          <div id="navs" @click="logout">Log Out</div>

          <!--
          <div id="searchbar">  </div>
          <div id="notification"> </div>
          -->
          <RouterLink to="/settings"><div id="profile-pic"> <Icon icon="iconoir:profile-circle" style='font-size: 20px;'/> </div></RouterLink>
        </div>
      </div>
    </div>

    <div v-else>
      <!-- Navbar1 for non-logged-in users -->
      <div id="navbar2">
        <div id="logo">
          <h2>Chatter</h2>
        </div>


        <div id="menu">
          <div id="hamburger" @click="toggleNavbar">
            &#9776;
          </div>
        </div>

        <div id="nav-center" :class="{ open: isOpen }">
          <RouterLink to="/loggedin"> <div id="navs" @click="toggleNavbar">Home</div></RouterLink>
          <RouterLink to="/about"><div id="navs" @click="toggleNavbar">About</div></RouterLink>
          <RouterLink to="/contact"><div id="navs" @click="toggleNavbar">Contact</div></RouterLink>
          <RouterLink to="/"><div id="navs" @click="toggleNavbar">Log Out</div></RouterLink>
          
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
#navbar2 
{
  padding: 20px 120px;
  display: flex;
  align-items: center;
  background-color: whitesmoke;
  
    width: 100%;
  position: absolute;
}

#logo 
{
  width: 10%;
  margin-right: 50px;
  font-size: larger;
  font-weight: 700;
}

#nav-center 
{
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
}


#menu 
{
  display: none;
}

#navs 
{
  padding: 8px 30px;
  border: solid 1px;
  border-color: rgba(162, 0, 255, 0);
  border-radius: 50px;
  cursor: pointer;
  font-size: 14px;
}

#navs:hover 
{
  border-color: rgba(162, 0, 255, 0.507);
}

#navs:active {
  background-color: rgba(162, 0, 255, 0.507);
  color: whitesmoke;
}

/* For responsiveness */
@media screen and (max-width: 1100px) 
{
  #nav-center 
  {
    display: none;
  }

  #menu 
  {
    display: flex;
    justify-content: flex-end;
    width: 70%;
    
    /*
    position: absolute;
    right: 100px;
    bottom: 30px;
    margin: 8px 0px;
    */

  }

  #hamburger 
  {
    font-size: 30px;
    cursor: pointer;
  }

  nav 
  {
    flex-direction: column;
    align-items: flex-start;
  }

  #navs {
    display: flex;
    justify-content: center;
    width: 350px;
  }

  /* Apply 'open' class to show nav items */
  #nav-center.open 
  {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #e9e6e6ee;
    position: absolute;
    top: 125px;
    left: 120px;
    
    z-index: 1;
  }
}

#profile-pic
{
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 50px;
}

#profile-pic:hover 
{
  border: 1px solid;
  border-color: rgba(162, 0, 255, 0.507);
}
</style>

