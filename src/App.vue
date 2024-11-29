<template>
    <div v-if="isLoading" class="bg-[#020024] h-screen content-center font-bold text-5xl text-white text-center">
        Loading...</div>
    <div v-else class="overflow-y-hidden">
        <div>
            <div>
                <div
                    class="fixed flex justify-between items-center w-screen px-[10%] py-5 bg-[#020024] text-white z-50">
                    <div class="text-2xl font-bold">My Portfolio</div>

                    <div class="hidden md:flex flex-1 justify-center gap-5">
                        <a href="#home"
                            class="bg-[#3a31d8] px-4 py-2 rounded-lg shadow-lg hover:scale-125 duration-300 hover:shadow-[#3a31d8]">
                            Home
                        </a>
                        <a href="#skills"
                            class="bg-[#3a31d8] px-4 py-2 rounded-lg shadow-lg hover:scale-125 duration-300 hover:shadow-[#3a31d8]">
                            Skills
                        </a>
                        <a href="#Projects"
                            class="bg-[#3a31d8] px-4 py-2 rounded-lg shadow-lg hover:scale-125 duration-300 hover:shadow-[#3a31d8]">
                            Projects
                        </a>
                        <a href="#Experiences"
                            class="bg-[#3a31d8] px-4 py-2 rounded-lg shadow-lg hover:scale-125 duration-300 hover:shadow-[#3a31d8]">
                            Experiences
                        </a>
                        <button @click="downloadResume"
                            class="bg-[#3a31d8] px-4 py-2 rounded-lg shadow-lg hover:scale-125 duration-300 hover:shadow-[#3a31d8]">
                            Resume
                        </button>
                    </div>

                    <div class="md:hidden">
                        <button @click="toggleMenu" aria-label="Toggle Menu" class="focus:outline-none">
                            <Icon icon="mdi:menu" class="w-8 h-8 text-white" />
                        </button>
                    </div>
                </div>

                <div v-if="isMenuOpen" class="fixed inset-0 z-40">
                    <div @click="toggleMenu" class="absolute inset-0 bg-black bg-opacity-50"></div>

                    <div class="absolute top-0 left-0 bg-[#0A0825] w-[70%] h-full flex flex-col gap-8 p-5 "
                        :style="{ transform: isMenuOpen ? 'translateX(0%)' : 'translateX(100%) transition-transform duration-500' }">
                        <button @click="toggleMenu" aria-label="Close Menu" class="self-end focus:outline-none">
                            <Icon icon="mdi:close" class="w-6 h-6 text-white" />
                        </button>
                        <a @click="toggleMenu" href="#home"
                            class="w-3/4 text-left text-lg md:text-xl text-white px-6 py-3">
                            Home
                        </a>
                        <a @click="toggleMenu" href="#skills"
                            class="w-3/4 text-left text-lg md:text-xl text-white px-6 py-3">
                            Skills
                        </a>
                        <a @click="toggleMenu" href="#Projects"
                            class="w-3/4 text-left text-lg md:text-xl text-white px-6 py-3">
                            Projects
                        </a>
                        <a @click="toggleMenu" href="#Experiences"
                            class="w-3/4 text-left text-lg md:text-xl text-white px-6 py-3">
                            Experiences
                        </a>
                        <button @click="toggleMenu" class="w-3/4 text-left text-lg md:text-xl text-white px-6 py-3">
                            Resume
                        </button>
                    </div>
                </div>
            </div>



        </div>
        <div class="pt-[25%] lg:pt-0 grid grid-cols-1 lg:h-screen bg-[#020024] text-white font-Inter px-[10%] content-center lg:grid-cols-2 gap-8"
            id="home">

            <div class="content-center" data-aos="fade-right" data-aos-duration="1000">
                <p class="text-5xl font-bold">Hi I'm {{ Myname }}</p>
                <p class="text-3xl font-semibold text-[#A5A5A5] mt-5">Giving life to your ideas</p>
                <p class="text-xl leading-relaxed mt-10">
                    I am a passionate Full Stack Developer with experience in both front-end and back-end technologies.
                    Skilled in HTML, CSS, JavaScript, and frameworks like React and Django, I create seamless, scalable
                    web
                    applications. With a solid understanding of databases, API development, and version control, I'm
                    committed to delivering high-quality, user-friendly solutions that drive results.
                </p>
                <div class="mt-10">
                    <p class="text-xl font-bold">My network</p>
                    <div class="flex flex-wrap gap-5 mt-5">
                        <div
                            class="flex items-center gap-2 bg-[#3a31d8] px-8 py-2 rounded-lg shadow-lg hover:shadow-[#3a31d8] duration-300">
                            <Icon icon="mdi:github-box" class="w-6 h-6" />
                            <a href="https://github.com/AmineSolbi">AmineSolbi</a>
                        </div>
                        <div
                            class="flex items-center gap-2 bg-[#3a31d8] px-8 py-2 rounded-lg shadow-lg hover:shadow-[#3a31d8] duration-300">
                            <Icon icon="ion:logo-linkedin" class="w-6 h-6" />
                            <a href="https://www.linkedin.com/in/amine-solbi-104a8623a/">Amine Solbi</a>
                        </div>
                        <div
                            class="flex items-center gap-2 bg-[#3a31d8] px-8 py-2 rounded-lg shadow-lg hover:shadow-[#3a31d8] duration-300">
                            <Icon icon="cib:gmail" class="w-6 h-6" />
                            <a href="mailto:aminesolbi4@gmail.com">Aminesolbi4@gmail.com</a>
                        </div>
                    </div>
                </div>


            </div>
            <div class="content-center flex justify-center items-center md:mt-10" data-aos="fade-left"
                data-aos-duration="1000">
                <img src="./assets/images/Me.jpeg" class="w-[300px] sm:w-[400px] h-auto rounded-3xl">
            </div>
        </div>

        <div class="pt-[25%] lg:pt-0 grid lg:h-screen bg-[#020024] text-white font-Inter px-[5%] sm:px-[10%] py-[5%] content-center"
            id="skills">
            <div data-aos="fade-right" data-aos-duration="1000">
                <p class="text-5xl font-bold">Skills</p>
                <div class="mt-10">
                    <div v-for="skills in mySkills" :key="skills.id" class="mt-5">
                        <p class="text-2xl font-bold">{{ skills.Categorie }}</p>
                        <div class="flex flex-wrap gap-5 mt-2">
                            <div v-for="tech in skills.List" :key="tech.Techname"
                                class="flex items-center gap-2 bg-white text-black rounded-full px-4 py-2">
                                <Icon :icon="tech.TechIcon" class="w-6 h-6" />
                                <p class="text-xs font-bold">{{ tech.Techname }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="pt-[25%] lg:pt-0 grid lg:h-screen bg-[#020024] text-white font-Inter lg:px-[5%] sm:px-[10%] py-[5%] content-center"
            id="Projects">
            <div data-aos="fade-left" data-aos-duration="1000">
                <p class="text-5xl font-bold px-[5%]">Projects</p>
                <div class="mt-10">
                    <Carousel class="p-0 lg:p-5 bg-white rounded-lg w-screen lg:w-full" v-bind="config"
                        paginationColor="gray">
                        <Slide v-for="project in myProjects" :key="project.id">
                            <div
                                class="lg:bg-[#020024] bg-blue-500 px-[5%] py-10 text-white rounded-lg p-8 lg:w-[70%] w-[90%]">
                                <p class="text-2xl font-bold">{{ project.Titel }}</p>
                                <div class="text-white rounded-lg p-5 mt-5 flex gap-5 items-center justify-center"
                                    :style="{ backgroundColor: project.ColorHex }">
                                    <Icon :icon="project.IconName" class="w-10 h-auto" />
                                    <p class="text-lg font-bold">{{ project.ImageMain }}</p>
                                </div>
                                <p class="mt-5 text-justify">{{ project.Descreption }}</p>
                                <p class="mt-10 text-xl font-bold">Technologies used</p>
                                <div class="flex flex-wrap gap-5 mt-5 justify-center">
                                    <div v-for="tech in project.Technologies" :key="tech.Techname"
                                        class="flex items-center gap-2 bg-white text-[#020024] rounded-full px-6 py-2">
                                        <Icon :icon="tech.TechIcon" class="w-6 h-6" />
                                        <p class="text-xs font-bold">{{ tech.Techname }}</p>
                                    </div>
                                </div>
                                <button @click="openProjectDetails(project)"
                                    class="bg-[#3a31d8] px-4 py-2 rounded-lg mt-10 shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-[#3a31d8]">
                                    See more
                                </button>
                            </div>
                        </Slide>
                        <template #addons>
                            <Navigation />
                            <Pagination />
                        </template>
                    </Carousel>
                </div>
            </div>
            <div v-if="showModal" @click.self="closeModal"
                class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-500"
                :style="{ opacity: showModal ? '1' : '0', pointerEvents: showModal ? 'auto' : 'none' }">
                <div class="bg-white p-6 rounded-lg text-black w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] max-h-[90vh] overflow-y-auto transform transition-transform duration-500"
                    :style="{ transform: showModal ? 'scale(1)' : 'scale(0.8)' }">
                    <p class="text-lg sm:text-xl lg:text-2xl font-bold mb-4">{{ modalContent.ImageMain }}</p>

                    <div class="flex flex-wrap gap-2 sm:gap-3 mb-4">
                        <div v-for="tech in modalContent.Technologies" :key="tech.Techname"
                            class="flex items-center gap-2 bg-[#f5f5f5] text-black rounded-full px-3 sm:px-4 py-1">
                            <Icon :icon="tech.TechIcon" class="w-4 h-4 sm:w-5 sm:h-5" />
                            <span class="text-sm sm:text-base">{{ tech.Techname }}</span>
                        </div>
                    </div>

                    <div v-if="modalContent.ImageDetails" class="space-y-3">
                        <p class="text-md sm:text-lg font-bold">Gallery</p>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div v-for="image in modalContent.ImageDetails" :key="image.imageName" class="text-center">
                                <img :src="`./assets/images/${image.imageName}`" alt="Project Image"
                                    class="w-full rounded-lg object-cover shadow-lg cursor-pointer"
                                    @click="openFullImage(`/src/assets/images/${image.imageName}`)" />
                                <p class="mt-1 text-sm font-medium">{{ image.imageDetail }}</p>
                            </div>
                        </div>
                    </div>

                    <button @click="closeModal"
                        class="bg-[#3a31d8] text-white px-3 sm:px-4 py-2 rounded-lg mt-4 hover:bg-[#2823c2] w-full sm:w-auto">
                        Close
                    </button>
                </div>
            </div>


            <div v-if="fullImage" @click.self="closeFullImage"
                class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 transition-opacity duration-500"
                :class="{ 'opacity-100': fullImage, 'opacity-0 pointer-events-none': !fullImage }">
                <div class="bg-black p-4 rounded-lg text-white max-w-4xl w-full">
                    <img :src="selectedImage" alt="Full Image" class="w-full h-auto rounded-lg object-contain">
                    <button @click="closeFullImage"
                        class="absolute top-4 right-4 bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200">
                        Close
                    </button>
                </div>
            </div>
        </div>

        <div class="pt-[25%] lg:pt-0 grid lg:h-[160vh] bg-[#020024] text-white font-Inter px-[5%] sm:px-[10%] py-[5%] content-center"
            id="Experiences">
            <div data-aos="fade-right" data-aos-duration="1000">
                <p class="text-5xl font-bold">Experiences</p>
                <div class="mt-10 rounded-lg p-5 text-black grid lg:grid-cols-3 lg:gap-8 grid-cols-1 gap-5">
                    <div v-for="experience in myExperience" :key="experience.id"
                        class="bg-gray-100 rounded-lg p-5 space-y-3 drop-shadow-figmashadow">
                        <p class="text-2xl font-bold">{{ experience.name }}</p>
                        <p class="text-lg"><strong>Company:</strong> {{ experience.where }}</p>
                        <p class="text-lg"><strong>Period:</strong> {{ experience.period }}</p>
                        <p class="text-lg"><strong>Location:</strong> {{ experience.place }}</p>
                        <p class="text-lg"><strong>projects:</strong> {{ experience.projects }}</p>
                        <div v-for="tech in experience.techlearned" :key="tech.techname"
                            class="flex items-center gap-2 bg-white text-[#020024] rounded-full px-6 py-2">
                            <Icon :icon="tech.techicon" class="w-6 h-6" />
                            <p class="text-xs font-bold">{{ tech.techname }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import { ref,onMounted } from 'vue';
import { Icon } from '@iconify/vue';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';
import AOS from "aos";
import PDF from './assets/AMINE_SOLBI_RESUME.pdf';
const isLoading = ref(true);
const Myname = ref('<Amine Solbi />');
const showModal = ref(false);
const modalContent = ref<Record<string, any>>({});
const selectedImage = ref<string>('');
const fullImage = ref(false);
const isMenuOpen = ref(false);
const checkFontLoaded = () => {
    const font = new FontFace(
        'Inter',
        'url(https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap)'
    );
    font.load().then(() => {
        isLoading.value = false;
    }).catch(() => {
        console.error('Font failed to load');
        isLoading.value = false;
    });
};
onMounted(() => {
    checkFontLoaded();
    AOS.init();
});
const downloadResume = () => {
    const link = document.createElement('a');
    link.href = PDF;
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};
const openFullImage = (imageUrl: string) => {
    selectedImage.value = imageUrl;
    fullImage.value = true;
};

const closeFullImage = () => {
    fullImage.value = false;
    selectedImage.value = '';
};

const openProjectDetails = (project: Record<string, any>) => {
    modalContent.value = project;
    showModal.value = true;
};

const closeModal = () => {
    showModal.value = false;
    modalContent.value = {};
};

const config = ref({
    transition: 500,
})
interface Skills {
    id:number;
    Categorie:string;
    List:{
        Techname:string,
        TechIcon:string
    }[];
}
interface Projects{
    id:number,
    ColorHex:string;
    Titel: string;
    IconName:string;
    ImageMain:string;
    Descreption:string;
    Technologies:{
        Techname:string,
        TechIcon:string
    }[];
    ImageDetails:{
        imageName:string,
        imageDetail:string
    }[];    
}
interface Experiance{
    id:number;
    name:string;
    where:string;
    period:string;
    place:string;
    projects:string;
    techlearned:{
        techname:string;
        techicon:string
    }[];
}
const mySkills=ref<Skills[]>([
    {
        id:1,
        Categorie:'Frontend Framework',
        List:[
            { Techname: 'VueJs', TechIcon:'devicon:vuejs'},
            { Techname: 'ReactJs/ReactNative', TechIcon:'vscode-icons:file-type-reactjs'},
            { Techname: 'Nuxt', TechIcon: 'vscode-icons:file-type-nuxt' },            
            { Techname: 'Angular', TechIcon: 'vscode-icons:file-type-angular' },
            { Techname: 'TailwindCss', TechIcon: 'devicon:tailwindcss' },
            { Techname: 'Bootstrap', TechIcon: 'skill-icons:bootstrap' },
        ]
    },
    {
        id:2,
        Categorie:'Backend Framework',
        List:[
            { Techname: 'Django', TechIcon:'vscode-icons:file-type-django'}
        ]
    },
    {
        id:3,
        Categorie: 'Version Control',
        List: [
            { Techname: 'Github', TechIcon: 'mdi:github-box' }
        ]
    },
    {
        id:4,
        Categorie: 'DevOps',
        List: [
            { Techname: 'Docker', TechIcon: 'skill-icons:docker' }
        ]
    },
    {
        id:5,
        Categorie: 'Project managment',
        List: [
            { Techname: 'Jira', TechIcon: 'logos:jira' }
        ]
    },
    {
        id:6,
        Categorie: 'CMS',
        List: [
            { Techname: 'Directus', TechIcon: 'simple-icons:directus' }
        ]
    },
])
const myProjects=ref<Projects[]>([
    {
        id: 1,
        Titel: 'E-commerce',
        IconName: 'mingcute:flower-4-fill',
        ImageMain: 'FlowerShop Admin',
        Descreption: 'An E-commerce Flower Shop combines Vue.js for a dynamic frontend with TailwindCSS for modern, responsive styling. The backend, powered by Django, manages user authentication, order processing, and database operations, with APIs provided by Django REST Framework for seamless frontend-backend communication. Using Docker, the entire application, including a containerized database, is packaged for consistent development and deployment, ensuring a scalable and efficient platform for selling flowers online.',
        Technologies: [
            { Techname: 'VueJs', TechIcon: 'devicon:vuejs' },
            { Techname: 'TailwindCss', TechIcon: 'devicon:tailwindcss' },
            { Techname: 'Django', TechIcon: 'vscode-icons:file-type-django' },
            { Techname: 'Docker', TechIcon: 'skill-icons:docker' }
        ],
        ImageDetails: [
            { imageName: 'commande.png', imageDetail: 'Commande List' },
            { imageName: 'dashboard.png', imageDetail: 'Dashboard' },
            { imageName: 'managment.png', imageDetail: 'Product managment and overview' },
            { imageName: 'Users.png', imageDetail: 'Users managment' },
            { imageName: 'Docker.png', imageDetail: 'Backend container with postgresdb' }


        ],
        ColorHex: '#419696'
    },
    {
        id: 2,
        Titel: 'Web Application for absence management',
        IconName: 'material-symbols:settings-account-box',
        ImageMain: 'Absence management',
        Descreption: 'An Absence Management System uses Angular for an interactive and user-friendly frontend, allowing employees and managers to track and manage leave requests efficiently. The backend, built with Django, handles user authentication, absence records, and approval workflows, offering secure and robust data management. Together, this stack ensures a seamless, scalable solution for managing workplace absences.',
        Technologies: [
            { Techname: 'Angular', TechIcon: 'vscode-icons:file-type-angular' },
            { Techname: 'Django', TechIcon: 'vscode-icons:file-type-django' }
        ],
        ImageDetails: [
            { imageName: 'backend.png', imageDetail: 'Backend root list' },
            { imageName: 'crud.png', imageDetail: 'Crud form' },
            { imageName: 'exception.png', imageDetail: 'exceptions' },
            { imageName: 'interface.png', imageDetail: 'interface' },
            { imageName: 'login.png', imageDetail: 'Loging using JWT' }
        ],
        ColorHex: '#196bb7'
    },
    {
        id: 3,
        Titel: 'E-learning Web App',
        IconName: 'streamline:global-learning-solid',
        ImageMain: 'Päiperléck',
        Descreption: 'An E-learning Web App leverages React for a dynamic and engaging user interface, styled with Chakra UI for a clean and responsive design. The backend, powered by Django, manages user authentication, course content, and progress tracking. This combination delivers a scalable, user-friendly platform for interactive online learning experiences.',
        Technologies: [
            { Techname: 'ReactJs', TechIcon: 'vscode-icons:file-type-reactjs' },
            { Techname: 'Django', TechIcon: 'vscode-icons:file-type-django' },
            { Techname: 'ChakraUI', TechIcon: 'devicon:chakraui' },
        ],
        ImageDetails: [
            { imageName: 'Addtest.png', imageDetail: 'CRUD of quiz' },
            { imageName: 'api.png', imageDetail: 'API' },

        ],
        ColorHex: '#089BD7'
    },
    {
        id: 3,
        Titel: 'Showcase website',
        IconName: 'streamline:shopping-jewelry-diamond-2-diamond-money-payment-finance-wealth',
        ImageMain: 'Jewelry',
        Descreption: 'A jewelry showcase website is a visually captivating platform that highlights exquisite collections of jewelry, including necklaces, rings, bracelets, and more. It emphasizes high-quality images, detailed descriptions, and brand storytelling to engage customers and reflect the brand\'s identity',
        Technologies: [
            { Techname: 'Nuxt', TechIcon: 'vscode-icons:file-type-nuxt' },
            { Techname: 'TailwindCss', TechIcon: 'devicon:tailwindcss' },
        ],
        ImageDetails: [
            { imageName: 'capvitrine1.png', imageDetail: 'Show case screen 1' },
            { imageName: 'capvitrine2.png', imageDetail: 'Show case screen 2' },
            { imageName: 'capvitrine3.png', imageDetail: 'Show case screen 3' }

        ],
        ColorHex: '#C1A647'
    },
    {
        id: 3,
        Titel: 'Web Application to manage Boats',
        IconName: 'ic:baseline-directions-boat-filled',
        ImageMain: 'Boat managment',
        Descreption: 'Project description. Crafting a dynamic web solution to effortlessly manage boats, utilizing PHP, MySQL (via phpMyAdmin), JavaScript, CSS, and jQuery. This ensures smooth administration and user-friendly interaction, optimizing overall efficiency for streamlined boat operations',
        Technologies: [
            { Techname: 'jQuery', TechIcon: 'devicon:jquery' },
            { Techname: 'phpMyAdmin', TechIcon: 'simple-icons:phpmyadmin' },
            { Techname: 'JavaScript', TechIcon: 'logos:javascript' },
            { Techname: 'Bootstrap', TechIcon: 'skill-icons:bootstrap' },
            { Techname: 'HTML5', TechIcon: 'devicon:html5' }
        ],
        ImageDetails: [
            { imageName: 'Addwork.png', imageDetail: 'Add form' },
            { imageName: 'AddBoat.png', imageDetail: 'Table data' },
            { imageName: 'DashboardBoat.png', imageDetail: 'data charts  ' },
            { imageName: 'Home.png', imageDetail: 'Home' },
            { imageName: 'calendar.png', imageDetail: 'Boat plan managment' }

        ],
        ColorHex: '#2B293E'
    },
    {
        id: 3,
        Titel: 'Automatic chart',
        IconName: 'tabler:automation',
        ImageMain: 'Chart',
        Descreption: 'Autonomous cart programmed with Arduino, loaded with goods, navigates based on predefined x, y coordinates using integrated sensors.',
        Technologies: [
            { Techname: 'VueJs', TechIcon: 'devicon:vuejs' },
            { Techname: 'TailwindCss', TechIcon: 'devicon:tailwindcss' },
            { Techname: 'Django', TechIcon: 'vscode-icons:file-type-django' },
            { Techname: 'Docker', TechIcon: 'skill-icons:docker' }
        ],
        ImageDetails: [
            { imageName: 'arduino.jpg', imageDetail: 'componants' }
        ],
        ColorHex: '#cbcbcb'
    }
])
const myExperience =ref<Experiance []>([
    {
        id: 1,
        name: 'Technician trainee',
        where: 'Marsa Maroc',
        period: 'juin 2021 - août 2021 · 3 months',
        place: 'Agadir, Souss-Massa, Maroc · Hybride',
        projects: 'Developed two web applications for managing boats and materials, utilizing full-stack technologies. These applications enable efficient tracking of inventory, maintenance schedules, and resource allocation, improving operational workflow and data accessibility for users',
        techlearned: [
            { techname: 'MySQL', techicon:'devicon:mysql'},
            { techname: 'PhpMyAdmin', techicon: 'simple-icons:phpmyadmin' },
            { techname: 'Php', techicon: 'skill-icons:php-dark' },
            { techname: 'jQuery', techicon: 'devicon:jquery' },
            { techname: 'JavaScript', techicon: 'logos:javascript' },
            { techname: 'HTML5', techicon: 'devicon:html5' },
            { techname: 'Bootstrap', techicon: 'skill-icons:bootstrap' }

        ]
    },
    {
        id: 2,
        name: 'Internship engineering assistant',
        where: 'Albarray',
        period: 'juin 2022 - déc. 2022 · 7 months',
        place: 'Agadir, Souss-Massa, Maroc · Hybride',
        projects: 'Developed and deployed a web-based inventory management system for Albarray, utilizing Django for the backend and ReactJS for the frontend. The application enabled efficient tracking of inventory, including automatic updates, sorting, and reporting features, with a user-friendly interface for seamless management.',
        techlearned: [
            { techname: 'ReactJs', techicon: 'vscode-icons:file-type-reactjs' },
            { techname: 'TailwindCss', techicon: 'devicon:tailwindcss' },
            { techname: 'Django', techicon: 'vscode-icons:file-type-django' },

        ]
    },
    {
        id: 3,
        name: 'Capstone Project in Software Engineering',
        where: 'Päiperléck Aides et Soins à Domicile - Résidences Seniors',
        period: 'févr. 2023 - juil. 2023 · 6 months',
        place: 'Agadir, Souss-Massa, Maroc · Hybride',
        projects: 'Developed and deployed e-learning web applications using ReactJS, Angular, and Django. The applications were designed to provide an interactive and user-friendly learning environment, integrating features such as course management, quizzes, and multimedia content. Focused on performance optimization, responsive design, and seamless user experience across devices.',
        techlearned: [
            { techname: 'ReactJs', techicon: 'vscode-icons:file-type-reactjs' },
            { techname: 'ChakraUI', techicon: 'devicon:chakraui' },
            { techname: 'Django', techicon: 'vscode-icons:file-type-django' },
            { techname: 'Github', techicon: 'mdi:github-box' }

        ]
    },
    {
        id: 4,
        name: 'Full Stack Dev A&T (Freelance)',
        where: 'A&T Experts',
        period: 'juil. 2023 - août 2023 · 2 months',
        place: 'Agadir, Souss-Massa, Maroc · Hybride',
        projects: 'employees managment and financial management using Angular and django',
        techlearned: [
            { techname: 'Angular', techicon: 'vscode-icons:file-type-angular' },
            { techname: 'Django', techicon: 'vscode-icons:file-type-django' },
            { techname: 'Github', techicon: 'mdi:github-box' }

        ]
    },
    {
        id: 5,
        name: 'Intership SAP ABAP Technical Consultant.',
        where: 'SKATYS, SAP Gold Partner Maroc & Afrique',
        period: 'mars 2024 - juil. 2024 · 5 months',
        place: 'Casablanca-Settat, Maroc · Hybride',
        projects: 'Implementing API integration using OData, allowing efficient querying and data interaction between systems while ensuring compatibility and performance',
        techlearned: [
            { techname: 'ABAP', techicon: '' },
            { techname: 'ABAP-OO', techicon: '' },
            { techname: 'SAP', techicon: 'logos:sap' }

        ]
    }
])
</script>
<style>
html {
    scroll-behavior: smooth;
}
.transition-transform {
    transition-timing-function: ease-in-out;
}
.modal {
    position: fixed;
    z-index: 999;
    top: 20%;
    left: 50%;
    width: 300px;
    margin-left: -150px;
}
.carousel__slide {
    padding: 5;
}

.carousel__viewport {
    perspective: 2000px;
}

.carousel__track {
    transform-style: preserve-3d;
}

.carousel__slide--sliding {
    transition: 0.5s;
}

.carousel__slide {
    opacity: 0.9;
    transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active~.carousel__slide {
    transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
    opacity: 1;
    transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide.carousel__slide--next {
    opacity: 1;
    transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
    opacity: 1;
    transform: rotateY(0) scale(1);
}
@media (max-width: 768px) {
    .text-5xl {
        font-size: 2rem;
    }

    .text-3xl {
        font-size: 1.5rem;
    }
}
</style>
