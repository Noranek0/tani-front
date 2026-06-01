<template>
    <aside class="app-sidebar" id="sidebar">

        <div class="container px-0">
            <!-- Start::main-sidebar -->
            <div class="main-sidebar">

                <!-- Start::nav -->
                <nav class="main-menu-container nav nav-pills sub-open">
                    <div class="landing-logo-container">
                        <div class="horizontal-logo">
                            <router-link to="/dashboard/sales" class="header-logo">
                                <img :src="'/images/brand-logos/desktop-logo.png'" alt="logo" class="desktop-logo">
                                <img :src="'/images/brand-logos/desktop-dark.png'" alt="logo" class="desktop-dark">
                            </router-link>
                        </div>
                    </div>
                    <div class="slide-left" id="slide-left"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191"
                            width="24" height="24" viewBox="0 0 24 24">
                            <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
                        </svg></div>
                    <ul class="main-menu">
                        <!-- Start::slide -->
                        <li class="slide">
                            <a href="#home" :class="`side-menu__item ${activeLink === 'home' ? 'active' : ''}`"
                                :ref="(el) => el && sideMenuItems.push(el)" @click="handleLinkClick('home')">
                                <span class="side-menu__label">Home</span>
                            </a>
                        </li>
                        <!-- End::slide -->
                        <!-- Start::slide -->
                        <li class="slide">
                            <a href="#about" :class="`side-menu__item ${activeLink === 'about' ? 'active' : ''}`"
                                :ref="(el) => el && sideMenuItems.push(el)" @click="handleLinkClick('about')">
                                <span class="side-menu__label">About</span>
                            </a>
                        </li>
                        <!-- End::slide -->

                        <!-- Start::slide -->
                        <li :class="`slide has-sub ${expande ? 'open' : ''} `">
                            <a href="javascript:void(0);"
                                :class="`side-menu__item ${expande ? 'active' : ''} ${isActive ? 'active' : ''} `"
                                :ref="(el) => el && sideMenuItems.push(el)" @click="toggleExpand">
                                <span class="side-menu__label me-2">More</span>
                                <i class="fe fe-chevron-right side-menu__angle op-8"></i>
                            </a>
                            <ul :class="`slide-menu child1 ${expande ? 'active' : ''}`"
                                :style="{ display: expande ? 'block' : 'none' }">
                                <li class="slide">
                                    <a href="#services" :ref="(el) => el && sideMenuItems.push(el)"
                                        @click="handleLinkClick('services')"
                                        :class="`side-menu__item ${activeLink === 'services' ? 'active' : ''}`">Services</a>
                                </li>
                                <li class="slide">
                                    <a href="#expectations" :ref="(el) => el && sideMenuItems.push(el)"
                                        @click="handleLinkClick('expectations')"
                                        :class="`side-menu__item ${activeLink === 'expectations' ? 'active' : ''}`">Expectations</a>
                                </li>
                                <li class="slide">
                                    <a href="#features" :ref="(el) => el && sideMenuItems.push(el)"
                                        @click="handleLinkClick('features')"
                                        :class="`side-menu__item ${activeLink === 'features' ? 'active' : ''}`">Features</a>
                                </li>
                                <li :class="`slide has-sub ${expande1 ? 'open' : ''}`">
                                    <a href="javascript:void(0);" :ref="(el) => el && sideMenuItems.push(el)"
                                        @click="handleSubMenuToggle1" class="side-menu__item">Level-2
                                        <i
                                            :class="`fe fe-chevron-${switcher.direction == 'ltr' ? 'right' : 'left'}  side-menu__angle`"></i></a>
                                    <ul :class="`slide-menu child2 ${expande1 ? 'active' : ''}`"
                                        :style="{ display: expande1 ? 'block' : 'none' }">
                                        <li class="slide">
                                            <a href="javascript:void(0);" :ref="(el) => el && sideMenuItems.push(el)"
                                                class="side-menu__item">Level-2-1</a>
                                        </li>
                                        <li :class="`slide has-sub ${expande2 ? 'open' : ''}`">
                                            <a href="javascript:void(0);" :ref="(el) => el && sideMenuItems.push(el)"
                                                @click="handleSubMenuToggle2" class="side-menu__item">Level-2-2
                                                <i
                                                    :class="`fe fe-chevron-${switcher.direction == 'ltr' ? 'right' : 'left'}  side-menu__angle`"></i></a>
                                            <ul :class="`slide-menu child3 ${expande2 ? 'active' : ''}`"
                                                :style="{ display: expande2 ? 'block' : 'none' }">
                                                <li class="slide">
                                                    <a href="javascript:void(0);"
                                                        :ref="(el) => el && sideMenuItems.push(el)"
                                                        class="side-menu__item">Level-2-2-1</a>
                                                </li>
                                                <li class="slide has-sub">
                                                    <a href="javascript:void(0);"
                                                        :ref="(el) => el && sideMenuItems.push(el)"
                                                        class="side-menu__item">Level-2-2-2</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>

                            </ul>
                        </li>
                        <!-- End::slide -->
                        <!-- Start::slide -->
                        <li class="slide">
                            <a href="#team" :ref="(el) => el && sideMenuItems.push(el)" @click="handleLinkClick('team')"
                                :class="`side-menu__item ${activeLink === 'team' ? 'active' : ''}`">Team</a>
                        </li>
                        <!-- End::slide -->
                        <!-- Start::slide -->
                        <li class="slide">
                            <a href="#pricing" :class="`side-menu__item ${activeLink === 'pricing' ? 'active' : ''}`"
                                :ref="(el) => el && sideMenuItems.push(el)" @click="handleLinkClick('pricing')">
                                <span class="side-menu__label">Pricing</span>
                            </a>
                        </li>
                        <!-- End::slide -->
                        <!-- Start::slide -->
                        <li class="slide">
                            <a href="#faqs" :class="`side-menu__item ${activeLink === 'faqs' ? 'active' : ''}`"
                                :ref="(el) => el && sideMenuItems.push(el)" @click="handleLinkClick('faqs')">
                                <span class="side-menu__label">Faq's</span>
                            </a>
                        </li>
                        <!-- End::slide -->
                        <!-- Start::slide -->
                        <li class="slide">
                            <a href="#testimonials"
                                :class="`side-menu__item ${activeLink === 'testimonials' ? 'active' : ''}`"
                                :ref="(el) => el && sideMenuItems.push(el)" @click="handleLinkClick('testimonials')">
                                <span class="side-menu__label">Testimonials</span>
                            </a>
                        </li>
                        <!-- End::slide -->
                        <!-- Start::slide -->
                        <li class="slide">
                            <a href="#contact" :class="`side-menu__item ${activeLink === 'contact' ? 'active' : ''}`"
                                :ref="(el) => el && sideMenuItems.push(el)" @click="handleLinkClick('contact')">
                                <span class="side-menu__label">Contact Us</span>
                            </a>
                        </li>
                        <!-- End::slide -->

                    </ul>
                    <div class="slide-right" id="slide-right"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191"
                            width="24" height="24" viewBox="0 0 24 24">
                            <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z">
                            </path>
                        </svg></div>
                    <div class="lg:flex hidden">
                        <div class="btn-list lg:flex hidden mt-lg-2 mt-xl-0 mt-0">
                            <router-link to="/authentication/sign-in/sign-in-basic" class="btn btn-wave btn-secondary">
                                Sign Up
                            </router-link>
                            <button
                                class="btn btn-icon btn-primary d-inline-flex align-items-center justify-content-center switcher-icon"
                                data-bs-toggle="offcanvas" data-bs-target="#switcher-canvas">
                                <i class="ri-settings-3-line"></i>
                            </button>
                        </div>
                    </div>
                </nav>
                <!-- End::nav -->

            </div>
            <!-- End::main-sidebar -->
        </div>

    </aside>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { switcherStore } from '~/stores/switcher';

const expande = ref(false)
const expande1 = ref(false)
const expande2 = ref(false)
const activeLink = ref('home')
const isActive = ref(false)
const sideMenuItems = ref<any>([])
const switcher = switcherStore()

const toggleExpand = () => {
    expande.value = !expande.value
}

const handleSubMenuToggle1 = () => {
    expande1.value = !expande1.value
}

const handleSubMenuToggle2 = () => {
    expande2.value = !expande2.value
}

const handleLinkClick = (link: string) => {
    activeLink.value = link
}
</script>
