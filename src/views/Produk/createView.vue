<template>
  <div class="lg:mx-auto w-full lg:max-w-7xl p-4">
    <div>
      <div class="md:grid md:grid-cols-3">
        <div>
          <br />
          <div class="flex flex-col justify-center items-center">
            <div class="bg-red-50 w-[200px] h-[200px] rounded-full">
              <br /><br /><br />
              <center>
                <svg
                  width="61"
                  height="53"
                  viewBox="0 0 61 53"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.0078 17.2535C23.0078 18.7454 22.4152 20.1761 21.3603 21.231C20.3054 22.2859 18.8747 22.8785 17.3828 22.8785C15.891 22.8785 14.4602 22.2859 13.4053 21.231C12.3504 20.1761 11.7578 18.7454 11.7578 17.2535C11.7578 15.7617 12.3504 14.331 13.4053 13.2761C14.4602 12.2212 15.891 11.6285 17.3828 11.6285C18.8747 11.6285 20.3054 12.2212 21.3603 13.2761C22.4152 14.331 23.0078 15.7617 23.0078 17.2535Z"
                    fill="#E51C23"
                  />
                  <path
                    d="M8.00781 0.378601C6.01869 0.378601 4.11103 1.16878 2.70451 2.5753C1.29799 3.98182 0.507813 5.88948 0.507812 7.8786V45.3786C0.507813 47.3677 1.29799 49.2754 2.70451 50.6819C4.11103 52.0884 6.01869 52.8786 8.00781 52.8786H53.0078C54.9969 52.8786 56.9046 52.0884 58.3111 50.6819C59.7176 49.2754 60.5078 47.3677 60.5078 45.3786V7.8786C60.5078 5.88948 59.7176 3.98182 58.3111 2.5753C56.9046 1.16878 54.9969 0.378601 53.0078 0.378601H8.00781ZM53.0078 4.1286C54.0024 4.1286 54.9562 4.52369 55.6595 5.22695C56.3627 5.93021 56.7578 6.88404 56.7578 7.8786V32.2536L42.5941 24.9524C42.2424 24.7762 41.8442 24.7151 41.4559 24.7777C41.0676 24.8403 40.7088 25.0234 40.4303 25.3011L26.5178 39.2136L16.5428 32.5686C16.1827 32.3288 15.7507 32.221 15.3201 32.2634C14.8895 32.3057 14.4868 32.4957 14.1803 32.8011L4.25781 41.6286V7.8786C4.25781 6.88404 4.6529 5.93021 5.35616 5.22695C6.05942 4.52369 7.01325 4.1286 8.00781 4.1286H53.0078Z"
                    fill="#E51C23"
                  />
                </svg>
              </center>
            </div>
            <div class="">
              <br />
              <b style="color: #e51c23">Tambah Image</b>
            </div>
          </div>
        </div>
        <div class="col-span-2">
          <br />
          <center>
            <div
              class="border rounded bg-white shadow-md p-5"
              style="width: 90%; border-radius: 5px"
            >
              <div>
                <b style="color: #e51c23" class="float-left">Informasi Umum</b>
              </div>
              <br /><br />
              <span class="float-left">Nomor &nbsp; : &nbsp; #16</span>
              <br /><br />

              <div class="mb-4">
                <label
                  class="block float-left text-gray-700 text-sm mb-2"
                  for="username"
                >
                  Nama
                </label>
                <input
                  style="background: #fff8f8"
                  class="border-0 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                />
              </div>

              <div class="mb-4">
                <label
                  class="block float-left uppercase tracking-wide text-gray-700 text-xs mb-2"
                  for="grid-state"
                >
                  Types
                </label>
                <div class="relative">
                  <select
                    style="background: #fff8f8"
                    class="block border-0 appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                  >
                    <option v-for="item in data " :key="item.name">
                      {{ item.name }}
                    </option>
                  </select>
                  <div
                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                  >
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div class="mb-4">
                <label
                  class="float-left block uppercase tracking-wide text-gray-700 text-xs mb-2"
                  for="grid-state"
                >
                  classification
                </label>
                <div class="relative">
                  <select
                    style="background: #fff8f8"
                    class="block border-0 appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                  >
                    <option v-for="item in classification" :key="item.name">
                      {{ item.name }}
                    </option>
                  </select>
                  <div
                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                  >
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div class="mb-4">
                <label
                  class="float-left block uppercase tracking-wide text-gray-700 text-xs mb-2"
                  for="grid-state"
                >
                  resistant
                </label>
                <div class="relative">
                  <select
                    style="background: #fff8f8"
                    class="block border-0 appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                  >
                    <option>....</option>
                  </select>
                  <div
                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                  >
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div
              class="border rounded bg-white shadow-sm p-5"
              style="width: 90%; border-radius: 20px"
            >
              <div>
                <b style="color: #e51c23" class="float-left">Evolution</b>
              </div>
              <br /><br />
              <button style="background: #e51c23; width: 100%;" type="button" @click="modal" class="open-modal-btn text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">+ Tambah </button>
            </div>
          </center>
        <div class="float-right pr-8">
          <button style="background: silver;" type="button" class="open-modal-btn text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"> Batal </button>
          <button style="background: #e51c23;" type="button" class="open-modal-btn text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"> Tambah </button>
        </div>
        </div>

      </div>
    
    </div>
  </div>

  <div class="modal-overlay hide  shadow-xl">
    <div class="modal-wrapper shadow-xl">
      <div class="relative w-full max-w-md max-h-full" style="width: 100%;">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div class="p-6 text-center">
                <svg class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>
                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
                <button data-modal-hide="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                    Yes, I'm sure
                </button>
                <button data-modal-hide="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancel</button>
            </div>
        </div>
    </div>
    </div>
</div>




</template>
<script>
import { onMounted } from "vue";
import { mapGetters } from "vuex";
import data from '../../data/data';
import classification from '../../data/classification'
export default {
  data(){
    return{
      data,
      classification
    }
  },
  setup(props, context) {
    onMounted(() => {
      try {
        context.emit("id-menu", 1);
      } catch (error) {
        console.log(error);
      }
    });
  },
  methods: {
     modal(){
      const openBtn = document.querySelector(".open-modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-modal-btn");
 
function openModal() {
    modal.classList.remove("hide");
}
 
function closeModal(e, clickedOutside) {
    if (clickedOutside) {
        if (e.target.classList.contains("modal-overlay"))
            modal.classList.add("hide");
    } else modal.classList.add("hide");
}
 
openBtn.addEventListener("click", openModal);
modal.addEventListener("click", (e) => closeModal(e, true));
closeBtn.addEventListener("click", closeModal);
     }
  },
};
</script>
<style>
.modal-overlay {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
}

.modal-wrapper {
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

.open-modal-btn-wrapper {
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

.close-modal-btn,
.open-modal-btn {
	padding: 8px;
	font-family: Verdana, Geneva, Tahoma, sans-serif;
	font-size: 15px;
	font-weight: 5px;

	margin-left: auto;
	margin-top: 10px;
	margin-right: 10px;
	cursor: pointer;
}

.close-btn-wrapper {
	display: flex;
}

.modal-content {
	margin: 20px auto;
	max-width: 210px;
	width: 100%;
}

.hide {
	display: none;
}

h1 {
	text-align: center;
}
</style>