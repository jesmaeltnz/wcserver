<template>
    <div class = 'container-signup'>
      <div class = 'row'>
        <div class = 'col-md-8'>
            <h2>Create an Account</h2>
            <form @submit.prevent = 'registerUser'>
              <div class = 'form-group text-left'>
                <label for = 'First Name'>First Name</label>
                <input type = 'text' name='fname' id='fname' placeholder='Enter First Name' v-model='fname' class='form-control'/>
              </div>
              <div class = 'form-group text-left'>
                <label for = 'Middle Initial'>Middle Initial</label>
                <input type = 'text' name='mname' id='mname' placeholder='Enter Middle Name' v-model='mname' class='form-control'/>
              </div>
              <div class = 'form-group text-left'>
                <label for = 'Last Name'>Last Name</label>
                <input type = 'text' name='lname' id='lname' placeholder='Enter Last Name' v-model='lname' class='form-control'/>
              </div>
              <div class = 'form-group text-left'>
                <label for = 'Contact No'>Contact No.</label>
                <input type = 'text' name='contact' id='conact' placeholder='Enter Contact No.' v-model='contact' class='form-control'/>
              </div>
              <div class = 'form-group text-left'>
                <label for = 'Birthdate'>Birthdate</label>
                <input type = 'date' name='birthdate' id='birthdate' placeholder='Enter Birth Date' v-model='birthdate' class='form-control'/>
              </div>
              <div class = 'form-group text-left'>
                <label for = 'Address'>Address</label>
                <input type = 'text' name='address' id='address' placeholder='Enter Address' v-model='address' class='form-control'/>
              </div>
              <div class = 'form-group text-left'>
                <label for = 'Email Address'>Email Address</label>
                <input type = 'text' name='email' id='email' placeholder='Enter Email Address' v-model='email' class='form-control'/>
              </div>
              <div class = 'form-group text-left'>
                <label for = 'Username'>Username</label>
                <input type = 'text' name='uname' id='uname' placeholder='Enter Username' v-model='uname' class='form-control'/>
              </div>
              <div class = 'form-group text-left'>
                <label for = 'Password'>Password</label>
                <input type = 'password' name='pass' id='pass' placeholder='Enter Password' v-model='pass' class='form-control'/>
              </div>
              <button type="submit" class="btn btn-primary mx-3">Register</button>
              <button type="submit" class="btn btn-light mx-3">Cancel</button>
              
            </form>
          </div>
       </div>
      </div>
</template>

<script>

export default{
  data() {
    return {
      fname:'',
      mname: '',
      lname: '',
      contact: '',
      birthdate: '',
      address: '',
      email: '',
      uname: '',
      pass: ''
    }
  },
  methods:{
      registerUser(){
        if (this.fname === '') {
          alert('Please enter your First Name.')
        }
      }
  }
}
</script>

<style>

</style>