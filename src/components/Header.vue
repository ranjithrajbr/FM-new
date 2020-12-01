<template>
    <header>
        <nav class="navbar navbar-default bootsnav navbar-top header-dark background-transparent white-link navbar-expand-lg">
            <div class="container-fluid nav-header-container padding-50px-lr">
                <!-- start logo -->
                <div class="col-auto pl-0">
                    <g-link to="/">
                        <img src="../assets/images/logo/logo-light.svg">
                    </g-link>
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
                        <ul id="accordion" class="nav navbar-nav text-white navbar-left no-margin alt-font text-medium" data-in="" data-out="fadeOut">
                            <!-- start menu item -->
                            <li>
                                <g-link class="nav-services" to="/services">Services</g-link>
                            </li>
                            <li>
                                <g-link class="nav-elearn" to="/learning">E-learning</g-link>
                            </li>
                            <li>
                                <g-link class="nav-port" to="/portfolio">Portfolio</g-link>
                            </li>
                            <li>
                                <a href="https://stack.firstmain.org" target="_blank">Blog</a>
                            </li>
                            <li>
                                <g-link class="nav-about" to="/about">About Us</g-link>
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
                        <a href="https://www.facebook.com/FirstMain1" title="Facebook" target="_blank"><i class="fab fa-facebook-f" aria-hidden="true"></i></a>
                        <a href="https://www.instagram.com/firstmain_/" title="Twitter" target="_blank"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>
<script>
export default {

    name: '   ',

    data() {
        return {

        }
    }
}
</script>
<style lang="css" scoped>
</style>