<template>
    <div class = "container-login">

    <div class="title"> Playground Hub</div>
    
    <div class="footer">All Rights Reserved 2020</div>

      <div class = "row">
        <div class = "col-md-8">

        <h2>Login</h2>
        <form>
            <div class = "form-group">
                <label for="Username">Username</label>
                <input type="text" name="username" id="username" placeholder="Enter Username" v-model="username" class="form-control " required />
            </div>

            <div class = "form-group">
                <label for="pswd">Password</label>
                <input type="password" name="pswd" id="pswd" placeholder="Enter Password" v-model="pswd" class="form-control" required />
            </div>
            
                <label>
                    <input type="checkbox" checked="checked" name="remember" /> Remember me
                </label>

              <button type="submit" class="btn btn-primary mx-3">Login</button>
              <button type="button" class="btn btn-light">Cancel</button>
           
        </form>
        </div>
    </div>
</div>
        
</template>