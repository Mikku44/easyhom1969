import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("routes/layout.tsx", [
        index("routes/home.tsx"),
        route("/qualifications", "routes/qualifications.tsx"),
        route("/personal-loan", "routes/personal-loan.tsx"),
        route("/business-loan", "routes/business-loan.tsx"),
        route("/services", "routes/services.tsx"),
        route("/why-easy-hom1969", "routes/why-easy-hom1969.tsx"),
        route("/clients", "routes/clients.tsx"),
        route("/blogs", "routes/blogs.tsx"),
        route("/blogs/:slug", "routes/slug/blog.tsx"),
        route("/contact", "routes/contact.tsx"),
        route("/privacy-policy", "routes/privacy-policy.tsx"),
        route("/terms-of-service", "routes/terms-of-service.tsx"),
        route("/condo-loan-calculator", "routes/estimator.tsx"),


    ]),

    
    // admin
    route("/admin/login", "routes/admin/login.tsx"),
    layout("routes/admin/layout.tsx", [
        route("/admin/blog/add", "routes/admin/blog.add.tsx"),
        route("/admin/blog/list", "routes/admin/blog.list.tsx"),
        route("/admin/blog/update/:blogId", "routes/admin/blog.update.tsx"),
    ]),


    // api

    route("/api/apply", "routes/api/apply.tsx"),
] satisfies RouteConfig;
