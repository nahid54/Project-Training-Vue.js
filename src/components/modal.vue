<template>
<section class="bg-light">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="float-left">
          <ul class="navbar-nav text-info mt-2">
            <li class="nav-item small">
              <i class="fa fa-phone fa-rotate-90"></i>
              <span> +8801915441064</span>
              <i class="fa fa-envelope pl-2"></i>
              <span class="pl-2">kowsart544@gmail.com</span>
            </li>
          </ul>
        </div>
        <div class="float-right">
          <a href="" class="nav-link small" data-target="#myModal" data-toggle="modal">Sign in</a>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="myModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title text-muted">Sign in</h4>
          <button type="button" data-dismiss="modal" class="close">x</button>
        </div>
        <div class="modal-body">
          <div class="card">
            <div class="card-body">
              <div class="row ml-5">
                <a href="https://www.facebook.com/kowsarahammed.nahid.3" target="_blank">
                  <img src="../assets/NITC_img/facebook_login.png" style="width: 50px;"></a>
                <a href="" class="ml-2"><img src="../assets/NITC_img/google_login.png" style="width: 50px;"></a>
              </div>
              <form>
                <div class="form-group">
                  <label for="email" class="text-muted">Email</label>
                  <input type="text" class="form-control" placeholder="yourmail@nitc.org.bd" id="email">
                </div>
                <div class="form-group">
                  <label for="password" class="text-muted">Password</label>
                  <input type="password" class="form-control" placeholder="your password" value="" id="password">
                </div>
                <div class="form-group text-right">
                  <a href="#" class="nav-link">Forgot password?</a>
                </div>
                <div class="form-group">
                  <button type="button" class="btn btn-info btn-block" value="">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="modal-foote">
          <p class="small text-center">Not registered? To register click <a href="/#/Registration_From" target="_blank">here.</a></p>

        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>

</script>

<style>

</style>
