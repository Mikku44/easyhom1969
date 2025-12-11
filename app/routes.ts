import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("routes/layout.tsx", [
        index("routes/home.tsx"),
        route("/qualifications","routes/qualifications.tsx"),
        route("/services","routes/services.tsx"),
        route("/why-easy-hom1969","routes/why-easy-hom1969.tsx"),
        route("/clients","routes/clients.tsx"),
        route("/blogs","routes/blogs.tsx"),
        route("/contact","routes/contact.tsx"),

    ])
] satisfies RouteConfig;
