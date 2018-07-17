<template>
  <section class="bg-secondary position-sticky fixed-top">
    <div class="container">
      <div class="row">
        <div class="col-md-12" >
          <nav class="navbar navbar-expand-md  navbar-dark">
            <a href="/" class="navbar-brand"><img src="../assets/NITC_img/NITC_SOLUTIONS.png" style="height: 40px;width: 100px" alt=""></a>
            <button type="button" class="navbar-toggler" data-target="#myMenu" data-toggle="collapse">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse flex-column" id="myMenu">
              <ul class="navbar-nav">
                <li class="nav-item"><a class=" nav-link" href="/">HOME</a></li>

                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">All COURSES</a>
                  <ul class=" dropdown-menu text-center">
                    <li class="nav-item"><a class="nav-link text-muted" href="/#/AllCourses">Training</a></li>
                    <li class="nav-item"><a class="nav-link text-muted" href="#">Workshop</a></li>
                  </ul>
                </li>
                <li class="nav-item"><a class="nav-link" href="http://bitm.org.bd/seip/seip" target="_blank">SEIP</a></li>
                <li class="nav-item"><a  class="nav-link" href="/#/Events">Events</a></li>
                <li class="nav-item dropdown">
                  <a  class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">ABOUT US </a>
                  <ul class="dropdown-menu text-center">
                    <li class="nav-item"><a class="nav-link text-muted" href="http://basis.org.bd/index.php/about" target="_blank">About BASIS</a></li>
                    <li class="nav-item"><a class="nav-link text-muted" href="/#/About_Nitc">About NITC</a></li>
                    <li class= "nav-item dropdown subchild">
                      <a class="nav-link text-muted dropdown-toggle" data-toggle="dropdown" href="#">NITC Overview</a>
                      <ul class="dropdown-menu text-center">
                        <li class="nav-item"><a class="nav-link text-muted" href="/#/Vision_Mission">Vision & Mission</a></li>
                        <li class="nav-item"><a class="nav-link text-muted" href="/#/Core_Values">Core Values</a></li>
                        <li class="nav-item"><a class="nav-link text-muted" href="/#/Capacity">Capacity</a></li>
                        <li class="nav-item"><a class="nav-link text-muted" href="/#/Regular_Training_Program">Regular Training Program</a></li>
                        <li class="nav-item"><a class="nav-link text-muted" href="/#/International_Training_Program">International Training Program</a></li>
                        <li class="nav-item"><a class="nav-link text-muted" href="/#/Benefits">Benefits</a></li>
                      </ul>
                    </li>

                    <li class="nav-item"><a class="nav-link text-muted" href="http://basis.org.bd/index.php/about/executive_councils" target="_blank">BASIS Executive Council</a></li>
                    <li class="nav-item"><a class="nav-link text-muted" href="/#/Management_Committee">Management Committee</a></li>
                    <li class="nav-item"><a class="nav-link text-muted" href="/#/NITC_Secretariat">NITC Secretariat</a></li>
                    <li class="nav-item"><a class="nav-link text-muted" href="/#/NITC_Trainer">NITC Trainer</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </section>
</template>
<script></script>
<style>
  .subchild{
    position:relative;
  }
  .subchild ul{
    display:none !important;
  }
  .subchild:hover ul {
    background-color: #fff;
    border: 1px solid #ededed;
    display: block !important;
    padding: 0;
    position: absolute;
    top: -1px;
    width: 200px;
    z-index: 99;
    margin: 0 0 0 99%;
  }
  .dropdown-menu a:hover {background-color: #ddd}

  .dropdown:hover .dropdown-menu {
    display:block;
  }
</style>
