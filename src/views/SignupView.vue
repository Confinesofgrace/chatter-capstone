<template>
    <div id="signup-frame"> 
        <div id="signup-display"> 

            

            <form> 

                <div> <h2> Sign Up With Your Email </h2>  </div>

                <div id='inputs'>
                        <label for="email">Email:</label>
                        <input type="email" id="email" v-model="email" required  placeholder="johnny@email.com"/>
                        
                </div>

                <div id='inputs'>
                        <label for="password">Password:</label>
                        <input type="password" id="password" v-model="password" required />
                </div>

                <div id='inputs'>
                        <label for="password">Confirm Password:</label>
                        <input type="password" id="password" v-model="password" required />
                </div>

                <p> Already have an account? <RouterLink to= "/login"><b>Log In</b> </RouterLink> </p>
                <div id="for-btns"> Sign UP </div>

            </form>

            


        </div>
    </div>
</template>

<style scoped>
#signup-frame
{
    padding: 120px 40px;

    display: flex;
    align-items: center;
    justify-content: center;

}

#signup-display
{
    width: 50%;
    

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: whitesmoke;
    
}

form
{
    width: 70%;

    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
}

#inputs
{
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 10px 0px;
    
}

form p
{
    font-size: 12px;

    margin-bottom: 10px;
}

form b
{
    font-weight: 700;
}

input
{
    padding: 10px;

    border-style: none;
    border: solid 1px;
    border-color: rgba(223, 95, 240, 0.493);
    border-radius: 10px;
    border-radius: 16px;
}

label
{
    margin: 4px 0px;
}

#for-btns
{
    background-color: rgb(162, 0, 255);

    width: 30%;
    display: flex;
    justify-content: center;

    padding: 8px;

    border-radius: 12px;

    color: white;
    font-size: 16px;
    font-weight: 600;
    
}

</style>