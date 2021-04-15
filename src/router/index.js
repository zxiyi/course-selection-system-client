import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Login.vue";
import Layout from "@/views/Layout.vue";
import Table from "@/views/Table.vue";
import Info from "@/views/Info.vue";
import SelectClass from "@/views/SelectClass.vue";
import Curriculum from "@/views/Curriculum.vue";
import {
  student,
  teacher,
  college,
  subject,
  discipline,
  course
} from "@/config/table";
import { studentInfo, teacherInfo } from "@/config/info";
Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/admin",
    name: "admin",
    component: Layout,
    redirect: "/admin/studentInfo",
    children: [
      {
        path: "studentInfo",
        component: Table,
        name: "studentInfo",
        meta: student
      },
      {
        path: "teacherInfo",
        component: Table,
        name: "teacherInfo",
        meta: teacher
      },
      {
        path: "collegeInfo",
        component: Table,
        name: "collegeInfo",
        meta: college
      },
      {
        path: "subjectInfo",
        component: Table,
        name: "subjectInfo",
        meta: subject
      },
      {
        path: "disciplineInfo",
        component: Table,
        name: "disciplineInfo",
        meta: discipline
      },
      {
        path: "courseInfo",
        component: Table,
        name: "courseInfo",
        meta: course
      }
    ]
  },
  {
    path: "/student",
    name: "student",
    component: Layout,
    redirect: "/student/selectClass",
    children: [
      {
        path: "selectClass",
        component: SelectClass,
        name: "selectClass"
      },
      {
        path: "curriculum",
        component: Curriculum,
        name: "curriculum",
        meta: {
          title: student
        }
      },
      {
        path: "information",
        component: Info,
        name: "information",
        meta: studentInfo
      }
    ]
  },
  {
    path: "/teacher",
    name: "teacher",
    component: Layout,
    redirect: "/teacher/information",
    children: [
      {
        path: "selectClass",
        component: SelectClass,
        name: "selectClass"
      },
      {
        path: "curriculum",
        component: Curriculum,
        name: "curriculum",
        meta: {
          title: teacher
        }
      },
      {
        path: "information",
        component: Info,
        name: "information",
        meta: teacherInfo
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const isLogin = localStorage.token;
  if (to.path == "/login") {
    next();
  } else {
    isLogin ? next() : next("/login");
  }
});

export default router;
