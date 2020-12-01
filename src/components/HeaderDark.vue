<template>
		<header>
    <nav class="navbar navbar-default bootsnav  header-light navbar-top navbar-expand-lg on no-full">
        <div class="container-fluid nav-header-container padding-50px-lr">
            <!-- start logo -->
            <div class="col-auto pl-0">
                <a href="/">
                    <img src="../assets/images/logo/logo-dark.svg">
                </a>
            </div>
            <!-- end logo -->
            <div class="col accordion-menu pr-0 pr-md-3">
                <button type="button" class="navbar-toggler collapsed" data-toggle="collapse" data-target="#navbar-collapse-toggle-1">
                    <span class="sr-only">toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <div class="navbar-collapse collapse justify-content-end" id="navbar-collapse-toggle-1">
                    <ul id="accordion" class="nav navbar-nav navbar-left no-margin alt-font text-medium" data-in="" data-out="fadeOut">
                        <li>
                            <g-link to="/services">Services</g-link>
                        </li>
                        <li>
                            <g-link class="nav-elearn" to="/learning">E-learning</g-link>
                        </li>
                        <li>
                            <g-link to="/portfolio">Portfolio</g-link>
                        </li>
                        <li>
                            <g-link to="https://stack.firstmain.org" target="_blank">Blog</g-link>
                        </li>
                        <li>
                            <g-link to="/about">About Us</g-link>
                        </li>
                        <li>
                            <g-link class="nav-contact" to="/contact">Contact Us</g-link>
                        </li>
                        <!-- end menu item -->
                    </ul>
                </div>
            </div>
            <div class="col-auto pr-0">
                <div class="header-social-icon d-none d-md-inline-block">
                    <a href=" https://www.facebook.com/FirstMain1" title="Facebook" target="_blank"><i class="fab fa-facebook-f" aria-hidden="true"></i></a>
                    <a href="https://www.instagram.com/firstmain_/" title="Twitter" target="_blank"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    </nav>
</header>
</template>

<script>
export default {

  name: 'HeaderDark',

  data () {
    return {
    	show:true
    }
  }
}
</script>

<style lang="css" scoped>
</style>