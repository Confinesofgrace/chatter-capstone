<template>
    <div id="profile-frame" style="padding:120px 40px;"> 
        <div id="profile-display" style="margin-top:10px;"> 
            <h2 style="font-size:50px; font-weight:600;"> Settings </h2>

            <div id="profile-navbar" style="display:flex; align-items:center; margin:20px 0px;"> 
                <div id="profile-navs"> Account </div>
                <div id="profile-navs"> Notifications </div>
                <div id="profile-navs"> Security </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
   #profile-navs
{
    padding: 8px;
    margin: 8px;

    font-size: 14px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;

    color: black;
    transition: color 0.3s ease, color 0.3s ease;
}

#profile-navs.active 
{
    font-weight: 700;
    color: #371557; 

    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.055); 
}
</style>