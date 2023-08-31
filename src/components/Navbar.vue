<template>
    <div>
        <nav style="background: #E51C23; height: 80px;"
            class="bg-white shadow-xl  dark:bg-white-900 w-full top-0 left-0 dark:border-white-600 bg-opacity-[.6] backdrop-blur-sm dark:bg-opacity-[.7]">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" class="flex items-center">
                   
                    <img v-if="idMenu == 0" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" style="width: 100px;" alt="">
                    <b v-if="idMenu == 1" class="mt-3 text-white m-5">
                        <router-link to="/">
                            <i class="bi bi-arrow-left"></i>  
                        </router-link>
                        <span class="m-5"> Tambah Baru</span> </b>

                    <!-- <span style="color: orange;" class="self-center text-xl font-semibold whitespace-nowrap dark:text-orange">ECOMARKET </span> -->
                </a>
                <div class="flex md:order-2">

                   

                   <router-link to="/product/create" v-if="idMenu == 0">
                       <button style="background: #E51C23;" class="text-white"><i  style="font-size: 40px; padding-right: 40px;" class="bi bi-plus"></i></button>
                   </router-link>
              

                   

                    <button  style="background: orange;" v-on:click="_logout()" v-if="isAuthenticated"
                        class="hidden md:block text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-1 md:mr-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                        Keluar
                    </button>


                    <!-- <button  style="background: orange;" @click="profil()" v-if="isAuthenticated "
                    class="hidden md:block text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-1 md:mr-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                    <i class="bi bi-person"></i>
                   </button>
                    -->
                    
              


                    <!-- <button  style="background: orange;" type="button" id="nav-btn-toggle" @click="navToggle"
                        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button> -->
               
                </div>
                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                        <!-- <li  style="color: black;" class="mt-2">
                            <RouterLink to="/" :class="setActivedNavClass(rl[2])">
                                Produk
                            </RouterLink>
                        </li>
                        <li  style="color: black;" class="mt-2">
                            <RouterLink to="/category" :class="setActivedNavClass(rl[3])">
                                Kategori
                            </RouterLink>
                        </li>
                        
                        <li  style="color: black;" class="mt-2">
                            <RouterLink to="/brand" :class="setActivedNavClass(rl[4])">
                                Brand
                            </RouterLink>
                        </li> -->
                        
                        <!-- <li  style="color: black;" class="mt-2" v-if="isAuthenticated">
                            <RouterLink to="/profile" :class="setActivedNavClass(rl[5])">
                                Devin
                            </RouterLink>
                        </li> -->
                        <li class="mt-2">

                            
                            
                            <router-link  to="/login" v-if="isAuthenticated != true"
                                class="visible md:hidden text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-1 md:mr-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Login
                            </router-link>

                       
                            <router-link to="/register" v-if="isAuthenticated != true"
                                class="visible md:hidden text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-1 md:mr-1 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                register
                            </router-link>
                            
                            <button v-on:click="_logout()" v-if="isAuthenticated"
                                class="visible md:hidden text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-1 md:mr-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                                Keluar
                            </button>
                             
                            <button v-on:click="profil()" v-if="isAuthenticated"
                                class="visible md:hidden text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-1 md:mr-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                               Profil   <i class="bi bi-person"></i>
                            </button>



                          

                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import { ref } from "vue";
export default {
    props: {
        idMenu: Number
    },
    setup(props) {
        const rl = ref([
            false,
            false,
        ]);

        if (props.idMenu == 0) {
            rl.value[0] = true;
        }
        if (props.idMenu == 1) {
            rl.value[1] = true;
        }
        return {
            rl
        }
    },
}
</script>