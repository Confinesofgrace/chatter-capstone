<script lang="ts">


</script>


<template>

    

    <div id="loggedin-frame"> 

        <div id="loggedin-display"> 
            <div id="userfeed">
                <div id="userfeed-nav"> 

                        <div id="feed"> plus sign </div>
                        <div id="feed"> For You </div>
                        <div id="feed"> My Posts </div>

                </div>

                <div id="article-feed"> 

                </div>
            </div>

            <hr>

            <div id="sidebar"> </div>
        </div>
    </div>
    
</template>

<style scoped>

#loggedin-frame
{

    padding: 120px 40px;
    width: 100%;
}

#loggedin-display
{
    width: 100%;
    display: flex;
}

#userfeed
{
    width: 60%;
}

#userfeed-nav
{
    display: flex;
}

#feed
{
    background-color: whitesmoke;
    padding: 8px;

    margin: 8px;

    font-size: 12px;

    cursor: pointer;
}

</style>